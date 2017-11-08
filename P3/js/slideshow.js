//slideshow script index

//array of image paths
var imagePaths = [
    "img/bilde2.jpg", "img/bilde3.jpg", "img/bilde1.jpg"
];

//variables referring to canvas and canvas context
var showCanvas = null;
var showCanvasCtx = null;

//image responsible for loading every image from folder.
var img = document.createElement("img");
var currentImage = 0;
var revealTimer;

//saves current context of canvas, draws current image onto canvas, increments globalAlpha by 10%
function revealImage() {
    showCanvasCtx.save();
    showCanvasCtx.drawImage(img, 0, 0, 600, 400);
    showCanvasCtx.globalAlpha += 0.1;
    if (showCanvasCtx.globalAlpha >= 1.0)
        clearInterval(revealTimer);
    showCanvasCtx.restore();
}

//looks at current image index, gets its paths from array, points at src for current image index
function switchImage() {
    img.setAttribute('src',imagePaths[currentImage++]);
    if (currentImage >= imagePaths.length)
        currentImage = 0;
    showCanvasCtx.globalAlpha = 0.1;
    revealTimer = setInterval(revealImage, 100);
}

showCanvas = document.getElementById('showCanvas');
showCanvasCtx = showCanvas.getContext('2d');

img.setAttribute('width', '600');
img.setAttribute('height', '400');
switchImage();

// start the animation
setInterval(switchImage, 3000);