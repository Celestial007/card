let music = document.getElementById('music');
let vol = document.getElementById('vol');
let video = document.getElementById('video');
let body = document.body;

video.src = "bg.mp4";
music.src = "1.mp3";

vol.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`

let isPlaying = true;
vol.onclick = function() {
    if(isPlaying == true){
        music.play()
        video.play()
        vol.innerHTML = `<i class="fa-solid fa-volume-high"></i>`
        isPlaying = false;
    } else {
        music.pause()
        video.pause()
        vol.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
        isPlaying = true;
    }
}
video.addEventListener('ended',myHandler,false);
    function myHandler(e) {
        video.play()
    }
