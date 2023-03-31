export default function () {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://www.bensound.com/royalty-free-music/track/dubstep")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
  
  bgAudio.loop = true
  
  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }
return {
  pressButton,
  timeEnd,
  bgAudio
}
}
