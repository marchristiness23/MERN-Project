import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [launchYear, setLaunchYear] = useState(0);
  const [products, setProducts] = useState(0);
  const [partners, setPartners] = useState(0);
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;

          const animateValue = (start, end, duration, setter) => {
            let startTimestamp = null;
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              setter(Math.floor(progress * (end - start) + start));
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };
            window.requestAnimationFrame(step);
          };

          animateValue(0, 2022, 1500, setLaunchYear);
          animateValue(0, 200, 1800, setProducts);
          animateValue(0, 99, 2000, setPartners);
        }
      },
      {
        threshold: 0.5
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="about-section">
        <div className="container">
          <h2 className="left-text">
            <span className="blue-text">So what</span><br />
            <span className="bold-white-text">our vision</span><br />
            <span className="blue-text">come to be??</span>
          </h2>
          <p className="right-text">
            We believe in the potential of entrepreneurs to lead with integrity, scale their businesses exponentially, and create jobs and prosperity for all.
          </p>
        </div>

    <div className="about-hero-section">
      <img
        src="/Assets/banner-about.png"
        alt="Banner"
        className="hero-image"
      />
      <div className="hero-overlay-text">
        <p>
          It’s all about<br />
          <span className="highlight">the <span className="blue-text">people</span> and</span><br />
          future
        </p>
      </div>
    </div>

      </section>

      <section className="enterprise-section">
        <div className="enterprise-container">
          <div className="text-content">
            <h2>
              Fighting Poverty<br />
              through Enterprise
            </h2>
            <p>
              Building ecosystems that encourage economic growth in vulnerable communities, by empowering citizens through entrepreneurship training, access to capital, and support in developing their own businesses, so that they can overcome poverty in a sustainable and independent way.
            </p>
          </div>
          <div className="image-content">
            <div className="image-box">
              <img src="/Assets/about1.png" alt="Team" />
            </div>
            <div className="image-box">
              <img src="/Assets/about2.png" alt="Gadget" />
            </div>
          </div>
        </div>
      </section>

      <section className="enterprise-section impact-section">
        <div className="enterprise-container">
          <div className="tall-image-box">
            <img src="/Assets/about3.png" alt="Notebook" />
          </div>

          <div className="right-content">
            <h2>
              Impact and Sustainability<br />Consortium
            </h2>

            <div className="image-and-text">
              <div className="image-box">
                <img src="/Assets/about4.png" alt="Produk" />
              </div>

              <div className="text-content">
                <p>
                  Cross-sector collaboration aimed at strengthening positive impact and sustainability
                  through initiatives focused on sustainable solutions, ensuring that current business
                  and development practices provide long-term benefits for society, the environment and
                  the economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="opening-hours-section">
        <div className="opening-hours-container">
          <div className="image-side">
            <img src="/Assets/about5.png" alt="Building" />
          </div>
          <div className="text-side">
            <p><strong>MON–THU</strong><br />10:00 – 19:00</p>
            <p><strong>SAT–SUN</strong><br />12:00 – 17:00</p>
          </div>
        </div>

        <section className="count-section" ref={sectionRef}>
      <h2 className="count-title">Affor Gadget by the Numbers</h2>
      <div className="count-grid">
        <div className="count-card">
          <h3>{launchYear}</h3>
          <p>Launched</p>
        </div>
        <div className="count-card">
          <h3>{products}+</h3>
          <p>Product Selling</p>
        </div>
        <div className="count-card">
          <h3>{partners}+</h3>
          <p>Trusted by Partner</p>
        </div>
      </div>
    </section>
      </section>
    </>
  );
}

export default About;
