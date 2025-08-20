require('dotenv').config();  // Memastikan dotenv digunakan untuk memuat .env file

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

// Impor Model Feedback dan LiveChat
const Feedback = require('./models/Feedback');  // Model untuk feedback
const Chat = require('./models/Chat');

const app = express();
const server = http.createServer(app);

// Inisialisasi Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", 
    methods: ["GET", "POST"]
  }
});

app.use(cors()); 
app.use(express.json()); 

// ===== Koneksi MongoDB =====
const mongoUri = process.env.MONGO_URL || "mongodb://localhost:27017/test";  
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ MongoDB Connected to test database");
}).catch(err => {
  console.error("❌ Gagal Koneksi MongoDB:", err);
});


// ===== Setup Nodemailer untuk Notifikasi Email =====
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,  // Email dari .env
    pass: process.env.EMAIL_PASS,  // Password dari .env
  },
});


// Fungsi untuk mengirim email ke admin
const sendEmailToAdmin = (userMessage) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,  // Email pengirim
    to: process.env.EMAIL_TO,      // Email tujuan (admin)
    subject: "Tanggapan Pengguna: Feedback",
    text: `Berikut adalah feedback yang diberikan oleh pengguna:\n\n${userMessage}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Gagal mengirim email:", error);
    } else {
      console.log("✅ Email sent: " + info.response);
    }
  });
};

// ===== API Endpoint: Feedback =====
app.post("/api/send-feedback", async (req, res) => {
  try {
    const { name, email, phone, message, rating } = req.body;

    // Log data yang diterima dari frontend untuk debugging
    console.log("Data feedback yang diterima:", req.body);

    // Validasi input
    if (!name || !email || !phone || !message || !rating) {
      return res.status(400).json({ message: "Semua field harus diisi." });
    }

    // Cek apakah ada feedback dengan email atau nomor telepon yang sama
    const existingFeedback = await Feedback.findOne({
      $or: [{ email }, { phone }]  // Cek apakah ada email atau telepon yang sama
    });

    if (existingFeedback) {
      return res.status(400).json({ message: "Feedback dengan email atau nomor telepon ini sudah ada." });
    }

    // Membuat objek feedback baru
    const newFeedback = new Feedback({
      name,
      email,
      phone,
      message,
      rating,
    });

    // Menyimpan feedback ke MongoDB
    await newFeedback.save();

    // Kirim email notifikasi ke admin setelah feedback disimpan
    sendEmailToAdmin(`Nama: ${name}\nEmail: ${email}\nTelepon: ${phone}\nPesan: ${message}\nRating: ${rating}`);

    // Kirim response sukses ke frontend
    res.status(200).json({ message: "Feedback berhasil disimpan" });
  } catch (error) {
    console.error("❌ Gagal menyimpan feedback:", error);
    res.status(500).json({ message: "Terjadi kesalahan saat menyimpan feedback", error: error.message });
  }
});

// ===== API Endpoint: Livechat =====
io.on('connection', (socket) => {
  console.log('A user connected');
  
socket.on('sendMessage', async (msgData) => {
  console.log("Pesan diterima dari frontend:", msgData);  // Log data yang diterima dari frontend

  try {
    // Membuat instance baru dari model Chat
    const newLiveChat = new Chat({
      userId: msgData.userId,  // Pastikan userId valid jika diperlukan
      username: msgData.username,
      message: msgData.message,
      timestamp: new Date(),    // Menyimpan waktu pengiriman pesan
    });

    console.log("Data yang akan disimpan ke MongoDB:", newLiveChat);  // Log data yang akan disimpan

    // Simpan pesan ke database
    await newLiveChat.save();
    console.log("Pesan berhasil disimpan ke database");

    // Emit pesan ke semua client yang terhubung
    io.emit('receiveMessage', msgData);

  } catch (err) {
    // Tangkap error jika ada dan tampilkan di log
    console.error("❌ Gagal menyimpan pesan ke MongoDB:", err);
  }
});




  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// ===== Start Server =====
const PORT = process.env.PORT || 5000;  // Port yang digunakan untuk server
server.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
