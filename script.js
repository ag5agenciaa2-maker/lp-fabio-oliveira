document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    mobileToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        if (navLinks.style.display === 'flex') {
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.flexDirection = 'column';
            navLinks.style.backgroundColor = 'rgba(31, 31, 31, 0.98)';
            navLinks.style.padding = '40px';
            navLinks.style.gap = '20px';
        }
    });

    // Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => otherItem.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Testimonials Stack Parallax
    const testimonialStack = document.getElementById('testimonials-stack');
    const cards = document.querySelectorAll('.testimonial-card');

    // Initial positioning
    cards.forEach((card, index) => {
        card.style.zIndex = cards.length - index;
        card.style.transform = `translateY(${index * 20}px) scale(${1 - index * 0.05})`;
        card.style.opacity = 1 - index * 0.2;
    });

    window.addEventListener('scroll', () => {
        const rect = testimonialStack.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

        if (scrollPercent > 0 && scrollPercent < 1) {
            cards.forEach((card, index) => {
                const offset = Math.max(0, scrollPercent - 0.2) * 500 * (index + 1);
                const scale = 1 - index * 0.05 + (scrollPercent * 0.05);
                const rotate = index * 2 - (scrollPercent * 5);

                card.style.transform = `translateY(${index * 20 - offset}px) scale(${scale}) rotate(${rotate}deg)`;
                card.style.opacity = 1 - (index * 0.2) + (scrollPercent * 0.2);
            });
        }
    });

    // Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Enviando...';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert('Solicitação enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // Hero Mosaic Parallax
    const heroMosaic = document.querySelector('.hero-mosaic');
    if (heroMosaic) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            heroMosaic.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
});
