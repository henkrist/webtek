//slideshow script index

//array of image paths
var imagePaths = [
    "img/bilde2.jpg",
    "img/bilde3.jpg", 
    "img/bilde1.jpg"
];

var imageWidth = document.body.clientWidth;
var imageHeight = imageWidth / (3254 / 1428);


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
    showCanvasCtx.drawImage(img, 0, 0, imageWidth, imageHeight);
    showCanvasCtx.globalAlpha += 0.1;
    if (showCanvasCtx.globalAlpha >= 0.99) {
        clearInterval(revealTimer);
        showCanvasCtx.restore();
        setTimeout(switchImage, 3000);
    }
}

//looks at current image index, gets its paths from array, points at src for current image index
function switchImage() {
    img.setAttribute('src', imagePaths[currentImage++]);
    if (currentImage >= imagePaths.length)
        currentImage = 0;
    showCanvasCtx.globalAlpha = 0.1;
    revealTimer = setInterval(revealImage, 100);
}

//action when window loads
showCanvas = document.getElementById('showCanvas');
showCanvasCtx = showCanvas.getContext('2d');
showCanvas.width = imageWidth;
showCanvas.height = imageHeight;

switchImage();