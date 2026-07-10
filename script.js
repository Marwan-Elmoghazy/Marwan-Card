document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach((card, index) => {
        // Base delay + incremental delay per card
        card.style.animationDelay = `${0.4 + (index * 0.1)}s`;
        card.classList.add('stagger-up');
    });

    function createStars(elementId, count, size) {
        const layer = document.getElementById(elementId);
        if (!layer) return;

        let boxShadow = '';
        for (let i = 0; i < count; i++) {
            const x = Math.floor(Math.random() * 2000); // spread across wide area
            const y = Math.floor(Math.random() * 2000);
            boxShadow += `${x}px ${y}px #FFF${i < count - 1 ? ', ' : ''}`;
        }
        
        const style = document.createElement('style');
        style.innerHTML = `
            #${elementId}::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: ${size}px;
                height: ${size}px;
                background: transparent;
                box-shadow: ${boxShadow};
                animation: animStar ${size * 60}s linear infinite;
                opacity: ${1 / size}; /* smaller stars are brighter, larger are dimmer */
            }
            @keyframes animStar {
                from { transform: translateY(0px); }
                to { transform: translateY(-2000px); }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize stars (count, size in px)
    createStars('stars', 100, 1); // Lots of tiny fast stars
    createStars('stars2', 50, 2); // Medium stars
    createStars('stars3', 20, 3); // Large slow stars
});
