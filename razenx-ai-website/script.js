// script.js - Interaktivitas Landing Page RazenX AI

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Notifikasi Interaktif saat Tombol Paket Layanan Ditekan
    const pricingButtons = document.querySelectorAll('#harga button');
    
    pricingButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Mengambil nama paket (Free / Pro / VIP) dari elemen h3 terdekat
            const planCard = this.closest('div');
            const planName = planCard.querySelector('h3').innerText;
            
            alert(`Terima kasih telah memilih paket RazenX AI: ${planName}!\nFitur pendaftaran dan integrasi payment gateway sedang dalam mode simulasi pengembangan.`);
        });
    });

    // 2. Mengubah Transparansi Navbar Saat Pengguna Menurunkan Halaman (Scroll)
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Membuat navbar lebih gelap dan solid saat di-scroll ke bawah
            navbar.classList.add('bg-darkBg/95', 'shadow-xl', 'border-slate-700/50');
            navbar.classList.remove('bg-darkBg/80');
        } else {
            // Mengembalikan ke transparan saat berada di paling atas
            navbar.classList.add('bg-darkBg/80');
            navbar.classList.remove('bg-darkBg/95', 'shadow-xl', 'border-slate-700/50');
        }
    });

});
