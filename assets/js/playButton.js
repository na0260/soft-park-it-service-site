// ...start-video-svg-onclick...
const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
    circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
    circlePlayButton.style.opacity = 1;
});
// ...end-video-svg-onclick...