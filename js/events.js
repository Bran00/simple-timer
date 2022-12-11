import { 
  watchInput,
  timerInput,
  minutesDisplayTimer,
  secondsDisplayTimer,
  minutesDisplayWatch,
  secondsDisplayWatch,
  milisecondsDisplayWatch,
  buttonPlayTimer,
  buttonPauseTimer,
  buttonStopTimer,
  buttonSetTimer,
  buttonPlayWatch,
  buttonPauseWatch,
  buttonStopWatch,
  buttonSoundOn,
  buttonSoundOff
} from "/js/variables.js"

export default function ({
  controls, timer, sounds
})

{

watchInput.addEventListener("click", function() {
if(watchInput.checked) {
  timer.hold()
  timer.removeBoxShadow()
  controls.stop()
  timer.updateDisplayWatch(0, 0, 0)
}})

timerInput.addEventListener("click", function() {
if(timerInput.checked) {
  timer.hold()
  timer.removeBoxShadow()
  controls.stop()
  timer.updateDisplayTimer()
}})

buttonPlayTimer.addEventListener("click", function() {
  controls.play()
  timer.countdown()
  sounds.pressButton()
})

buttonPauseTimer.addEventListener("click", function() {
  controls.pause()
  timer.hold()
  sounds.pressButton()
})

buttonStopTimer.addEventListener("click", function() {
  controls.stop()
  timer.updateDisplayTimer()
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

buttonPlayWatch.addEventListener("click", function() {
  controls.play()
  sounds.pressButton()
  timer.countUp()
  timer.handleBoxShadow()
})

buttonPauseWatch.addEventListener("click", function(){
  controls.pause()
  sounds.pressButton()
  timer.hold()
  timer.removeBoxShadow()
})

buttonStopWatch.addEventListener("click", function(){
  timer.hold()
  timer.updateDisplayWatch(0, 0, 0)
  controls.stop()
  sounds.pressButton()
  timer.removeBoxShadow()
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