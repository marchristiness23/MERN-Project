import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./LiveChat.css";

// Menghubungkan ke server Socket.IO
const socket = io("http://localhost:5000");

function Livechat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isUserInfoSet, setIsUserInfoSet] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [chatStarted, setChatStarted] = useState(false); // Menyimpan status chat dimulai
  const [isInFAQ, setIsInFAQ] = useState(false); // Status untuk FAQ

  useEffect(() => {
    if (chatStarted) {
      setTimeout(() => {
        setChat((prevChat) => [
          ...prevChat,
          {
            username: "Ariel",
            message: 
              `Hai Kak ${userInfo.name}! 👋<br /><br />` +
              `Selamat datang di ChatLive <strong>Affor Gadget</strong>.<br />` +
              `Kini, semua kebutuhan informasi dan reservasi bisa Kakak akses dengan mudah langsung dari ChatLive! 💬📱<br /><br />` +
              `Berikut layanan yang tersedia:<br /><br />` +
              `1️⃣ <i class="fas fa-mobile-alt"></i> Konsultasi Kebutuhan Barang Elektronik (Smartphone, Laptop, Camera)<br /><br />` +
              `2️⃣ <i class="fas fa-shipping-fast"></i> Pengiriman Paket<br /><br />` + 
              `3️⃣ <i class="fas fa-tools"></i> Perbaikan Barang Elektronik (Smartphone, Laptop, Camera)<br /><br />` +
              `4️⃣ <i class="fas fa-box"></i> Paket Murah<br /><br />` +
              `Silakan ketik angka pilihan Kakak, atau ketik menu untuk kembali ke halaman utama.`,
            timestamp: new Date(),
          },
        ]);
      }, 1500);
    }
  }, [chatStarted, userInfo.name]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim() || !userInfo.name.trim()) return;

    const msgData = {
      userId: "userId123",
      username: userInfo.name,
      message,
      timestamp: new Date(),
    };

    setChat((prevChat) => [...prevChat, msgData]);

    socket.emit("sendMessage", msgData);
    setMessage(""); 

    if (isInFAQ) {
      if (message === "1") {
        setChat((prevChat) => [
          ...prevChat,
          {
            username: "Ariel",
            message: 
              `<strong>Bagaimana cara melakukan pembayaran?</strong><br />` +
              `Kami menerima pembayaran melalui transfer bank, kartu kredit, dan pembayaran digital.<br />` +
              `Apakah Anda membutuhkan bantuan lebih lanjut?`,
            timestamp: new Date(),
          },
        ]);
      } else if (message === "2") {
        setChat((prevChat) => [
          ...prevChat,
          {
            username: "Ariel",
            message: 
              `<strong>Apakah ada garansi untuk produk?</strong><br />` +
              `Ya, semua produk kami dilengkapi dengan garansi resmi selama 1 tahun.<br />` +
              `Jika ada masalah dengan produk Anda, kami siap membantu!`,
            timestamp: new Date(),
          },
        ]);
      } else if (message === "3") {
        setChat((prevChat) => [
          ...prevChat,
          {
            username: "Ariel",
            message: 
              `<strong>Bagaimana cara menghubungi customer service?</strong><br />` +
              `Anda dapat menghubungi customer service melalui<br /><br />📱 <a href="https://wa.me/082317964911" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>` +
              `<a href="mailto:afforgadget1@gmail.com"><i class="fas fa-envelope"></i><br />💬 email</a>.<br />` +
              `<br />Jika Anda membutuhkan bantuan langsung, kami siap membantu!`,
            timestamp: new Date(),
          },
        ]);
      } else if (message.toLowerCase() === "menu") {
        setIsInFAQ(false);
        setChat((prevChat) => [
          ...prevChat,
          {
            username: "Ariel",
            message: 
              `Berikut layanan yang tersedia:<br /><br />` +
              `1️⃣ <i class="fas fa-mobile-alt"></i> Konsultasi Kebutuhan Barang Elektronik (Smartphone, Laptop, Camera)<br /><br />` +
              `2️⃣ <i class="fas fa-shipping-fast"></i> Pengiriman Paket<br /><br />` + 
              `3️⃣ <i class="fas fa-tools"></i> Perbaikan Barang Elektronik (Smartphone, Laptop, Camera)<br /><br />` +
              `4️⃣ <i class="fas fa-box"></i> Paket Murah<br /><br />` + 
              `Silakan ketik angka pilihan Kakak, atau ketik menu untuk kembali ke halaman utama.`,
            timestamp: new Date(),
          },
        ]);
      } else {
        setChat((prevChat) => [
          ...prevChat,
          {
            username: "Ariel",
            message: "Maaf, saya tidak mengerti pilihan tersebut. Silakan pilih FAQ lainnya.",
            timestamp: new Date(),
          },
        ]);
      }
    } else {
      // Main Menu Logic
      if (message === "1") {
        setChat((prevChat) => [
          ...prevChat,
          {
            username: "Ariel",
            message: 
              `Untuk konsultasi kebutuhan barang elektronik, berikut beberapa pilihan yang kami tawarkan:<br /><br />` +
              ` <strong><i class="fas fa-mobile-alt"></i> Smartphone</strong>: Kami memiliki berbagai model terbaru iPhone, Samsung Galaxy, dan lainnya.<br /><br />` +
              ` <strong><i class="fas fa-laptop"></i> Laptop</strong>: Tersedia MacBook terbaru, baik MacBook Pro maupun MacBook Air.<br /><br />` +
              ` <strong><i class="fas fa-camera"></i> Kamera</strong>: Pilihan kamera digital termasuk iPhone 13 Pro Max, Samsung Galaxy S22 Ultra.<br /><br />` +
              `Jika Anda tertarik dengan produk tertentu, beri tahu kami!<br /><br />` +
              `Atau ketik "faq" untuk pertanyaan yang sering diajukan!`,
            timestamp: new Date(),
          },
        ]);
      } else if (message === "2") {
        setChat((prevChat) => [
          ...prevChat,
          {
            username: "Ariel",
            message: `Berikut adalah informasi terkait pengiriman paket yang kami tawarkan:<br /><br />` +
                    `1. <strong><i class="fas fa-shipping-fast"></i> Metode Pengiriman</strong>: Kami bekerja sama dengan berbagai ekspedisi terkemuka.<br /><br />` +
                    `2. <strong><i class="fas fa-clock"></i> Estimasi Waktu Pengiriman</strong>: Pengiriman biasanya memakan waktu 1-3 hari.<br /><br />` +
                    `3. <strong><i class="fas fa-dollar-sign"></i> Biaya Pengiriman</strong>: Biaya dihitung berdasarkan berat dan jarak.<br /><br />` +
                    `Silakan beri tahu kami tujuan pengiriman dan produk yang ingin Anda kirim.<br /><br />` +
                    `Atau ketik "faq" untuk pertanyaan yang sering diajukan!`,
            timestamp: new Date(),
          },
        ]);
      } else if (message === "3") {
        setChat((prevChat) => [
          ...prevChat,
          {
            username: "Ariel",
            message: `Layanan perbaikan kami mencakup berbagai jenis barang elektronik:<br /><br />` +
                    `1. <strong><i class="fas fa-mobile-alt"></i> Smartphone</strong>: Perbaikan layar, baterai, dan kamera.<br /><br />` +
                    `2. <strong><i class="fas fa-laptop"></i> Laptop</strong>: Perbaikan keyboard, RAM, dan layar.<br /><br />` +
                    `3. <strong><i class="fas fa-camera"></i> Kamera</strong>: Perbaikan lensa dan kalibrasi sensor.<br /><br />` +
                    `Silakan beri tahu kami produk dan kerusakan yang Anda alami.<br /><br />` +
                    `Atau ketik "faq" untuk pertanyaan yang sering diajukan!`,
            timestamp: new Date(),
          },
        ]);
      } else if (message === "4") {
        setChat((prevChat) => [
          ...prevChat,
          {
            username: "Ariel",
            message: `Berikut adalah beberapa paket murah yang kami tawarkan:<br /><br />` +
                    `1. <strong><i class="fas fa-mobile-alt"></i> Paket Smartphone + Aksesori</strong>: Dapatkan iPhone 13 + AirPods hanya Rp 12.999.000!<br /><br />` +
                    `2. <strong><i class="fas fa-laptop"></i> Paket Laptop + Tas</strong>: MacBook Air + Tas Laptop hanya Rp 14.499.000.<br /><br />` +
                    `3. <strong><i class="fas fa-camera"></i> Paket Kamera + Tripod</strong>: Samsung Galaxy Camera + Tripod hanya Rp 8.999.000.<br /><br />` +
                    `Silakan pilih paket yang Anda minati atau beri tahu kami jika Anda ingin kustomisasi.<br /><br />` +
                    `Atau ketik "faq" untuk pertanyaan yang sering diajukan!`,
            timestamp: new Date(),
          },
        ]);
      } else if (message.toLowerCase() === "menu") {
        setChat((prevChat) => [
          ...prevChat,
          {
            username: "Ariel",
            message: 
              `Berikut layanan yang tersedia:<br /><br />` +
              `1️⃣ <i class="fas fa-mobile-alt"></i> Konsultasi Kebutuhan Barang Elektronik (Smartphone, Laptop, Camera)<br /><br />` +
              `2️⃣ <i class="fas fa-shipping-fast"></i> Pengiriman Paket<br /><br />` + 
              `3️⃣ <i class="fas fa-tools"></i> Perbaikan Barang Elektronik (Smartphone, Laptop, Camera)<br /><br />` +
              `4️⃣ <i class="fas fa-box"></i> Paket Murah<br /><br />` + 
              `Silakan ketik angka pilihan Kakak, atau ketik menu untuk kembali ke halaman utama.<br /><br />` +
              `Atau ketik "faq" untuk pertanyaan yang sering diajukan!`,
            timestamp: new Date(),
          },
        ]);
      } else if (message.toLowerCase() === "faq") {
        setIsInFAQ(true); // Mengaktifkan mode FAQ
        setChat((prevChat) => [
          ...prevChat,
          {
            username: "Ariel",
            message: 
              `Berikut adalah beberapa pertanyaan yang sering diajukan (FAQ):<br /><br />` +
              `1. Bagaimana cara melakukan pembayaran?<br />` +
              `2. Apakah ada garansi untuk produk?<br />` +
              `3. Bagaimana cara menghubungi customer service?<br /><br />` +
              `Silakan pilih nomor FAQ yang ingin Anda ketahui lebih lanjut.`,
            timestamp: new Date(),
          },
        ]);
      }
    }
  };

