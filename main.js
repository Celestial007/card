let music = document.getElementById('music');
let vol = document.getElementById('vol');
let video = document.getElementById('video');
video.loop = true;
video.autoplay = true;
music.autoplay = true;
video.src = "bg.mp4";
music.src = "1.mp3";

ReportBody.onclick = function() {
    video.play()
    music.play();
}

let isPlaying = true;

vol.onclick = function() {
    if(isPlaying == true){
        music.volume = 1;
        vol.innerHTML = `<i class="fa-solid fa-volume-high"></i>`
        isPlaying = false;
    } else {
        music.volume = 0;
        vol.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
        isPlaying = true;
    }
}
