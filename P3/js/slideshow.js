//slideshow script

var running = 0 /* Used to check if fade is running */

function StartFade() {
  if (running != 1) {
   running = 1
   fadeOut()
  }
}

