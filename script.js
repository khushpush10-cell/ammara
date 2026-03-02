document.addEventListener('DOMContentLoaded', () => {

    const phoneNumber = "923000000000"; // Placeholder WhatsApp number (Pakistan code)

    /**
     * Handles "Buy on WhatsApp" button clicks on products
     */
    const buyButtons = document.querySelectorAll('.wa-buy-btn');

    buyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            const productCard = e.target.closest('.card');
            if (!productCard) return;

            const productName = productCard.getAttribute('data-name') || 'Product';
            const productCode = productCard.getAttribute('data-code') || 'N/A';

            const message = `Assalamualaikum, I am interested in this product: *${productName}* (${productCode}).\n\nPlease tell me:\n• Price\n• Wholesale price\n• MOQ (minimum order quantity)\n• Available colors\n• Delivery details`;

            openWhatsApp(message);
        });
    });

    /**
     * Handles quick inquiry chips (e.g., "Wholesale rate?")
     */
    const quickChips = document.querySelectorAll('.wa-chip');

    quickChips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            e.preventDefault();
            const query = e.target.getAttribute('data-query');
            if (!query) return;

            const message = `Assalamualaikum, I have a quick inquiry:\n*${query}*`;
            openWhatsApp(message);
        });
    });

    /**
     * Helper to open WhatsApp link
     */
    function openWhatsApp(message) {
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(url, '_blank');
    }

    // Mobile menu toggle (simple version)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
                navLinks.style.padding = '1rem';
                navLinks.style.borderBottom = '1px solid #333';
            }
        });
    }

    /**
     * Set slow playback rate for hero video
     */
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.playbackRate = 0.5;
    }

    /**
     * Scroll Animations using Intersection Observer
     */
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    if (scrollElements.length > 0) {
        const elementInView = (el, scrollOffset = 100) => {
            const elementTop = el.getBoundingClientRect().top;
            return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) - scrollOffset);
        };

        const displayScrollElement = (element) => {
            element.classList.add('is-visible');
        };

        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 50)) {
                    displayScrollElement(el);
                }
            })
        }

        // Initial check on load
        handleScrollAnimation();

        window.addEventListener('scroll', () => {
            handleScrollAnimation();
        });
    }
});
