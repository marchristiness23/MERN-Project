import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './MainContent.css';

function MainContent() {
  const [isVisible, setIsVisible] = useState(false);
  const newContentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 } 
    );

    if (newContentRef.current) {
      observer.observe(newContentRef.current);
    }

    return () => {
      if (newContentRef.current) {
        observer.unobserve(newContentRef.current);
      }
    };
  }, []);

    useEffect(() => {
    const mainContent = document.querySelector('.main-content');
    mainContent.style.backgroundImage = 'url("/Assets/background.png")';
    mainContent.style.backgroundSize = 'cover';
    mainContent.style.backgroundPosition = 'center';
    mainContent.style.backgroundRepeat = 'no-repeat';
    mainContent.style.height = '100vh';
  }, []);

  return (
    <div>
    <main className="main-content">
      <div className="logo fade-in-up">
        <img src="/Assets/logo_afforgadget.png" alt="Affor Gadget" />
      </div>
      <div className="fade-in-up content">
        <h1>
          WE'RE READY TO <span className="highlight">AFFOR <br /></span> YOUR DREAM GADGET!
        </h1>
        <p>
          We’re here to make dreams come true your ideal gadget is now in your hands. Always ready with Affor when you need it, powerful technology right at your fingertips.
        </p>
      </div>
    </main>

      {/* Konten Baru */}
      <div ref={newContentRef} className={`new-content ${isVisible ? 'show' : ''}`}>
        <div className="grid-container grid-3">
          <div className="card">
            <img src="/Assets/Dropshipper.png" alt="Open Seller/Dropshipper" />
            <h3>RESELLER & DROPSHIPPER</h3>
            <Link to="/reseller" className="btn-contact">JOIN US</Link>
          </div>
          <div className="card">
            <img src="/Assets/warranty.png" alt="Warranty Service" />
            <h3>WARRANTY SERVICE</h3>
            <Link to="/service" className="btn-contact">SERVICE</Link>
          </div>
          <div className="card">
            <img src="/Assets/cekproduk.png" alt="Cek Produk" />
            <h3>EXPLORE OUR PRODUCTS!</h3>
            <Link to="/produk" className="btn-contact">PRODUCT</Link>
          </div>
        </div>
      </div>

      {/* Section Baru */}
      <section className="new-section">
        <div className='banner'>
          <img src="/Assets/banner_homepage.png" alt='banner_homepage' className='banner-homepage'/>
        </div>
      </section>
    </div>
  );
}

export default MainContent;
