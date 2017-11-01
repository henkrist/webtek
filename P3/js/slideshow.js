//slideshow script

var images = document.getElementById('slideShow').children;
var slideIndex = 1;
var lastSlideIndex = images.length - 1;

function rotateSlide() {
    setTimeout(function() {
        if (slideIndex == 0) {
            var previousSlideIndex = lastSlideIndex;
        } else {
            var previousSlideIndex = slideIndex - 1;
        }

        images[previousSlideIndex].style = 'display: none';
        images[slideIndex].style = 'display: inline';

        if (slideIndex == lastSlideIndex) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        rotateSlide();
    }, 5000);
}

rotateSlide();