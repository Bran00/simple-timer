import { 
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSetTimer,
  buttonSoundOn,
  buttonSoundOff
} from "/js/variables.js"

export default function ({
  controls, timer, sounds
})
{
buttonPlay.addEventListener("click", function() {
  controls.play()
  timer.countdown()
  sounds.pressButton()
})

buttonPause.addEventListener("click", function() {
  controls.pause()
  timer.hold()
  sounds.pressButton()
})

buttonStop.addEventListener("click", function() {
  controls.stop()
  timer.updateDisplay()
  timer.hold()
  sounds.pressButton()
})

buttonSetTimer.addEventListener("click", function() {
   sounds.pressButton()
   let newMinutes = controls.getMinutes()
   if(!newMinutes) {
     controls.stop()
     timer.updateDisplay()
     return
   }
   timer.updateDisplay(newMinutes, 0)
   timer.updateMinutes(newMinutes)
})

buttonSoundOn.addEventListener("click", function() {
  buttonSoundOn.classList.add("hide")
  buttonSoundOff.classList.remove("hide")
  sounds.bgAudio.pause()
})

buttonSoundOff.addEventListener("click", function() {
  buttonSoundOn.classList.remove("hide")
  buttonSoundOff.classList.add("hide")
  sounds.bgAudio.play()
})
}