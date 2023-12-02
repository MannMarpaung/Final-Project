document.addEventListener("DOMContentLoaded", function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    for (const link of smoothScrollLinks) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Sembunyikan .title-home saat smooth scroll dimulai
            const titleHome = document.querySelector('.title-home');
            titleHome.style.display = 'none';

            // Tampilkan kembali .title-home setelah smooth scroll selesai
            setTimeout(function () {
                titleHome.style.display = 'block';
            }, 800); // Sesuaikan dengan durasi smooth scroll Anda
        }
    }

    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        const titleHome = document.querySelector('.title-home');

        navLinks.classList.toggle('show');

        // Sembunyikan .title-home saat toggle aktif
        if (navLinks.classList.contains('show')) {
            titleHome.style.display = 'none';
        } else {
            titleHome.style.display = 'block';
        }
    }

    // Tambahkan event listener pada .menu-toggle
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', toggleMenu);
});