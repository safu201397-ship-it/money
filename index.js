document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.desktop-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80, // Offset for sticky header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
