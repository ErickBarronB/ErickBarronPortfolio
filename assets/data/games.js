// ─── Favorite Games ───────────────────────────────────────────────────────────
// Add or remove entries here to update the grid.
// Fields:
//   title  – game title displayed on the card
//   year   – release year displayed as a badge
//   cover  – path to cover image (relative to about.html)
//   link   – optional URL (e.g. Steam page); set to null to disable

const FAVORITE_GAMES = [
    {
        title: "Half-Life 2",
        year: "2004",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Half-Life_2_cover.jpg/250px-Half-Life_2_cover.jpg",
        link: "https://store.steampowered.com/app/220/HalfLife_2/"
    },
    {
        title: "Portal 2",
        year: "2011",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Portal2cover.jpg/250px-Portal2cover.jpg",
        link: "https://store.steampowered.com/app/620/Portal_2/"
    },
    {
        title: "Half-Life",
        year: "1998",
        cover: "https://i.redd.it/ebh2zvur73l41.jpg",
        link: "https://store.steampowered.com/app/220/HalfLife/"
    },
    {
        title: "Terraria",
        year: "2011",
        cover: "https://upload.wikimedia.org/wikipedia/en/1/1a/Terraria_Steam_artwork.jpg",
        link: "https://store.steampowered.com/app/1281930/Terraria/"
    },
    {
        title: "Pokemon Fire Red",
        year: "2004",
        cover: "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_games/pokemonfireredleafgreen/1x1_NSwitch_PokemonFireRed_UK_image380w.jpg",
        link: "https://www.nintendo.com/us/store/products/english-pokemon-firered-version-switch/?srsltid=AfmBOooYROFN_63IRSe3A07PWGYM4djSSo3tCNapdTypZL2ND1AiH_HB"
    },
    {
        title: "Kingdom Come: Deliverance",
        year: "2018",
        cover: "https://upload.wikimedia.org/wikipedia/en/f/fd/Kingdom_Come_Deliverance.jpg",
        link: "https://store.steampowered.com/app/379430/Kingdom_Come_Deliverance/"
    },
    {
        title: "Starcraft: Brood War",
        year: "1998",
        cover: "https://upload.wikimedia.org/wikipedia/en/8/89/Brood_War_box_art_%28StarCraft%29.jpg",
        link: "https://starcraft.blizzard.com/en-us/"
    },
    {
        title: "Minecraft",
        year: "2011",
        cover: "https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg",
        link: "https://www.minecraft.net/en-us"
    },
    {
        title: "Garry's Mod",
        year: "2006",
        cover: "https://e.snmc.io/lk/f/x/9ea3ebfda4a41d1446314f65d984f5af/8964943",
        link: "https://store.steampowered.com/app/4000/Garrys_Mod/"
    },
    {
        title: "The Binding of Isaac",
        year: "2011",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/The_Binding_of_Issac_Rebirth_cover.jpg/250px-The_Binding_of_Issac_Rebirth_cover.jpg",
        link: "https://store.steampowered.com/app/250900/The_Binding_of_Isaac/"
    },
    {
        title: "Left 4 Dead 2",
        year: "2009",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Left4Dead2.jpg/250px-Left4Dead2.jpg",
        link: "https://store.steampowered.com/app/550/Left_4_Dead_2/"
    },
    {
        title: "Risk of Rain 2",
        year: "2019",
        cover: "https://f4.bcbits.com/img/a1339632586_16.jpg",
        link: "https://store.steampowered.com/app/632360/Risk_of_Rain_2/"
    },
    {
        title: "The Elder Scrolls V: Skyrim",
        year: "2011",
        cover: "https://m.media-amazon.com/images/I/51v1IWrWhPL._AC_UF894,1000_QL80_.jpg",
        link: "https://store.steampowered.com/app/72850/The_Elder_Scrolls_V_Skyrim/"
    },
    {
        title: "Half-Life: Alyx",
        year: "2020",
        cover: "https://static.wikia.nocookie.net/half-life/images/3/30/Half_Life_Alyx_Box_Art.png/revision/latest?cb=20191209213640&path-prefix=en",
        link: "https://store.steampowered.com/app/546560/HalfLife_Alyx/"
    },
    {
        title: "BioShock",
        year: "2007",
        cover: "https://upload.wikimedia.org/wikipedia/en/6/6d/BioShock_cover.jpg",
        link: "https://store.steampowered.com/app/7670/BioShock/"
    },
    {
        title: "Arma 3",
        year: "2013",
        cover: "https://http2.mlstatic.com/D_NQ_NP_741082-MLA88985489321_072025-O.webp",
        link: "https://store.steampowered.com/app/107410/Arma_3/"
    },
    {
        title: "FTL: Faster Than Light",
        year: "2012",
        cover: "https://gaming-cdn.com/images/products/3476/616x353/ftl-faster-than-light-pc-mac-game-steam-cover.jpg?v=1743603325",
        link: "https://store.steampowered.com/app/212680/FTL_Faster_Than_Light/"
    },
    {
        title: "Deltarune",
        year: "2025",
        cover: "https://image.api.playstation.com/vulcan/ap/rnd/202504/1011/35bfbfc8cd3fbff2cbdedf2da91412e44161f195824502f8.png",
        link: "https://store.steampowered.com/app/1671210/DELTARUNE/"
    },
    {
        title: "Spore",
        year: "2008",
        cover: "https://assets-prd.ignimgs.com/2022/01/21/spore-button-crop-1642801492255.jpg",
        link: "https://store.steampowered.com/app/17390/SPORE/"
    },
    {
        title: "Baldur's Gate 3",
        year: "2023",
        cover: "https://preview.redd.it/which-cover-is-better-v0-kukkaczhsccb1.jpg?width=600&format=pjpg&auto=webp&s=8408aced932510b238c4d6d006eb09503b56e86d",
        link: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/"
    }
]
