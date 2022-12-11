export default function Controls({
  buttonPlayTimer,
  buttonSetTimer,
  buttonPauseTimer,
  buttonStopTimer,
  buttonPlayWatch,
  buttonPauseWatch,
  buttonStopWatch
}) {

function stop() {
  buttonPlayTimer.classList.remove("hide")
  buttonSetTimer.classList.remove("hide")
  buttonPauseTimer.classList.add("hide")
  buttonStopTimer.classList.add("hide")
  
  buttonPlayWatch.classList.remove("hide")
  buttonPauseWatch.classList.add("hide")
  buttonStopWatch.classList.add("hide")
}

function play() {
  buttonPlayTimer.classList.add("hide")
  buttonSetTimer.classList.add("hide")
  buttonPauseTimer.classList.remove("hide")
  buttonStopTimer.classList.remove("hide")
  
  buttonPlayWatch.classList.add("hide")
  buttonPauseWatch.classList.remove("hide")
  buttonStopWatch.classList.remove("hide")
}

function pause() {
  buttonPlayTimer.classList.remove("hide")
  buttonPauseTimer.classList.add("hide")
  
  buttonPlayWatch.classList.remove("hide")
  buttonPauseWatch.classList.add("hide")
}

function getMinutes() {
  let newMinutes = prompt('Quantos minutos?')
  if (!newMinutes) {
    return false
  }
  return newMinutes
}
return {
  stop,
  play,
  pause,
  getMinutes
}
}