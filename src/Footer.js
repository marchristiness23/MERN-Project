import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/Assets/logo_afforgadget.png" alt="Affor Gadget" />
          <div className="business-hours">
            <p><strong>MON-THU</strong>: 10:00 - 19:00</p>
            <p><strong>SAT-SUN</strong>: 12:00 - 17:00</p>
          </div>
        </div>

        <div className="footer-connect">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src="/Assets/tiktok.png" alt="TikTok" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/Assets/instagram.png" alt="Instagram" />
            </a>
          </div>
          <div className='footer-text'>
            <p>FOLLOW US ON!</p>
          </div>
          
        </div>

        <div className="footer-location">
          <h3>Location</h3>
          <img src="/Assets/maps.png" alt="Location" />
          <p>216 Cinunuk Street, Bandung Regency</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
