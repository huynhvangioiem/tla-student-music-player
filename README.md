# TLA Music Player

A fun and nostalgic web-based music player built during my university days! This project showcases a simple yet functional music player featuring Vietnamese songs by Phan Mạnh Quỳnh.

## Live Demo

Check out the live version: [https://huynhvangioiem.github.io/tla-student-music-player/](https://huynhvangioiem.github.io/tla-student-music-player/)

## Features

-   **Playback Controls**: Play, pause, next, previous track functionality
-   **Shuffle & Repeat**: Random playback and repeat modes
-   **Progress Bar**: Visual track progress with seek functionality
-   **Rotating CD Animation**: Classic CD player animation effect
-   **Playlist Display**: Visual song list with album artwork
-   **Lyrics Display**: View lyrics for songs (when available)
-   **Responsive Design**: Mobile-friendly interface with adaptive controls
-   **Custom UI Library**: Built with custom TLA Library CSS framework

## Technologies Used

-   **HTML5**: Structure and semantic markup
-   **CSS3**: Custom styling with animations
-   **JavaScript (ES6)**: Core functionality and DOM manipulation
-   **jQuery**: DOM traversal and event handling
-   **Font Awesome**: Icons for UI controls
-   **TLA Library**: Custom CSS framework (v1)

## Project Structure

```
tla-student-music-player/
├── index.html          # Main HTML file
├── app.js              # JavaScript application logic
├── style.css           # Compiled CSS styles
├── SCSS/               # SCSS source files
├── img/                # Album artwork and images
├── music/              # MP3 audio files
└── README.md           # Project documentation
```

## Song Collection

The player includes 7 songs by Phan Mạnh Quỳnh:

1. Hãy Cho Chúng Tôi Thấy
2. Huyền Thoại
3. Có Chàng Trai Viết Lên Cây
4. Có Một Nơi Như Thế
5. Gặp Gỡ, Yêu Đương Và Được Bên Em
6. Nhạt
7. Nước Ngoài

## Key Features Breakdown

### Audio Controls

-   **Play/Pause**: Toggle playback with visual feedback
-   **Next/Previous**: Navigate through the playlist
-   **Random**: Shuffle tracks randomly
-   **Repeat**: Loop the current track

### Visual Elements

-   **CD Animation**: 360-degree continuous rotation while playing
-   **Album Art**: Circular album covers for each song
-   **Active Song Highlighting**: Visual indicator for currently playing track
-   **Marquee Welcome Message**: Classic scrolling text header

### Mobile Experience

On screens under 1024px, the interface adapts to show:

-   Bottom navigation controls
-   Single-panel view (playlist, player, or lyrics)
-   Swipeable sections via navigation buttons

## How It Works

The application uses an object-oriented approach with a central `app` object that manages:

-   Current song index and playback state
-   Song data (name, artist, path, image, lyrics)
-   Event handling for all user interactions
-   Rendering of the playlist and UI updates

### Core Methods

-   `loadCurrentSong()`: Loads song metadata into the player
-   `playRandom()`: Randomly selects a non-current song
-   `nextSong()`/`prevSong()`: Navigate through the playlist
-   `handleEvent()`: Manages all DOM event listeners
-   `render()`: Generates and displays the playlist

## Setup & Usage

1. Clone the repository:

```bash
git clone https://github.com/huynhvangioiem/tla-student-music-player.git
```

2. Open `index.html` in a web browser

3. Click play and enjoy the music!

No build process or dependencies required - just open and run!

## Browser Compatibility

-   Chrome (Recommended)
-   Firefox
-   Safari
-   Edge

Requires a modern browser with HTML5 audio support.

## Personal Notes

This was one of my early web development projects created during university. It represents a fun exploration of JavaScript, CSS animations, and building interactive web applications. The project uses some nostalgic web elements (like the `<marquee>` tag!) that give it character.

## Future Improvements (Ideas)

If I were to revisit this project, potential enhancements could include:

-   Volume control
-   Playlist creation/management
-   Search functionality
-   More complete lyrics database
-   Audio visualization
-   Theme customization
-   Keyboard shortcuts
-   Progress time display

## Credits

-   **Music**: Songs by Phan Mạnh Quỳnh
-   **Icons**: Font Awesome
-   **Framework**: TLA Library (custom)
-   **Developer**: Em Huynh

## License

This is a personal university project. Feel free to explore!

---

Made with nostalgia during my university days 🎵
