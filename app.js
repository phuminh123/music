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
            name: '♬ VÔ DUYÊN',
            singer: 'SUZIE X DR.A',
            path: './assets/songs/playlist1/♬ VÔ DUYÊN - SUZIE X DR.A ( DAXL x REMIX ) Nhớ Đeo Tai Nghe 💘 @Em Yêu.mp3',
            image: './assets/img/Vô Duyên.jpg'
        },
        {
            name: 'Ai Đợi Mình Được Mãi',
            singer: 'Thanh Hưng',
            path: './assets/songs/playlist1/Ai Đợi Mình Được Mãi (Freak D Lofi Ver.) -- Thanh Hưng.mp3',
            image: './assets/img/Ai đợi mình được mãi.jpg'
        },
        {
            name: 'Anh Đã Lạc Vào',
            singer: 'Green x Kprox',
            path: './assets/songs/playlist1/Anh Đã Lạc Vào「Lofi Ver」- Green x KProx.mp3',
            image: './assets/img/Anh đã lạc vào.jpg'
        },
        {
            name: 'CHIỀU THU HỌA BÓNG NÀNG REMIX',
            singer: 'DATKAA x QT BEATZ',
            path: './assets/songs/playlist1/CHIỀU THU HỌA BÓNG NÀNG REMIX - DATKAA x QT BEATZ - LATIN VERSION -.mp3',
            image: './assets/img/Chiều thu họa bóng nàng.jpg'
        },
        {
            name: 'Cô Ấy Nói',
            singer: 'Ngô Anh Đạt x Freak D',
            path: './assets/songs/playlist1/Cô Ấy Nói (Lofi Ver.) - Ngô Anh Đạt x Freak D.mp3',
            image: './assets/img/Cô ấy nói.jpg'
        },
        {
            name: 'Cứ Chill Thôi',
            singer: 'Chillies ft. Suni Hạ Linh & Rhymastic',
            path: './assets/songs/playlist1/Cứ Chill Thôi (Lofi Ver by ManhBeat) - Chillies ft. Suni Hạ Linh & Rhymastic.mp3',
            image: './assets/img/cứ chill thôi.jpg'
        },
        {
            name: 'Đoạn Tuyệt Nàng Đi',
            singer: 'Phát Huy T4 x KProx',
            path: './assets/songs/playlist1/Đoạn Tuyệt Nàng Đi「Lofi Ver. by KProx」- Phát Huy T4 x KProx -- Audio Lyrics.mp3',
            image: './assets/img/Đoạn tuyệt nàng đi.jpg'
        },
        {
            name: 'Hẹn Em Kiếp Sau',
            singer: '(Lofi Ver.)',
            path: './assets/songs/playlist1/Hẹn Em Kiếp Sau (Lofi Ver.) - Nhạc Lofi Hay Nhất 2020 - Lofi Chill Music.mp3',
            image: './assets/img/hẹn em kiếp sau.jpg'
        },
        {
            name: 'Mình Anh Nơi Này',
            singer: 'Nit x Sing x Freak D',
            path: './assets/songs/playlist1/Mình Anh Nơi Này (Lofi Ver.) - Nit x Sing x Freak D.mp3',
            image: './assets/img/mình anh nơi đây.jpg'
        },
        {
            name: 'một chút yêu thôi mà đau đến..cháy lòng',
            singer: 'Ngô Thành Dương Cover',
            path: './assets/songs/playlist1/một chút yêu thôi mà đau đến..cháy lòng(Lofi) - Cho Em Gần Anh Thêm Chút Nữa - Ngô Thành Dương Cover.mp3',
            image: './assets/img/một chút yêu thôi.jpg'
        },
        {
            name: 'Nhớ Về Em',
            singer: 'Quang Minh x KProx',
            path: './assets/songs/playlist1/Nhớ Về Em「Lofi Ver.」- Quang Minh x KProx.mp3',
            image: './assets/img/nhớ về em.jpg'
        },
        {
            name: 'Phận Duyên Lỡ Làng',
            singer: 'Phát Huy T4 x Truzg x KProx',
            path: './assets/songs/playlist1/Phận Duyên Lỡ Làng「Lofi Ver. by KProx」- Phát Huy T4 x Truzg x KProx.mp3',
            image: './assets/img/phận duyên lỡ.jpg'
        },
        {
            name: 'STREAM ĐẾN BAO GIỜ',
            singer: 'ĐỘ MIXI ft. BẠN SÁNG TÁC',
            path: './assets/songs/playlist1/STREAM ĐẾN BAO GIỜ - ĐỘ MIXI ft. BẠN SÁNG TÁC - OFFICIAL MUSIC VIDEO.mp3',
            image: './assets/img/stream đến bao giờ.jpg'
        },
        {
            name: 'ĐỘ ĐÚNG ĐỜI',
            singer: 'THIỆN HƯNG ft. ĐỘ MIXI',
            path: './assets/songs/playlist1/ĐỘ ĐÚNG ĐỜI - THIỆN HƯNG ft. ĐỘ MIXI - LYRIC AUDIO.mp3',
            image: './assets/img/ĐỘ ĐÚNG ĐỜI.jpg'
        },
        {
            name: 'ĐỘ TỘC 2',
            singer: 'MASEW x PHÚC DU x PHÁO x ĐỘ MIXI',
            path: './assets/songs/playlist1/ĐỘ TỘC 2 - FROM MIXI WITH LOVE - MASEW x PHÚC DU x PHÁO x ĐỘ MIXI [OFFICIAL MV LYRIC].mp3',
            image: './assets/img/ĐỘ TỘC 2.jpg'
        },
        {
            name: 'TỘC CA',
            singer: 'PHÚC DU x SONBEAT',
            path: './assets/songs/playlist1/TỘC CA - PHÚC DU x SONBEAT - OFFICIAL LYRIC VIDEO..mp3',
            image: './assets/img/tộc ca.jpg'
        },
        {
            name: '3107',
            singer: 'titie, Nâu ,Dươngg',
            path: './assets/songs/playlist1/W-n - ‘3107’ full album- ft. ( titie, Nâu ,Dươngg ).mp3',
            image: './assets/img/3107.jpg'
        },
        {
            name: 'Đánh Mất Em',
            singer: 'Quang Đăng Trần x Freak D',
            path: './assets/songs/playlist1/y2mate.com - Đánh Mất Em Lofi Ver  Quang Đăng Trần x Freak D.mp3',
            image: './assets/img/Đánh mất em.jpg'
        },
        {
            name: 'Đường Tôi Chở Em Về',
            singer: 'Lofi Chill',
            path: './assets/songs/playlist1/y2mate.com - Đường Tôi Chở Em Về Lofi Chill  Mới Chỉ Nhìn Em Khóc Tôi Bỗng Chợt Nhận Ra Đã Yêu Em Rồi  Pii.mp3',
            image: './assets/img/đường chở em về.jpg'
        },
        {
            name: 'Họ Yêu Ai Mất Rồi',
            singer: 'l Doãn Hiếu l',
            path: './assets/songs/playlist1/y2mate.com - Họ Yêu Ai Mất Rồi l Doãn Hiếu l Lofi Ver By MrPaa.mp3',
            image: './assets/img/Họ yêu ai mất r.jpg'
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