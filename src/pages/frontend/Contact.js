import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [rating, setRating] = useState(0);
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingClick = (val) => setRating(val);

const handleSubmit = async (e) => {
  e.preventDefault();

  const dataToSend = {
    ...formData,
    rating,
  };

  try {
    const response = await fetch("http://localhost:5000/api/send-feedback", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Gagal:", errorData);
      setSubmitStatus('Gagal mengirim. Coba lagi.');
      return;
    }

    const result = await response.json();
    console.log("✅ Feedback berhasil:", result);

    setSubmitStatus('Feedback berhasil dikirim!');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setRating(0);
  } catch (error) {
    console.error("🔥 Terjadi kesalahan jaringan:", error);
    setSubmitStatus('Terjadi kesalahan. Coba lagi.');
  }
};


  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Kiri */}
        <div className="contact-left">
          <h2>Contact Us</h2>
          <p>
            Interested in volunteering with us, finding out about our Training Hub, Investors Club, or Expertise Network?
            Click the button below to build with us.
          </p>
          <div className="contact-icons">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=afforgadget1@gmail.com&su=Pertanyaan%20Produk&body=Halo%20Affor%20Gadget,%20saya%20ingin%20bertanya%20tentang%20produk%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="icon-group fade-in-up"
            >
              <img src="/Assets/gmail.png" alt="Email" />
              <span>Email Us</span>
            </a>
            
            <a
              href="https://wa.me/6282317964911"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-group fade-in-up delay-1"
            >
              <img src="/Assets/whatsapp.png" alt="WhatsApp" />
              <span>Chat with us on WhatsApp</span>
            </a>

          </div>
          
          <div className="qr-code fade-in-up delay-2">
            <img src="/Assets/qrcode.png" alt="QR Code" />
            <p>Scan this code to start a WhatsApp chat with us</p>
          </div>
        </div>

        {/* Kanan */}
        <div className="contact-right fade-in-up delay-3">
          <form onSubmit={handleSubmit}>
            <label>Full Name <span>(required)</span></label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <label>Email <span>(required)</span></label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <label>Phone Number <span>(required)</span></label>
            <input
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              required
              value={formData.phone}
              onChange={handleChange}
            />

            <label>Message <span>(required)</span></label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your message..."
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <p className="rating-title">Beri nilai layanan kami!</p>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((val) => (
                <span
                  key={val}
                  className={`star ${val <= rating ? 'active' : ''}`}
                  onClick={() => handleRatingClick(val)}
                >
                  ★
                </span>
              ))}
            </div>

            <button type="submit">Send a Message</button>
            {submitStatus && <p className="submit-status">{submitStatus}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
