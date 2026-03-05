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
     * Dynamic Product Page Logic
     */
    if (window.location.pathname.includes('product.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const colorParam = urlParams.get('color');

        if (colorParam) {
            const productData = {
                'golden': { name: 'Golden', filter: '' },
                'silver': { name: 'Silver', filter: 'grayscale(100%) brightness(1.2)' },
                'black': { name: 'Black', filter: 'grayscale(100%) brightness(0.2)' },
                'light-golden': { name: 'Light Golden', filter: 'hue-rotate(15deg) brightness(1.1) saturate(0.8)' },
                'copper': { name: 'Copper', filter: 'hue-rotate(-25deg) saturate(1.5) brightness(0.9)' },
                'golden-glitter': { name: 'Golden Glitter', filter: 'contrast(1.5) brightness(1.2)' },
                'silver-glitter': { name: 'Silver Glitter', filter: 'grayscale(100%) contrast(1.5) brightness(1.5)' }
            };

            const data = productData[colorParam];
            if (data) {
                document.getElementById('productTitle').textContent = data.name + ' Sequins';
                const img = document.getElementById('productImage');
                if (data.filter) {
                    img.style.filter = data.filter;
                }

                // Update WhatsApp link
                const waBtn = document.getElementById('productWaBtn');
                if (waBtn) {
                    const message = `Salam! I am inquiring about the ${data.name} sequins. Please provide details for 3mm and 5mm sizes.`;
                    const encodedMessage = encodeURIComponent(message);
                    waBtn.href = `https://wa.me/923116644706?text=${encodedMessage}`;
                }
            } else {
                document.getElementById('productTitle').textContent = 'Product Not Found';
            }
        }
    }

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
