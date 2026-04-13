(() => {
    const grid = document.getElementById('games-grid');
    if (!grid || !Array.isArray(FAVORITE_GAMES) || FAVORITE_GAMES.length === 0) return;

    FAVORITE_GAMES.forEach(game => {
        const card = document.createElement(game.link ? 'a' : 'div');
        card.className = 'game-card';

        if (game.link) {
            card.href = game.link;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
        }

        const img = document.createElement('img');
        img.src = game.cover;
        img.alt = game.title;
        img.loading = 'lazy';

        const overlay = document.createElement('div');
        overlay.className = 'game-card-overlay';

        const year = document.createElement('span');
        year.className = 'game-year';
        year.textContent = game.year;

        const title = document.createElement('p');
        title.className = 'game-title';
        title.textContent = game.title;

        overlay.appendChild(year);
        overlay.appendChild(title);
        card.appendChild(img);
        card.appendChild(overlay);
        grid.appendChild(card);
    });
})();
