import React from 'react';
import './Gallery.css';

function Gallery() {
    const images = [
    "/Assets/gallery2.png",
    "/Assets/gallery3.jpg",
    "/Assets/gallery4.jpg",
    "/Assets/gallery5.jpg",
    "/Assets/gallery6.jpg",
    "/Assets/gallery7.jpg",
    "/Assets/gallery8.jpg",
    "/Assets/gallery9.jpg",
    "/Assets/gallery10.jpg"
  ];
  return (
    <div className="impact-hero">
      <img src="/Assets/banner-contact.png" alt="Impact Background" className="background-image" />
      <div className="hero-text">
        <h1>
          <span className="fade-line fade-delay-1">Are You New</span><br />
          <span className="fade-line fade-delay-2">to the Impact</span><br />
          <span className="fade-line fade-delay-3">Space?</span>
        </h1>

        <p>
          Are the terms <span className="highlight">'social entrepreneurship'</span> or 
          <span className="highlight"> 'social impact'</span> still a little new? <br />
          We can guide you through your impact journey.
        </p>
      </div>

    <div className="gallery-container">
      <h1 className="gallery-heading">Gallery</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`Gallery ${index}`} className="gallery-image" />
          </div>
        ))}
      </div>
      <a href="https://www.instagram.com" className="view-more-btn" target="_blank" rel="noopener noreferrer">
        View More
      </a>
    </div>


        <div className="social-media-container">
      <div className="text-container">
        <p className="intro-text">
          We believe in the collaborative power of the collective, where all faiths, all sectors, across national borders, align and work together to amplify restoration and empowerment efforts.
        </p>
      </div>

      <div className="profiles-container">
        <div className="profile-box instagram">
          <img 
            src="/Assets/instagram2.png" 
            alt="Instagram" 
            className="social-icon"
          />
          <div className="profile-info1">
            <h3>Affor Gadget</h3>
            <p>150 posts</p>
            <p>1,234 followers</p>
            <p>20 Following</p>
          </div>
        </div>

        <div className="profile-box tiktok">
          <img 
            src="/Assets/tiktok2.png" 
            alt="TikTok" 
            className="social-icon"
          />
          <div className="profile-info">
            <h3>Affor Gadget</h3>
            <p>150 posts</p>
            <p>1,234 followers</p>
            <p>20 Following</p>
          </div>
        </div>
      </div>
      <div>
        <h1  className='text-down'>Come on, create stories and have <br /> an impact with Affor Gadget</h1>
      </div>
    </div>
    </div>
    
  );
}

export default Gallery;
