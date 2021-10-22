const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const imgMusic = $('.imgMusic img');
const heading = $('.nameSing--Name');
const cdthumb = $('.imgMusic img');
const audio = $('#audio');
const btnplay = $('.btn-toggle-play');
const playing = $('.fa-play');
const progress = $('#progress');
const volumeSong = $('.btn-volume');
const volumeOn = $('.volume-hover');
const volumeChange = $('.volume');
const btnnext = $('.btn-next')
const btnprev = $('.btn-prev')
const btnrepeat = $('.btn-repeat')
const btnrandom = $('.btn-random')
const listSong = $('.listSong')




const app = {
    randomMix : false,
    repeat: false,
    currentIndex:0,
    isPLaying : false,
    songs: [
        {
            name: 'Di Vang Nhat Nhoa',
            singer: 'Lan Nha',
            path: './assets/song/Di-Vang-Nhat-Nhoa-Lan-Nha.mp3',
            image: './assets/img/1.jpg'
        },
        {
            name: 'Chuyen Cua Mua Dong',
            singer: 'Ha Anh Tuan',
            path: './assets/song/ChuyenCuaMuaDongSEESINGSHARE1-HaAnhTuan-4692692.mp3',
            image: './assets/img/1605596087742_500.jpg'
        },
        {
            name: 'Di Dau De Thay Hoa Bay',
            singer: 'Ha Anh Tuan',
            path: './assets/song/DiDauDeThayHoaBaySEESINGSHARE3-HaAnhTuan-5492021.mp3',
            image: './assets/img/1605596266129_500.jpg'
        },
        {
            name: 'Nguoi Tinh Mua Dong',
            singer: 'Ha Anh Tuan',
            path: './assets/song/NguoiTinhMuaDongSEESINGSHARE2-HaAnhTuan-5104816.mp3',
            image: './assets/img/1605596266129_500.jpg'
        },
        {
            name: 'Giac Mo Chi La Giac Mo',
            singer: 'Ha Anh Tuan',
            path: './assets/song/GiacMoChiLaGiacMoSeeSingShare2-HaAnhTuan-5082049.mp3',
            image: './assets/img/1605596087742_500.jpg'
        },
        {
            name: 'Qua Con Me',
            singer: 'Ha Anh Tuan',
            path: './assets/song/QuaConMeSEESINGSHARE3-HaAnhTuan-5492009.mp3',
            image: './assets/img/1605596488216_500.jpg'
        },
        {
            name: 'Tai But Anh Yeu Em',
            singer: 'Ha Anh Tuan',
            path: './assets/song/TaiButAnhYeuEm-HaAnhTuan-5112161.mp3',
            image: './assets/img/1605596087742_500.jpg'
        },
        {
            name: 'Tinh Thoi Xot Xa',
            singer: 'Ha Anh Tuan',
            path: './assets/song/TinhThoiXotXaSEESINGSHARE1-HaAnhTuan-4652191.mp3',
            image: './assets/img/1605596266129_500.jpg'
        },
        {
            name: 'Di Vang Nhat Nhoa',
            singer: 'Lan Nha',
            path: './assets/song/Di-Vang-Nhat-Nhoa-Lan-Nha.mp3',
            image: './assets/img/1.jpg'
        },
        {
            name: 'Chuyen Cua Mua Dong',
            singer: 'Ha Anh Tuan',
            path: './assets/song/ChuyenCuaMuaDongSEESINGSHARE1-HaAnhTuan-4692692.mp3',
            image: './assets/img/1605596087742_500.jpg'
        },
        {
            name: 'Di Dau De Thay Hoa Bay',
            singer: 'Ha Anh Tuan',
            path: './assets/song/DiDauDeThayHoaBaySEESINGSHARE3-HaAnhTuan-5492021.mp3',
            image: './assets/img/1605596266129_500.jpg'
        },
        {
            name: 'Nguoi Tinh Mua Dong',
            singer: 'Ha Anh Tuan',
            path: './assets/song/NguoiTinhMuaDongSEESINGSHARE2-HaAnhTuan-5104816.mp3',
            image: './assets/img/1605596266129_500.jpg'
        },
        {
            name: 'Giac Mo Chi La Giac Mo',
            singer: 'Ha Anh Tuan',
            path: './assets/song/GiacMoChiLaGiacMoSeeSingShare2-HaAnhTuan-5082049.mp3',
            image: './assets/img/1605596087742_500.jpg'
        },
        {
            name: 'Qua Con Me',
            singer: 'Ha Anh Tuan',
            path: './assets/song/QuaConMeSEESINGSHARE3-HaAnhTuan-5492009.mp3',
            image: './assets/img/1605596488216_500.jpg'
        },
        {
            name: 'Tai But Anh Yeu Em',
            singer: 'Ha Anh Tuan',
            path: './assets/song/TaiButAnhYeuEm-HaAnhTuan-5112161.mp3',
            image: './assets/img/1605596087742_500.jpg'
        },
        {
            name: 'Tinh Thoi Xot Xa',
            singer: 'Ha Anh Tuan',
            path: './assets/song/TinhThoiXotXaSEESINGSHARE1-HaAnhTuan-4652191.mp3',
            image: './assets/img/1605596266129_500.jpg'
        },
        {
            name: 'Di Vang Nhat Nhoa',
            singer: 'Lan Nha',
            path: './assets/song/Di-Vang-Nhat-Nhoa-Lan-Nha.mp3',
            image: './assets/img/1.jpg'
        },
        {
            name: 'Chuyen Cua Mua Dong',
            singer: 'Ha Anh Tuan',
            path: './assets/song/ChuyenCuaMuaDongSEESINGSHARE1-HaAnhTuan-4692692.mp3',
            image: './assets/img/1605596087742_500.jpg'
        },
        {
            name: 'Di Dau De Thay Hoa Bay',
            singer: 'Ha Anh Tuan',
            path: './assets/song/DiDauDeThayHoaBaySEESINGSHARE3-HaAnhTuan-5492021.mp3',
            image: './assets/img/1605596266129_500.jpg'
        },
        {
            name: 'Nguoi Tinh Mua Dong',
            singer: 'Ha Anh Tuan',
            path: './assets/song/NguoiTinhMuaDongSEESINGSHARE2-HaAnhTuan-5104816.mp3',
            image: './assets/img/1605596266129_500.jpg'
        },
        {
            name: 'Giac Mo Chi La Giac Mo',
            singer: 'Ha Anh Tuan',
            path: './assets/song/GiacMoChiLaGiacMoSeeSingShare2-HaAnhTuan-5082049.mp3',
            image: './assets/img/1605596087742_500.jpg'
        },
        {
            name: 'Qua Con Me',
            singer: 'Ha Anh Tuan',
            path: './assets/song/QuaConMeSEESINGSHARE3-HaAnhTuan-5492009.mp3',
            image: './assets/img/1605596488216_500.jpg'
        },
        {
            name: 'Tai But Anh Yeu Em',
            singer: 'Ha Anh Tuan',
            path: './assets/song/TaiButAnhYeuEm-HaAnhTuan-5112161.mp3',
            image: './assets/img/1605596087742_500.jpg'
        },
        {
            name: 'Tinh Thoi Xot Xa',
            singer: 'Ha Anh Tuan',
            path: './assets/song/TinhThoiXotXaSEESINGSHARE1-HaAnhTuan-4652191.mp3',
            image: './assets/img/1605596266129_500.jpg'
        },
        
    ],
    render: function(){
        
        const htmls = this.songs.map((song , index) => {
            return `
            <li data-index="${index}"" class="listSong__item ${index === app.currentIndex ? 'active' : ''}">
                <img src="${song.image}" alt="" class="listSong__item--img">
                <div class="listSong__item--bazer">
                    <div class="listSong__item--title">
                        <div class="listSong__item--title-name">${song.name}</div>
                        <div class="listSong__item--title-singer">${song.singer}</div>
                    </div>
                    <div class="listSong__item--option"><i class="fas fa-ellipsis-h"></i></div>
                </div>
            </li>`
        })
        listSong.innerHTML = htmls.join('')
    },
    
    
    defineProperti: function(){
        Object.defineProperty(this, 'currentSong', {
           get: function(){
               return this.songs[this.currentIndex]
           } 
        })
    },
    handleEvents: function(){
        const imgMusicWidth = imgMusic.offsetWidth
        document.onscroll = function(){
            const scroll = window.scrollY || document.documentElement.scrollTop;
            const newimgMusic =   imgMusicWidth - scroll 
            imgMusic.style.width = newimgMusic > 0 ? newimgMusic +'px' : 0
            imgMusic.style.opacity = newimgMusic / imgMusicWidth
        };
// Timeupdate duration audio 

        setInterval(() => {
            if(audio.duration && progress.value <= audio.duration){
                        const progressPercent = audio.currentTime / audio.duration * 100;
                        progress.value = progressPercent; 
                                          
                    }
        }, 1000);

// Timeupdate duration audio - option 2 

        // audio.ontimeupdate = function(){
        //     console.log(1)
        //     if(audio.duration){
        //         const progressPercent = audio.currentTime / audio.duration * 100;
        //         progress.value = progressPercent;   
                             
        //     }
        // };

        progress.onchange = function(){
            audio.currentTime = (audio.duration / 100) * progress.value
        };
// animation disk

        const animateDisk = cdthumb.animate([
            { transform: 'rotate(360deg)'}
        ],{
            duration: 10000,
            iterations: Infinity
        });
        animateDisk.pause()
// setting Volume audio  
    

        let volumeX = 1;
        volumeChange.value = 50;
        audio.volume = volumeChange.value/100; 
        
        volumeChange.onchange = function(){            
            audio.volume = volumeChange.value/100;
            if(volumeChange.value === '0'){
                volumeOn.classList.remove('fa-volume-up');
                volumeOn.classList.add('fa-volume-mute');
            }else{
                volumeOn.classList.add('fa-volume-up');
                volumeOn.classList.remove('fa-volume-mute');
            }
            ;
            return volumeX  = audio.volume;            
        };

        volumeOn.onclick = function(){
            console.log(volumeChange.value)
            if( audio.volume > 0){
                volumeChange.value = 0
                audio.volume = 0;
                volumeOn.classList.remove('fa-volume-up');
                volumeOn.classList.add('fa-volume-mute');
            }else if(volumeX === 0){
                volumeChange.value = 100 ;          
                audio.volume = 1
                volumeOn.classList.remove('fa-volume-mute');
                volumeOn.classList.add('fa-volume-up');
            }else{  
                    volumeChange.value = volumeX*100 ;          
                    audio.volume = volumeX;
                    volumeOn.classList.remove('fa-volume-mute');
                    volumeOn.classList.add('fa-volume-up');
                
            }
        };
        
// lick on play/pause
        btnplay.onclick = function(){
            if(app.isPLaying){
            audio.pause()
            animateDisk.pause()
            }else{            
            audio.play()
            animateDisk.play()
        }}

        audio.onplay = function(){
            app.isPLaying = true;
            playing.classList.add('fa-pause');
            playing.classList.remove('fa-play');
        
           
        };
        audio.onpause = function(){
            app.isPLaying = false;
            playing.classList.add('fa-play');
            playing.classList.remove('fa-pause');
        }


//contruction choise song
        let choiseSong = function(curIndex){
            heading.textContent = app.songs[curIndex].name;
            cdthumb.src = app.songs[curIndex].image;
            audio.src = app.songs[curIndex].path;
            app.render()
            app.scrollToActiveSong()
        }        
// clickon next song
        btnnext.onclick = function(){
            if(app.randomMix){

                let random = Math.floor(Math.random() * app.songs.length);
                    for (let i = 0 ; i < 1000 ; i++){
                        if (random === app.currentIndex ){
                            random = Math.floor(Math.random() * app.songs.length)
                        }else{ 
                            app.currentIndex = random 
                            break;
                        }
                    }
                choiseSong(app.currentIndex);
                audio.autoplay = true;
                
               
            }else{        
                    if (app.currentIndex < app.songs.length - 1){
                    app.currentIndex = app.currentIndex + 1;
                    choiseSong(app.currentIndex);
                    audio.autoplay = true;
                        
                    }else{
                        app.currentIndex = 0;
                        choiseSong(app.currentIndex);
                        audio.autoplay = true;
                        
                    }
        }};
// click on prevous song
        btnprev.onclick = function(){
            if (app.currentIndex > 0 ){
            app.currentIndex = app.currentIndex - 1;
            choiseSong(app.currentIndex);
            audio.autoplay = true;
            
        }else{
            alert('Đây là bài đầu tiên của List, Không có bài trước')
        }
        };

// click on repeat song
        btnrepeat.onclick = function(){
            if(app.repeat){
                app.repeat = false;
                audio.loop = false;
                btnrepeat.style.color = 'black'
            }else{
                app.repeat = true;
                audio.loop = true
                btnrepeat.style.color = 'red'
            }
        }

// click turn on random song
        btnrandom.onclick=function(){
            console.log(app.randomMix)
            if (app.randomMix){
                app.randomMix = false;
                app.autoNextSong();
                btnrandom.style.color = 'black'
            }else{
                app.randomMix = true;
                btnrandom.style.color = 'red';
                audio.ontimeupdate = function(){
                    if (audio.ended){
                        let random = Math.floor(Math.random() * app.songs.length);
                        for (let i = 0 ; i < 1000 ; i++){
                            if (random === app.currentIndex ){
                                random = Math.floor(Math.random() * app.songs.length)
                            }else{ 
                                app.currentIndex = random 
                                break;
                            }
                        }
                        console.log(app.currentIndex)
                        choiseSong(app.currentIndex);
                        audio.autoplay = true;
                    }
                }
            }
        }
        
// Chọn bài trực tiếp 
        listSong.onclick = function(e){
            app.currentIndex = parseInt(e.target.closest('.listSong__item:not(.active)').getAttribute('data-index'))
            if(e.target.closest('.listSong__item:not(.active)') || e.target.closest('.listSong__item--option') ){
                if(e.target.closest('.listSong__item:not(.active)') && !e.target.closest('.listSong__item--option')){
                    choiseSong(e.target.closest('.listSong__item:not(.active)').getAttribute('data-index'));
                    audio.autoplay = true;
                };
            }
        }        
    },
    //  scroll chọn bài
    scrollToActiveSong: function(){
        setTimeout(() => {
            $('.listSong__item.active').scrollIntoView({
                behavior : 'smooth',
                block : 'end'
            })
        }, 200)

    },
    autoplaysong: function(){
        setTimeout(function(){
            btnplay.click(function(){
                audio.trigger("play");
              });
            // audio.play();
            // btnplay.click(function(){
            //     this.paused ? this.play() : this.pause();
            // });         
            // app.isPLaying = true;
            // playing.classList.remove('fa-play');
            // playing.classList.add('fa-pause');
        }, 2000)
    },
    loadCurrentSong(){
        heading.textContent = this.currentSong.name;
        cdthumb.src = this.currentSong.image;
        audio.src = this.currentSong.path;
    },

    

    autoNextSong: function(){
        audio.ontimeupdate = function(){
            if (audio.ended){
                btnnext.onclick()
            }
        }
    },

    start: function(){
        this.defineProperti()
        this.handleEvents()
        this.loadCurrentSong()
        this.render()
        // this.autoplaysong()
        this.autoNextSong()
        
    }
}

app.start()