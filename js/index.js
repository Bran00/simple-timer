//import
import Controls from "/js/controls.js"
import Timer from "/js/timer.js"
import Events from "/js/events.js"
import Sounds from "/js/sounds.js"

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
  buttonSoundOff,
  main
} from "/js/variables.js"

const sounds = Sounds()

const controls = Controls({
  buttonPlayTimer,
  buttonSetTimer,
  buttonPauseTimer,
  buttonStopTimer,
  buttonPlayWatch,
  buttonPauseWatch,
  buttonStopWatch
})

const timer = Timer({
  minutesDisplayTimer,
  secondsDisplayTimer,
  minutesDisplayWatch,
  secondsDisplayWatch,
  milisecondsDisplayWatch,
  stop: controls.stop,
  main
})

Events({
  controls,
  timer,
  sounds
})
