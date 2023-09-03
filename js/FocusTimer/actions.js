import state from './states.js'
import * as timer from './timer.js'
import * as el from './elements.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countDown()
}

export function set() {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function addMinutes(minutesToAdd) {
  const currentMinutes = Number(el.minutes.textContent)

  let newMinutes = currentMinutes + minutesToAdd

  if (newMinutes > 60) {
    newMinutes = 60
  }

  timer.updateDisplay(newMinutes)
}

export function subtractMinutes(minutesToSubtract) {
  const currentMinutes = Number(el.minutes.textContent)

  const newMinutes = Math.max(0, currentMinutes - minutesToSubtract)

  timer.updateDisplay(newMinutes)
}

export function selectForest() {
  el.btnForest.classList.toggle('selected')

  if (el.btnForest.classList.contains('selected')) {
    el.btnFire.classList.remove('selected')
    el.btnRain.classList.remove('selected')
    el.btnStore.classList.remove('selected')
  }
}

export function selectFire() {
  el.btnFire.classList.toggle('selected')

  if (el.btnFire.classList.contains('selected')) {
    el.btnForest.classList.remove('selected')
    el.btnRain.classList.remove('selected')
    el.btnStore.classList.remove('selected')
  }
}

export function selectRain() {
  el.btnRain.classList.toggle('selected')

  if (el.btnRain.classList.contains('selected')) {
    el.btnForest.classList.remove('selected')
    el.btnFire.classList.remove('selected')
    el.btnStore.classList.remove('selected')
  }
}

export function selectStore() {
  el.btnStore.classList.toggle('selected')

  if (el.btnStore.classList.contains('selected')) {
    el.btnForest.classList.remove('selected')
    el.btnFire.classList.remove('selected')
    el.btnRain.classList.remove('selected')
  }
}
