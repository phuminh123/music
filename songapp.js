const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const PLAYER_STORAGE_KEY = 'MINH_QUAN'

const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem('PLAYER_STORAGE_KEY')) || {},
    songs: [{
            name: 'That Girl',
            singer: 'Olly Murs',
            path: './assets/songs/playlist2/[Vietsub + Kara] That Girl - Olly Murs (lyrics) - Tik Tok.mp3',
            image: './assets/img/that girl.jpg'
        },
        {
            name: 'I Love You 3000',
            singer: 'Stephanie Poetri',
            path: './assets/songs/playlist2/[Vietsub + Lyrics] I Love You 3000 - Stephanie Poetri.mp3',
            image: './assets/img/i love you 3000.jpg'
        },
        {
            name: 'All Falls Down',
            singer: 'Alan Walker',
            path: './assets/songs/playlist2/Alan Walker - All Falls Down (feat. Noah Cyrus with Digital Farm Animals).mp3',
            image: './assets/img/all falls down.jpg'
        },
        {
            name: 'Faded',
            singer: 'Alan Walker',
            path: './assets/songs/playlist2/Alan Walker - Faded.mp3',
            image: './assets/img/faded.jpg'
        },
        {
            name: 'Sweet but Psycho',
            singer: 'Ava Max',
            path: './assets/songs/playlist2/Ava Max - Sweet but Psycho [Official Music Video].mp3',
            image: './assets/img/sweet but psycho.jpg'
        },
        {
            name: 'Toxic',
            singer: 'BoyWithUke',
            path: './assets/songs/playlist2/BoyWithUke - Toxic (Official Lyric Video).mp3',
            image: './assets/img/toxic.jpg'
        },
        {
            name: 'Build a B-tch',
            singer: 'Bella Poarch',
            path: './assets/songs/playlist2/Build a B-tch - Bella Poarch (Lyrics + Vietsub) ♫.mp3',
            image: './assets/img/build a bitch.jpg'
        },
        {
            name: 'Cheating on You',
            singer: 'Charlie Puth',
            path: './assets/songs/playlist2/Charlie Puth - Cheating on You [Official Video].mp3',
            image: './assets/img/cheating on you.jpg'
        },
        {
            name: 'double take',
            singer: 'dhruv',
            path: './assets/songs/playlist2/dhruv - double take (Official Audio).mp3',
            image: './assets/img/double take.jpg'
        },
        {
            name: 'Shape of You',
            singer: 'Ed Sheeran',
            path: './assets/songs/playlist2/Ed Sheeran - Shape of You (Official Music Video).mp3',
            image: './assets/img/shape of you.jpg'
        },
        {
            name: 'Love Me Like You Do',
            singer: 'Ellie Goulding',
            path: './assets/songs/playlist2/Ellie Goulding - Love Me Like You Do (lyrics).mp3',
            image: './assets/img/love me like you do.jpg'
        },
        {
            name: 'comethru',
            singer: 'Jeremy Zucker',
            path: './assets/songs/playlist2/Jeremy Zucker - comethru (Official Video).mp3',
            image: './assets/img/comethru.jpg'
        },
        {
            name: 'INDUSTRY BABY',
            singer: 'Lil Nas X, Jack Harlow',
            path: './assets/songs/playlist2/Lil Nas X, Jack Harlow - INDUSTRY BABY (Official Video).mp3',
            image: './assets/img/industry baby.jpg'
        },
        {
            name: 'Girls Like You',
            singer: 'Maroon 5',
            path: './assets/songs/playlist2/Maroon 5 - Girls Like You ft. Cardi B (Official Music Video).mp3',
            image: './assets/img/girls like you.jpg'
        },
        {
            name: 'Sugar',
            singer: 'Maroon 5',
            path: './assets/songs/playlist2/Maroon 5 - Sugar (Official Music Video).mp3',
            image: './assets/img/sugar.jpg'
        },
        {
            name: 'Naughty Boy',
            singer: 'Sam Smith',
            path: './assets/songs/playlist2/Naughty Boy - La la la ft. Sam Smith (Official Video).mp3',
            image: './assets/img/naughty boy.jpg'
        },
        {
            name: 'Let Her Go',
            singer: 'Passenger',
            path: './assets/songs/playlist2/Passenger - Let Her Go (Official Video).mp3',
            image: './assets/img/let her go.jpg'
        },
        {
            name: 'Señorita',
            singer: 'Shawn Mendes, Camila Cabello',
            path: './assets/songs/playlist2/Shawn Mendes, Camila Cabello - Señorita.mp3',
            image: './assets/img/shawn mendes.jpg'
        },
        {
            name: 'Cheap Thrills',
            singer: 'Sia',
            path: './assets/songs/playlist2/Sia - Cheap Thrills (Performance Edit).mp3',
            image: './assets/img/cheap thrills.jpg'
        },
        {
            name: 'Unstoppable',
            singer: 'Sia',
            path: './assets/songs/playlist2/Sia - Unstoppable (Official Video - Live from the Nostalgic For The Present Tour).mp3',
            image: './assets/img/unstoppable.jpg'
        },
        {
            name: 'Love Is Gone',
            singer: 'SLANDER',
            path: './assets/songs/playlist2/SLANDER - Love Is Gone ft. Dylan Matthew (Acoustic).mp3',
            image: './assets/img/love is gone.jpg'
        },
        {
            name: 'STAY',
            singer: 'The Kid LAROI, Justin Bieber',
            path: './assets/songs/playlist2/The Kid LAROI, Justin Bieber - STAY (Official Video).mp3',
            image: './assets/img/stay.jpg'
        },
        {
            name: 'See You Again',
            singer: 'Wiz Khalifa',
            path: './assets/songs/playlist2/Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack.mp3',
            image: './assets/img/see you again.jpg'
        },
        {
            name: 'My Heart Will Go On',
            singer: 'Titanic',
            path: './assets/songs/playlist2/y2mate.com - Titanic  My Heart Will Go On Music Video.mp3',
            image: './assets/img/titanic.jpg'
        },
        {
            name: 'Dusk Till Dawn',
            singer: 'ZAYN',
            path: './assets/songs/playlist2/ZAYN - Dusk Till Dawn (Official Video) ft. Sia.mp3',
            image: './assets/img/dusk till dawn.jpg'
        },
        {
            name: 'The River',
            singer: '🐻 Axel Johansson',
            path: './assets/songs/playlist2/🐻 Axel Johansson - The River (Lyrics Video).mp3',
            image: './assets/img/the river.jpg'
        },
    ],
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        $('.playlist').innerHTML = htmls.join('')
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function() {
        const _this = this
        const cdWidth = cd.offsetWidth

        //Xử lý CD quay / dừng
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000, //10s
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        //Xử lý phóng to / thu nhỏ CD 
        document.onscroll = function() {
            const scrollTop = window.scrollY
            const newCdWidth = cdWidth - scrollTop

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth

        }

        //Xử lý khi click play 
        playBtn.onclick = function() {
            if (_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }

        //Khi song play
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

        //Khi song pause
        audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        //Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }

        //Khi tua song 
        progress.onchange = function(e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }

        //Khi next song 
        nextBtn.onclick = function() {
                if (_this.isRandom) {
                    _this.playRandomSong()
                } else {
                    _this.nextSong()
                }
                audio.play()
                _this.render()
                _this.scrollToActiveSong()
            }
            //Khi prev song 
        prevBtn.onclick = function() {
                if (_this.isRandom) {
                    _this.playRandomSong()
                } else {
                    _this.prevSong()
                }
                audio.play()
                _this.render()
                _this.scrollToActiveSong()
            }
            //Khi random bài hát
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        //Phát lại 1 bài hát 
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat)
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        //Xử lý next song song khi audio ended
        audio.onended = function() {
                if (_this.isRepeat) {
                    audio.play()
                } else {
                    nextBtn.click()
                }
            }
            //Lắng nghe hành vi click vào play list
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)')
            if (songNode || e.target.closest('.option')) {
                //Xử lý khi click vào song
                {
                    if (songNode) {
                        _this.currentIndex = Number(songNode.dataset.index)
                        _this.loadCurrentSong()
                        audio.play()
                        _this.render()
                    }
                }
                //Xử lý khi click vào option
                if (e.target.closest('.option')) {

                }
            }
        }
    },
    scrollToActiveSong: function() {
        if (this.currentIndex === 0) {
            document.documentElement.scrollTop = 0
        }
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            })
        }, 0)
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path

        console.log(heading, cdThumb, audio)

    },
    loadConfig: function() {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    nextSong: function() {
        this.currentIndex++
            if (this.currentIndex >= this.songs.length) {
                this.currentIndex = 0
            }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
            if (this.currentIndex < 0) {
                this.currentIndex = this.songs.length - 1
            }
        this.loadCurrentSong()
    },
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    start: function() {
        //Gán cấu hình từ cònfig vào app
        // this.loadConfig()

        //Định nghĩa các thuộc tính cho object
        this.defineProperties()

        //Lắng nghe xử lý các sự kiện (DOM event)
        this.handleEvents()


        //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()

        //Render playlist
        this.render()

        //Hiển thị trạng thái ban đầu của button repeat và ban đầu 
        randomBtn.classList.toggle('active', _this.isRandom)
        repeatBtn.classList.toggle('active', _this.isRepeat)
    }
}
app.start()