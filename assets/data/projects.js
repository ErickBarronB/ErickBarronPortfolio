// ─── Other Projects ───────────────────────────────────────────────────────────
// Add or remove entries here to update the carousel.
// Fields:
//   title       – project name shown on the slide
//   description – short blurb shown on the slide
//   image       – path to a cover image (relative to index.html)
//   video       – path to a video file instead of an image (set image to null)
//                 note: use EITHER image OR video, not both
//   link        – URL for the button (set to null to hide the button)
//   linkLabel   – text for the link button (ignored if link is null)

const OTHER_PROJECTS = [
    {
        title: "Unfaced",
        description: "Unfaced is a narrative game my team and Imade for the 2026 Global Game Jam.",
        image: null,
        video: "assets/videos/Unfaced.mp4",
        link: "https://erickbb.itch.io/unfaced",
        linkLabel: "Get it on itch.io"
    },
    {
        title: "Space Project",
        description: "A small project where I create a Save system and a Dialogue system with subtitles and localization support.",
        image: "assets/img/ErickBarron.jpeg",
        video: "assets/videos/SpaceGame.mp4",
        link: null,
        linkLabel: ""
    },
    {
        title: "Striker Components",
        description: "Striker Components is a website I created for a hypothetical tech company.",
        image: "assets/img/Striker.png",
        video: null,
        link: "https://erickbarronb.github.io/Striker/",
        linkLabel: "View the website"
    },
    {
        title: "Arcadia Mall",
        description: "Arcadia Mall is a website I created for a hypothetical mall.",
        image: "assets/img/Arcadia.png",
        video: null,
        link: "https://erickbarronb.github.io/MallPaginaWeb/",
        linkLabel: "View the website"
    },
    {
        title: "Goblin Lair",
        description: "Goblin Lair is the first Unreal Engine project I worked on.",
        image: null,
        video: "assets/videos/GoblinLair.mp4",
        link: null,
        linkLabel: ""
    }
    // Video example:
    // {
    //     title: "My Game",
    //     description: "A fun game I made.",
    //     image: null,
    //     video: "assets/videos/my-game-trailer.mp4",
    //     link: "https://itch.io/...",
    //     linkLabel: "Play on itch.io"
    // },
];
