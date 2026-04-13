(() => {
    const root = document.getElementById('other-projects-carousel');
    if (!root || !Array.isArray(OTHER_PROJECTS) || OTHER_PROJECTS.length === 0) return;

    // ── Build DOM ──────────────────────────────────────────────────────────────

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

    OTHER_PROJECTS.forEach((project, i) => {
        // Slide
        const slide = document.createElement('div');
        slide.className = 'project-slide' + (i === 0 ? ' active' : '');

        let media;
        if (project.video) {
            media = document.createElement('video');
            media.src = project.video;
            media.muted = true;
            media.loop = true;
            media.controls = true;
            media.playsInline = true;
        } else {
            media = document.createElement('img');
            media.src = project.image;
            media.alt = project.title;
        }

        const overlay = document.createElement('div');
        overlay.className = 'project-overlay';

        const title = document.createElement('h3');
        title.textContent = project.title;

        const desc = document.createElement('p');
        desc.textContent = project.description;

        overlay.appendChild(title);
        overlay.appendChild(desc);

        if (project.link) {
            const link = document.createElement('a');
            link.href = project.link;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.className = 'project-link';
            link.textContent = project.linkLabel || 'View Project';
            overlay.appendChild(link);
        }

        slide.appendChild(media);
        slide.appendChild(overlay);
        track.appendChild(slide);

        // Dot
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
    });

    root.appendChild(prevBtn);
    root.appendChild(track);
    root.appendChild(nextBtn);
    root.appendChild(dotsWrap);

    // ── State ──────────────────────────────────────────────────────────────────

    const slides = Array.from(track.querySelectorAll('.project-slide'));
    const dots   = Array.from(dotsWrap.querySelectorAll('.carousel-dot'));
    let current  = 0;
    let timer;

    function videoIn(slide) {
        const v = slide.querySelector('video');
        if (v) v.play();
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

    videoIn(slides[0]);
    resetTimer();
})();
