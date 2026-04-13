(() => {
    const root = document.getElementById('other-projects-carousel');
    if (!root || !Array.isArray(OTHER_PROJECTS) || OTHER_PROJECTS.length === 0) return;

    // ── Build DOM ──────────────────────────────────────────────────────────────

    // Wrapper gives the prev/next buttons a clean containing block
    const mediaWrapper = document.createElement('div');
    mediaWrapper.className = 'carousel-media-wrapper';

    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-btn prev';
    prevBtn.setAttribute('aria-label', 'Previous');
    prevBtn.innerHTML = '&#8249;';

    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-btn next';
    nextBtn.setAttribute('aria-label', 'Next');
    nextBtn.innerHTML = '&#8250;';

    const track = document.createElement('div');
    track.className = 'projects-track';

    const dotsWrap = document.createElement('div');
    dotsWrap.className = 'carousel-dots';

    // Desktop info panel – sits below the media wrapper, updated on slide change
    const infoPanel = document.createElement('div');
    infoPanel.className = 'project-info';

    const infoTitle = document.createElement('h3');
    const infoDesc  = document.createElement('p');
    const infoLink  = document.createElement('a');
    infoLink.className = 'project-link';
    infoLink.target    = '_blank';
    infoLink.rel       = 'noopener noreferrer';

    infoPanel.appendChild(infoTitle);
    infoPanel.appendChild(infoDesc);
    infoPanel.appendChild(infoLink);

    OTHER_PROJECTS.forEach((project, i) => {
        // ── Slide (media only) ─────────────────────────────────────────────────
        const slide = document.createElement('div');
        slide.className = 'project-slide' + (i === 0 ? ' active' : '');

        let media;
        if (project.video) {
            media = document.createElement('video');
            media.src = project.video;
            media.muted = true;
            media.loop = true;
            media.playsInline = true;
        } else {
            media = document.createElement('img');
            media.src = project.image;
            media.alt = project.title;
        }

        slide.appendChild(media);

        // ── Mobile-only per-card info (hidden on desktop via CSS) ──────────────
        const slideInfo = document.createElement('div');
        slideInfo.className = 'slide-info';

        const slideTitle = document.createElement('h3');
        slideTitle.textContent = project.title;

        const slideDesc = document.createElement('p');
        slideDesc.textContent = project.description;

        slideInfo.appendChild(slideTitle);
        slideInfo.appendChild(slideDesc);

        if (project.link) {
            const slideLink = document.createElement('a');
            slideLink.href      = project.link;
            slideLink.target    = '_blank';
            slideLink.rel       = 'noopener noreferrer';
            slideLink.className = 'project-link';
            slideLink.textContent = project.linkLabel || 'View Project';
            slideInfo.appendChild(slideLink);
        }

        slide.appendChild(slideInfo);
        track.appendChild(slide);

        // ── Dot ────────────────────────────────────────────────────────────────
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
    });

    mediaWrapper.appendChild(prevBtn);
    mediaWrapper.appendChild(track);
    mediaWrapper.appendChild(nextBtn);

    root.appendChild(mediaWrapper);
    root.appendChild(infoPanel);
    root.appendChild(dotsWrap);

    // ── State ──────────────────────────────────────────────────────────────────

    const slides = Array.from(track.querySelectorAll('.project-slide'));
    const dots   = Array.from(dotsWrap.querySelectorAll('.carousel-dot'));
    let current  = 0;
    let timer;

    function updateInfo(index) {
        const project = OTHER_PROJECTS[index];
        infoTitle.textContent = project.title;
        infoDesc.textContent  = project.description;
        if (project.link) {
            infoLink.href        = project.link;
            infoLink.textContent = project.linkLabel || 'View Project';
            infoLink.style.display = '';
        } else {
            infoLink.style.display = 'none';
        }
    }

    function videoIn(slide) {
        const v = slide.querySelector('video');
        if (v) v.play().catch(() => {});
    }

    function videoOut(slide) {
        const v = slide.querySelector('video');
        if (v) { v.pause(); v.currentTime = 0; }
    }

    function goTo(index) {
        videoOut(slides[current]);
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
        videoIn(slides[current]);
        updateInfo(current);
        resetTimer();
    }

    function isVideoSlide(slide) {
        return !!slide.querySelector('video');
    }

    function resetTimer() {
        clearInterval(timer);
        if (!isVideoSlide(slides[current])) {
            timer = setInterval(() => goTo(current + 1), 5000);
        }
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    updateInfo(0);
    videoIn(slides[0]);
    resetTimer();
})();
