$(document).ready(function () {
    const get = document.querySelector.bind(document);
    const gets = document.querySelectorAll.bind(document);

    const player = get(".player");
    const playlist = get(".playlist");
    const cd = get(".cd-thumb");
    const songName = get(".header .songName");
    const singer = get(".header .singer");
    const audio = get("#audio");
    const btnPlay = get(".btn-toggle-play");
    const btnRepeat = get(".btn-repeat");
    const btnRandom = get(".btn-random");
    const btnPrev = get(".btn-prev");
    const btnNext = get(".btn-next");
    const progress = get("#progress");
    const lyric_title = get(".lyrics .title");
    const lyric_content = get(".lyrics .content");
    const dashboard = get(".dashboard");
    const playlists = get(".playlists");
    const lyrics = get(".lyrics");

    const app = {
        currentIndex: 0,
        isPlaying: false,
        isRandom: false,
        isRepeat: false,
        config: {},

        songs: [
            {
                name: "Take Me Out to the Ball Game",
                singer: "Edward Meeker (1908)",
                path: "music/ballgame.mp3",
                image: "img/ballgame.jpg",
                lyric: `Katie Casey was baseball mad,
Had the fever and had it bad.
Just to root for the home town crew,
Ev'ry sou Katie blew.
On a Saturday her young beau
Called to see if she'd like to go
To see a show, but Miss Kate said "No,
I'll tell you what you can do:"

Take me out to the ball game,
Take me out with the crowd;
Buy me some peanuts and Cracker Jack,
I don't care if I never get back.
Let me root, root, root for the home team,
If they don't win, it's a shame.
For it's one, two, three strikes, you're out,
At the old ball game.

Katie Casey saw all the games,
Knew the players by their first names.
Told the umpire he was wrong,
All along,
Good and strong.
When the score was just two to two,
Katie Casey knew what to do,
Just to cheer up the boys she knew,
She made the gang sing this song:

Take me out to the ball game,
Take me out with the crowd;
Buy me some peanuts and Cracker Jack,
I don't care if I never get back.
Let me root, root, root for the home team,
If they don't win, it's a shame.
For it's one, two, three strikes, you're out,
At the old ball game.`
            },
            {
                name: "Shine On, Harvest Moon",
                singer: "Ada Jones & Billy Murray (1909)",
                path: "music/harvest.mp3",
                image: "img/harvest.jpg",
                lyric: `The night was mighty dark so you could hardly see,
For the moon refused to shine.
Couple sitting underneath a willow tree,
For love they did pine.
Little maid was kinda 'fraid of darkness
So she said, "I guess I'll go."
Boy began to sigh, looked up at the sky,
And told the moon his little tale of woe:

Oh, shine on, shine on, harvest moon
Up in the sky;
I ain't had no lovin'
Since April, January, June or July.
Snow time ain't no time to stay
Outdoors and spoon;
So shine on, shine on, harvest moon,
For me and my gal.

I can't see why a boy should sigh when by his side
Is the girl he loves so true,
All he has to say is: "Won't you be my bride,
For I love you?
I can't see why I'm telling you this secret,
When I know that you can guess."
Harvest moon will smile,
Shine on all the while,
If the little girl should answer "yes."

Oh, shine on, shine on, harvest moon
Up in the sky;
I ain't had no lovin'
Since April, January, June or July.
Snow time ain't no time to stay
Outdoors and spoon;
So shine on, shine on, harvest moon,
For me and my gal.`
            },
            {
                name: "Down by the Old Mill Stream",
                singer: "Brunswick Quartette (1911)",
                path: "music/millstream.mp3",
                image: "img/millstream.jpg",
                lyric: `My darling I am dreaming of the days gone by,
When you and I were sweethearts beneath the summer sky;
Your hair has turned to silver, the gold has faded too;
But still I will remember, where I first met you.

Down by the old mill stream
Where I first met you,
With your eyes of blue,
Dressed in gingham too,
It was there I knew that you loved me true,
You were sixteen, my village queen,
By the old mill stream.

The old mill wheel is silent and has fallen down,
The old oak tree has withered and lies there on the ground;
While you and I are sweethearts the same as days of yore;
Although we've been together, forty years and more.

Down by the old mill stream
Where I first met you,
With your eyes of blue,
Dressed in gingham too,
It was there I knew that you loved me true,
You were sixteen, my village queen,
By the old mill stream.`
            },
            {
                name: "Let Me Call You Sweetheart",
                singer: "Columbia Quartette (1911)",
                path: "music/sweetheart.mp3",
                image: "img/sweetheart.jpg",
                lyric: `I am dreaming Dear of you, day by day
Dreaming when the skies are blue, when they're gray
When the silv'ry moonlight gleams, still I wander on in dreams
In a land of love, it seems, just with you

Let me call you "Sweetheart," I'm in love with you
Let me hear you whisper that you love me too
Keep the love-light glowing in your eyes so true
Let me call you "Sweetheart," I'm in love with you

Longing for you all the while, more and more
Longing for the sunny smile, I adore
Birds are singing far and near, roses blooming everywhere
You alone my heart can cheer, you just you

Let me call you "Sweetheart," I'm in love with you
Let me hear you whisper that you love me too
Keep the love-light glowing in your eyes so true
Let me call you "Sweetheart," I'm in love with you`
            },
        ],
        setConfig: function (key, value) {
            this.config[key] = value;
        },
        playRandom: function () {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * this.songs.length);
            } while (newIndex === this.currentIndex);
            this.currentIndex = newIndex;
            this.loadCurrentSong();
        },
        nextSong: function () {
            this.currentIndex++;
            if (this.currentIndex >= this.songs.length) {
                this.currentIndex = 0;
            }
            this.loadCurrentSong();
        },
        prevSong: function () {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.songs.length - 1;
            }
            this.loadCurrentSong();
        },
        // scrollToActiveSong: function () {
        //     setTimeout(() => {
        //         get(".song.active").scrollIntoView({
        //             behavior: "smooth",
        //             block: "nearest"
        //         });
        //     }, 300);
        // },

        //dinh nghia thuoc tinh object
        defineProperties: function () {
            Object.defineProperty(this, "currentSong", {
                get: function () {
                    return this.songs[this.currentIndex];
                }
            })
        },

        //xu ly su kien
        handleEvent: function () {
            _this = this;
            const cdWidth = cd.offsetWidth;

            //xu ly cd phong to thu nho
            // document.onscroll = function () {
            //     const scrollTop = document.documentElement.scrollTop || window.scrollY;
            //     const newCDWidth = cdWidth - scrollTop;
            //     cd.style.width = newCDWidth + "px";
            //     cd.style.opacity = newCDWidth / cdWidth;
            // }

            //xu ly cd quay / dung
            const cdAnimate = cd.animate([{ transform: "rotate(360deg)" }], {
                duration: 30000, //10s
                iterations: Infinity
            })
            cdAnimate.pause();


            //khi click btnPlay
            btnPlay.onclick = () => {
                if (_this.isPlaying) {
                    audio.pause();
                } else {
                    audio.play();
                }
            }

            //khi song isPlaying
            audio.onplay = () => {
                _this.isPlaying = true;
                player.classList.add("playing");
                cdAnimate.play();
            }

            //khi song isPause
            audio.onpause = () => {
                _this.isPlaying = false;
                player.classList.remove("playing");
                cdAnimate.pause();
            }

            //khi tien do bai hat thay doi
            audio.ontimeupdate = () => {
                if (audio.duration) {
                    const progressValue = Math.floor(
                        audio.currentTime / audio.duration * 1000
                    );
                    progress.value = progressValue;
                }
            }

            //tua song
            progress.onchange = (e) => {
                const seekTime = audio.duration / 1000 * e.target.value;
                audio.currentTime = seekTime;
            }

            //next song
            btnNext.onclick = () => {
                if (_this.isRandom) {
                    _this.playRandom();
                } else {
                    _this.nextSong();
                }
                audio.play();
                _this.render();
                // _this.scrollToActiveSong();
            }

            //prev song
            btnPrev.onclick = () => {
                if (_this.isRandom) {
                    _this.playRandom();
                } else {
                    _this.prevSong();
                }
                audio.play();
                _this.render();
                // _this.scrollToActiveSong();
            }

            //random song
            btnRandom.onclick = () => {
                _this.isRandom = !_this.isRandom;
                _this.setConfig("isRandom", _this.isRandom);
                btnRandom.classList.toggle("active", _this.isRandom);
            }

            //repeat song
            btnRepeat.onclick = () => {
                _this.isRepeat = !_this.isRepeat;
                _this.setConfig("isRepeat", _this.isRepeat);
                btnRepeat.classList.toggle("active", _this.isRepeat)
            }

            //auto next song
            audio.onended = () => {
                if (_this.isRepeat) {
                    audio.play();
                } else {
                    btnNext.click();
                }
            }

            //playlist on click
            playlist.onclick = (e) => {
                const songNode = e.target.closest(".song:not(.active)");
                if (songNode || e.target.closest(".options")) {
                    //click on song
                    if (songNode) {
                        _this.currentIndex = Number(songNode.dataset.index);
                        _this.loadCurrentSong();
                        _this.render();
                        audio.play();
                    }

                    //click on options
                    if (e.target.closest(".options")) {
                        //do something
                    }
                }
            }

            //show playlists
            get(".far.fa-arrow-alt-circle-left").onclick = () => {
                dashboard.classList.remove("show");
                lyrics.classList.remove("show");
                playlists.classList.add("show");
            }
            //show lyrics
            get(".far.fa-arrow-alt-circle-right").onclick = () => {
                dashboard.classList.remove("show");
                playlists.classList.remove("show");
                lyrics.classList.add("show");
            }
            get(".far.fa-play-circle").onclick = () => {
                dashboard.classList.add("show");
                playlists.classList.remove("show");
                lyrics.classList.remove("show");
            }

        },

        loadCurrentSong: function () {
            songName.textContent = this.currentSong.name;
            singer.textContent = this.currentSong.singer;
            cd.src = this.currentSong.image;
            audio.src = this.currentSong.path;
            lyric_title.textContent = this.currentSong.name;
            lyric_content.textContent = this.currentSong.lyric;
        },

        //render playlist
        render: function () {
            const htmls = this.songs.map((song, index) => {
                return (
                    `
                    <div class="col-12 col-m-12 col-s-12 song ${index === this.currentIndex ? "active" : ""}" data-index="${index}">
                    <div class="thumb">
                    <img class="img-circle" src="${song.image}" alt="">
                            </div>
                            <div class="body">
                                <h3 class="songName">${song.name}</h3>
                                <h5 class="singer">${song.singer}</h5>
                            </div>
                            <div class="options">...</div>
                        </div>
                    `
                );
            });
            playlist.innerHTML = htmls.join("");
            dashboard.classList.add("show");
            playlists.classList.remove("show");
        },

        start: function () {
            //dinh nghia cac thuoc tinh cho object
            this.defineProperties();

            //Xu ly su kien (DOM Event)
            this.handleEvent();

            //Tai bai hat dau tien
            this.loadCurrentSong();

            //Render playlist
            this.render();

        }
    }
    app.start();
})