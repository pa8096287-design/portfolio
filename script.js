document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                // Optional: Element ko wapas chhipane ke liye, agar user scroll up karta hai
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Jab element ka 10% visible ho, tab animation shuru ho
    });

    document.querySelectorAll('.animated-section').forEach((section) => {
        observer.observe(section);
    });

    // Light/Dark Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Button ke text ko badalna
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggleBtn.setAttribute('aria-label', isDarkMode ? 'Light mode' : 'Dark mode');
    });

    // Optional: Contact Link Pop-up (Agar tum form validation nahi karna chahte ho)
    const contactLinks = document.querySelectorAll('#contact a');

    contactLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (href.startsWith('mailto:')) {
                alert('Thank you for your interest! I will get back to you soon.');
            }
        });
    });
});