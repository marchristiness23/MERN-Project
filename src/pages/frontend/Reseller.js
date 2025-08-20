import React, { useEffect } from 'react';
import './Reseller.css';

function Reseller() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pesan = encodeURIComponent("Halo saya ingin daftar");
  const nomor = "6282317964911"; 
  const waLink = `https://wa.me/${nomor}?text=${pesan}`;

  return (
    <div className="reseller-container">
      {/* Hero */}
      <div className="reseller-hero">
        <img
          src="/Assets/background.png"
          alt="Reseller Background"
          className="reseller-image"
        />
        <div className="reseller-overlay animate-fade">
          <h1>Gabung Jadi Reseller Affor Gadget Sekarang!</h1>
          <img
            src="/Assets/logo_afforgadget.png"
            alt="Affor Gadget Logo"
            className="reseller-logo"
          />
          <p className="reseller-subtext">
            Mulai bisnismu sendiri dengan produk berkualitas dan margin keuntungan menarik.
          </p>
        </div>
      </div>

      {/* Benefit Section */}
      <div className="reseller-next-section">
        <h2 className="section-title glow-text">Mengapa Jadi Reseller Kami?</h2>

        <div className="benefit-wrapper">
          <div className="benefit-card bounce">
            <img src="/Assets/produk-ori.png" alt="Produk Original" />
            <p>Produk Original & Berkualitas</p>
          </div>
          <div className="benefit-card bounce delay">
            <img src="/Assets/keuntungan.png" alt="Keuntungan" />
            <p>Keuntungan Hingga 30%</p>
          </div>
          <div className="benefit-card bounce delay2">
            <img src="/Assets/support.png" alt="Support" />
            <p>Support Marketing & Konsultasi</p>
          </div>
        </div>

        <a href={"https://wa.me/6282317964911"} target="_blank" rel="noopener noreferrer" className="btn-join pulse">
        Daftar Sekarang
      </a>

      </div>

      {/* Terms */}
      <div className="terms-enhanced">
        <img src="/Assets/banner-contact.png" alt="Background" className="terms-bg-image" />
        <div className="terms-box animate-rise">
          <h3>Syarat dan Ketentuan</h3>
          <ul>
            <li>Minimal pembelian awal Rp 2.000.000</li>
            <li>Tidak diwajibkan stok barang (bisa dropship)</li>
            <li>Aktif promosi minimal 1x seminggu</li>
            <li>Mengikuti harga dasar yang ditentukan</li>
          </ul>
          <p>Bergabung dengan kami untuk lebih lanjut!</p>
        </div>
      </div>
    </div>
  );
}

export default Reseller;