const handleSetUserInfo = (e) => {
  e.preventDefault();
  if (
    userInfo.name.trim() &&
    userInfo.email.trim() &&
    userInfo.phone.trim()
  ) {
    setIsUserInfoSet(true);
    setChat([]); 
    setChatStarted(true);
  }
};


  const handleEndChat = () => {
    setChat([]); 
    setIsUserInfoSet(false);
    setChatStarted(false);
    setIsInFAQ(false); 
    setIsOpen(false); 
  };

  return (
    <>
      <div className={`chat-popup ${isOpen ? "open" : ""}`}>
        <div className="chat-header">
          <img src="/Assets/logo_afforgadget.png" alt="Logo" className="chat-logo" />
          <span>Halo, saya Ariel</span>
          <button onClick={() => setIsOpen(false)} className="close-btn">
            ×
          </button>
        </div>

        <div className="chat-box">
          {chat.map((msg, i) => (
            <div
              key={i}
              className={`chat-bubble ${msg.username === userInfo.name ? "sent" : "received"}`}
            >
              <div className="text" dangerouslySetInnerHTML={{ __html: msg.message }} />
              <div className="meta">{new Date(msg.timestamp).toLocaleTimeString()}</div>
            </div>
          ))}
        </div>

        {!isUserInfoSet ? (
          <form className="user-info-form" onSubmit={handleSetUserInfo}>
            <h3>Saya Asisten pribadi Anda</h3>
            <input
              type="text"
              placeholder="Masukkan Nama"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Masukkan Email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            />
            <input
              type="number"
              placeholder="Masukkan Nomor Telepon"
              value={userInfo.phone}
              onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
            />
            <button type="submit">Mulai Chat</button>
          </form>
        ) : (
          <>
            <form className="chat-form" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Tulis pesan..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Kirim Pesan</button>
            </form>

            <button className="end-chat-btn" onClick={handleEndChat}>
              Selesai Chat
            </button>
          </>
        )}
      </div>

      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>
    </>
  );
}

export default Livechat;
