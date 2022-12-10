export default function Controls({
  buttonPlay,
  buttonSetTimer,
  buttonPause,
  buttonStop
}) {

function stop() {
  buttonPlay.classList.remove("hide")
  buttonSetTimer.classList.remove("hide")
  buttonPause.classList.add("hide")
  buttonStop.classList.add("hide")
}

function play() {
  buttonPlay.classList.add("hide")
  buttonSetTimer.classList.add("hide")
  buttonPause.classList.remove("hide")
  buttonStop.classList.remove("hide")
}

function pause() {
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
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