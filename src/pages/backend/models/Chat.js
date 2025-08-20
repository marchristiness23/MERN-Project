const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  username: { 
    type: String, 
    required: true 
  },
  message: { 
    type: String, 
    required: true 
  },
  timestamp: { 
    type: Date,  
    default: Date.now  
  }
});

// Menggunakan collection 'livechats' atau 'chats'
module.exports = mongoose.model('Chat', chatSchema, 'livechats');
