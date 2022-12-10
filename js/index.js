
import Controls from "/js/controls.js"
import Timer from "/js/timer.js"
import Events from "/js/events.js"
import Sounds from "/js/sounds.js"

import { 
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSetTimer,
  main
} from "/js/variables.js"

const sounds = Sounds()

const controls = Controls({
  buttonPlay,
  buttonSetTimer,
  buttonPause,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  stop: controls.stop,
  main
})

Events({
  controls,
  timer,
  sounds
})
