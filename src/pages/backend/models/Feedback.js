const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true // Nama wajib diisi
  },
  email: { 
    type: String, 
    required: true,  // Email wajib diisi
    match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'], // Validasi email dengan regex
    unique: true,  // Email harus unik
    index: true   // Menambahkan index untuk email
  },
  phone: { 
    type: String, 
    required: true, // Nomor telepon wajib diisi
    match: [/^\+?(\d{1,4}[\s\-]?)?(\(?\d{2,3}\)?[\s\-]?)?[\d\s\-]{6,14}$/, 'Please provide a valid phone number'], // Validasi nomor telepon dengan regex
    unique: true,  // Nomor telepon harus unik
    index: true   // Menambahkan index untuk phone
  },
  message: { 
    type: String, 
    required: true // Pesan wajib diisi
  },
  rating: { 
    type: Number, 
    required: true, // Rating wajib diisi
    min: 1, // Minimum rating adalah 1
    max: 5  // Maksimum rating adalah 5
  },
  createdAt: { 
    type: Date, 
    default: Date.now // Tanggal dibuat otomatis
  },
});

// Menambahkan index untuk menghindari duplikasi berdasarkan email dan phone
feedbackSchema.index({ email: 1, phone: 1 }, { unique: true });

module.exports = mongoose.model('Feedback', feedbackSchema);
