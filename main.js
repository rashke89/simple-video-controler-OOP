var videooo = document.getElementsByTagName('video')[0];
var play = document.getElementById('play');
var pause = document.getElementById('pause');
var stop = document.getElementById('stop');

pause.addEventListener('click', function() {
    v.pause();
    pause.className = 'hidden';
    play.className = 'visible';
});
play.addEventListener('click', function() {
    v.play();
    play.className = 'hidden';
    pause.className = 'visible';
});
stop.addEventListener('click', function() {
    v.video.currentTime = 0;
    v.pause();
    pause.className = 'hidden';
    play.className = 'visible';
    console.log('aa');
});

function Video(video) {
    this.video = video;
};
console.log(Video);
Video.prototype.pause = function() {
    return this.video.pause();
};
Video.prototype.play = function() {
    return this.video.play();
};
Video.prototype.stop = function() {
    return this.video.stop();
}
var v = new Video(videooo);