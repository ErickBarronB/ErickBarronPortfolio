(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="footer-inner">

            <div class="footer-brand">
                <span class="footer-name">Erick Raul Barron Bucolo</span>
                <span class="footer-tagline">Game Developer &amp; Programmer</span>
            </div>

            <div class="footer-links">
                <a href="mailto:erickbarron41@gmail.com" class="footer-link">
                    <span class="footer-link-icon">&#9993;</span>
                    erickbarron41@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/erick-barron-bucolo/" target="_blank" rel="noopener noreferrer" class="footer-link">
                    <span class="footer-link-icon">in</span>
                    LinkedIn
                </a>
                <a href="https://github.com/erickbarronb" target="_blank" rel="noopener noreferrer" class="footer-link">
                    <span class="footer-link-icon">&#9728;</span>
                    GitHub
                </a>
                <a href="https://erickbb.itch.io" target="_blank" rel="noopener noreferrer" class="footer-link">
                    <span class="footer-link-icon">&#127918;</span>
                    itch.io
                </a>
            </div>

            <div class="footer-copy">
                &copy; ${new Date().getFullYear()} Erick Barron. All rights reserved.
            </div>

        </div>
    `;
})();
