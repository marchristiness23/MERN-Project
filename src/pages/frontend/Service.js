import { useEffect } from "react";
import "./Service.css";

function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="service-hero">
        <img src="/Assets/background.png" alt="Background" className="service-bg" />
        <div className="service-hero-overlay">
          <h1>Layanan Service & Garansi Produk</h1>
          <img src="/Assets/logo_afforgadget.png" alt="Logo" className="service-logo" />
          <p>Kami berkomitmen memberikan dukungan purna jual terbaik untuk produk Anda.</p>
        </div>
      </section>
<section className="service-section">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title">
        Apa yang Kami <br /> Tawarkan
      </h2>
      <div className="cta-button-wrapper">
        <a
          href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20menanyakan%20layanan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cta-button alt">Hubungi Kami</button>
        </a>
      </div>
    </div>

    <div className="service-card-container">
      <div className="service-card card-glow">
        <h3>⚡ Perbaikan Ekspres</h3>
        <p>
          Teknisi kami siap memperbaiki kerusakan dengan cepat dan tepat,
          langsung di tempat atau pick-up service.
        </p>
      </div>
      <div className="service-card card-glow">
        <h3>♻️ Unit Pengganti</h3>
        <p>
          Tidak perlu menunggu lama! Dapatkan unit pengganti jika service
          memakan waktu lebih dari 3 hari.
        </p>
      </div>
      <div className="service-card card-glow">
        <h3>📜 Syarat & Ketentuan</h3>
        <ul className="garansi-list">
          <li>Garansi 1 tahun untuk kerusakan non-human error</li>
          <li>Kerusakan akibat air atau jatuh tidak termasuk</li>
          <li>Sertakan kartu garansi & bukti pembelian</li>
        </ul>
      </div>
    </div>
  </div>
</section>


    </>
  );
}

export default Service;
