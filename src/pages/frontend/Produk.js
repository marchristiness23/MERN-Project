import React, { useState } from "react";
import "./Produk.css";

const produkList = [
  {
    kategori: "Smartphone",
    nama: "iPhone 12 64GB BLUE",
    harga: "Rp 6.500.000",
    diskon: "Rp 5.200.000",
    linkWA: "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20iPhone%2013%20Pro%20Max",
    images: ["/Assets/Produk/IP12-1-64GB.jpg", "/Assets/Produk/IP12-2-64GB.jpg", "/Assets/Produk/IP12-3-64GB.jpg","/Assets/Produk/IP12-4-64GB.jpg","/Assets/Produk/IP12-5-64GB.jpg","/Assets/Produk/IP12-6-64GB.jpg","/Assets/Produk/IP12-7-64GB.jpg","/Assets/Produk/IP12-8-64GB.jpg","/Assets/Produk/IP12-9-64GB.jpg","/Assets/Produk/IP12-10-64GB.jpg"]
  },
  {
    kategori: "Smartphone",
    nama: "Iphone 12 64GB PURPLE",
    harga: "Rp 6.500.000",
    diskon: "Rp 5.200.000",
    linkWA: "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Samsung%20Galaxy%20S22",
    images: ["/Assets/Produk/IP12_64_Purple_00001.jpg", "/Assets/Produk/IP12_64_Purple_00002.jpg", "/Assets/Produk/IP12_64_Purple_00003.jpg","/Assets/Produk/IP12_64_Purple_00004.jpg","/Assets/Produk/IP12_64_Purple_00005.jpg","/Assets/Produk/IP12_64_Purple_00006.jpg","/Assets/Produk/IP12_64_Purple_00007.jpg","/Assets/Produk/IP12_64_Purple_0008.jpg","/Assets/Produk/IP12_64_Purple_0009.jpg","/Assets/Produk/IP12_64_Purple_00010.jpg","/Assets/Produk/IP12_64_Purple_00011.jpg"]
  },
  {
    kategori: "Smartphone",
    nama: "SAMSUNG S22 ULTRA 128GB WHITE",
    harga: "Rp 11.900.000",
    diskon: "Rp 11.750.000",
    linkWA: "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Xiaomi%2013T",
    images: ["/Assets/Produk/S22_Ultra_128_White_00001.jpg", "/Assets/Produk/S22_Ultra_128_White_00002.jpg", "/Assets/Produk/S22_Ultra_128_White_00003.jpg","/Assets/Produk/S22_Ultra_128_White_00004.jpg","/Assets/Produk/S22_Ultra_128_White_00005.jpg","/Assets/Produk/S22_Ultra_128_White_00006.jpg","/Assets/Produk/S22_Ultra_128_White_00007.jpg","/Assets/Produk/S22_Ultra_128_White_00008.jpg","/Assets/Produk/S22_Ultra_128_White_00009.jpg"]
  },
  {
    kategori: "Smartphone",
    nama: "IPHONE 11 128GB BLACK",
    harga: "Rp 5.900.000",
    diskon: "Rp 4.300.000",
    linkWA: "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Xiaomi%2013T",
    images: ["/Assets/Produk/IP11_128_BK_00001.jpg", "/Assets/Produk/IP11_128_BK_00002.jpg", "/Assets/Produk/IP11_128_BK_00003.jpg","/Assets/Produk/IP11_128_BK_00004.jpg","/Assets/Produk/IP11_128_BK_00005.jpg","/Assets/Produk/IP11_128_BK_00006.jpg","/Assets/Produk/IP11_128_BK_00007.jpg","/Assets/Produk/IP11_128_BK_00008.jpg","/Assets/Produk/IP11_128_BK_00009.jpg","/Assets/Produk/IP11_128_BK_000010.jpg","/Assets/Produk/IP11_128_BK_000011.jpg","/Assets/Produk/IP11_128_BK_000012.jpg"]
  },
  {
    kategori: "Smartphone",
    nama: "IPHONE 11 256GB BC GREEN",
    harga: "Rp 5.200.000",
    diskon: "Rp 4.900.000",
    linkWA: "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20iPad%20Pro%20M2",
    images: ["/Assets/Produk/IP11_256_Green_00001.jpg", "/Assets/Produk/IP11_256_Green_00002.jpg", "/Assets/Produk/IP11_256_Green_00003.jpg","/Assets/Produk/IP11_256_Green_00004.jpg","/Assets/Produk/IP11_256_Green_00005.jpg","/Assets/Produk/IP11_256_Green_00006.jpg","/Assets/Produk/IP11_256_Green_00007.jpg","/Assets/Produk/IP11_256_Green_00008.jpg","/Assets/Produk/IP11_256_Green_00009.jpg","/Assets/Produk/IP11_256_Green_000010.jpg","/Assets/Produk/IP11_256_Green_000011.jpg","/Assets/Produk/IP11_256_Green_000012.jpg"]
  },
  {
    kategori: "Smartphone",
    nama: "IPHONE XR 128GB BLACK",
    harga: "Rp 4.000.000",
    diskon: "Rp 3.800.000",
    linkWA: "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20iPad%20Pro%20M2",
    images: ["/Assets/Produk/IPXR_BK_00001.jpg", "/Assets/Produk/IPXR_BK_00002.jpg", "/Assets/Produk/IPXR_BK_00003.jpg","/Assets/Produk/IPXR_BK_00004.jpg","/Assets/Produk/IPXR_BK_00005.jpg","/Assets/Produk/IPXR_BK_00006.jpg","/Assets/Produk/IPXR_BK_00007.jpg","/Assets/Produk/IPXR_BK_00008.jpg","/Assets/Produk/IPXR_BK_00009.jpg","/Assets/Produk/IPXR_BK_000010.jpg"]
  },
  {
    kategori: "Smartphone",
    nama: "IPHONE XR 128GB WHITE",
    harga: "Rp 4.000.000",
    diskon: "Rp 3.800.000",
    linkWA: "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Galaxy%20Tab%20S8",
    images: ["/Assets/Produk/IPXR_White_0001.jpg", "/Assets/Produk/IPXR_White_0002.jpg", "/Assets/Produk/IPXR_White_0003.jpg","/Assets/Produk/IPXR_White_0004.jpg","/Assets/Produk/IPXR_White_0005.jpg","/Assets/Produk/IPXR_White_0006.jpg","/Assets/Produk/IPXR_White_0007.jpg","/Assets/Produk/IPXR_White_0008.jpg","/Assets/Produk/IPXR_White_0009.jpg","/Assets/Produk/IPXR_White_00010.jpg","/Assets/Produk/IPXR_White_00011.jpg"]
  },
  {
    kategori: "Aksesoris",
    nama: "Apple Watch Series 7 41mm Midnight",
    harga: "Rp 7.000.000",
    diskon: "Rp 6.850.000",
    linkWA: "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Apple%20Watch%20Series%209",
    images: ["/Assets/Produk/Apple Watch Series 7-1.jpg", "/Assets/Produk/Apple Watch Series 7-2.jpg", "/Assets/Produk/Apple Watch Series 7-3.jpg","/Assets/Produk/Apple Watch Series 7-4.jpg","/Assets/Produk/Apple Watch Series 7-5.jpg","/Assets/Produk/Apple Watch Series 7-6.jpg","/Assets/Produk/Apple Watch Series 7-7.jpg","/Assets/Produk/Apple Watch Series 7-8.jpg","/Assets/Produk/Apple Watch Series 7-9.jpg","/Assets/Produk/Apple Watch Series 7-10.jpg"]
  },
    {
    kategori: "Aksesoris",
    nama: "Apple Watch Series SE Gen 2 44mm Midnight",
    harga: "Rp 5.700.000",
    diskon: "Rp 5.250.000",
    linkWA: "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Apple%20Watch%20Series%209",
    images: ["/Assets/Produk/Apple Watch Series SE-1.jpg", "/Assets/Produk/Apple Watch Series SE-2.jpg", "/Assets/Produk/Apple Watch Series SE-3.jpg","/Assets/Produk/Apple Watch Series SE-4.jpg","/Assets/Produk/Apple Watch Series SE-5.jpg","/Assets/Produk/Apple Watch Series SE-6.jpg","/Assets/Produk/Apple Watch Series SE-7.jpg","/Assets/Produk/Apple Watch Series SE-8.jpg","/Assets/Produk/Apple Watch Series SE-9.jpg"]
  },
    {
    kategori: "Tablet",
    nama: "Macbook Air 2015 11inch 4 128GB",
    harga: "Rp 8.000.000",
    diskon: "Rp 7.250.000",
    linkWA: "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Apple%20Watch%20Series%209",
    images: ["/Assets/Produk/Macbook-Air-15-1.jpg", "/Assets/Produk/Macbook-Air-15-2.jpg", "/Assets/Produk/Macbook-Air-15-3.jpg","/Assets/Produk/Macbook-Air-15-4.jpg","/Assets/Produk/Macbook-Air-15-5.jpg","/Assets/Produk/Macbook-Air-15-6.jpg","/Assets/Produk/Macbook-Air-15-7.jpg","/Assets/Produk/Macbook-Air-15-8.jpg","/Assets/Produk/Macbook-Air-15-9.jpg","/Assets/Produk/Macbook-Air-15-10.jpg","/Assets/Produk/Macbook-Air-15-11.jpg"]
  }
];

// Group berdasarkan kategori
const produkData = Object.values(
  produkList.reduce((acc, item) => {
    if (!acc[item.kategori]) acc[item.kategori] = { kategori: item.kategori, items: [] };
    acc[item.kategori].items.push(item);
    return acc;
  }, {})
);

export default function Produk() {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const handleNext = (nama, images) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [nama]: (prev[nama] + 1) % images.length
    }));
  };

  const handlePrev = (nama, images) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [nama]: (prev[nama] - 1 + images.length) % images.length
    }));
  };

  return (
    <section className="produk-section">
      {/* Banner */}
      <div className="produk-banner">
        <img src="/Assets/background.png" alt="Banner Produk" className="produk-banner-image" />
        <div className="produk-banner-overlay">
          <img src="/Assets/logo_afforgadget.png" alt="Logo Affor Gadget" className="produk-logo" />
          <h1 className="produk-banner-title">Temukan Produk Terbaik dari Affor Gadget</h1>
        </div>
      </div>

      <h2 className="produk-title">Produk Unggulan Kami</h2>

      {produkData.map((kategori, idx) => (
        <div key={idx}>
          <h2 className="kategori-title">{kategori.kategori}</h2>
          <div className="produk-container">
            {kategori.items.map((produk, index) => {
              const currentIndex = currentImageIndex[produk.nama] || 0;
              const currentImg = produk.images[currentIndex];

              return (
                <div
                  className="produk-card card-glow"
                  key={index}
                  onMouseEnter={() =>
                    setCurrentImageIndex(prev => ({ ...prev, [produk.nama]: 0 }))
                  }
                >
                  <div className="produk-image-wrapper">
                    <img src={currentImg} alt={produk.nama} className="produk-image" />
                    <button className="slide-button left" onClick={() => handlePrev(produk.nama, produk.images)}>&lt;</button>
                    <button className="slide-button right" onClick={() => handleNext(produk.nama, produk.images)}>&gt;</button>
                  </div>
                  <h3 className="produk-nama">{produk.nama}</h3>
                  <div className="produk-harga">
                    <span className="harga-asli">{produk.harga}</span>
                    <span className="harga-diskon">{produk.diskon}</span>
                  </div>
                  <a href={produk.linkWA} target="_blank" rel="noopener noreferrer" className="produk-button">
                    Cek Selengkapnya
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
