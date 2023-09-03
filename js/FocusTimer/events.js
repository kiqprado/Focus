import states from './states.js'
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js'
import { addMinutes, subtractMinutes } from './actions.js'
import * as toggleSound from './toggleMusic.js'

export function registerControls() {
  el.controls.addEventListener('click', e => {
    const action = e.target.dataset.action
    if (typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ''
  })

  el.minutes.onkeydown = e => /\d/.test(e.key)

  el.minutes.addEventListener('blur', e => {
    let time = e.currentTarget.textContent
    time = time > 60 ? 60 : time

    states.minutes = time
    states.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute('contenteditable')
  })
}

export function fiveMinutes() {
  el.plusFiveButton.addEventListener('click', () => addMinutes(5))
  el.minusFiveButton.addEventListener('click', () => subtractMinutes(5))
}

export function selectMusic() {
  el.btnForest.addEventListener('click', () => {
    actions.selectForest()
    toggleSound.forestSound()
  })

  el.btnFire.addEventListener('click', () => {
    actions.selectFire()
    toggleSound.fireSound()
  })

  el.btnRain.addEventListener('click', () => {
    actions.selectRain()
    toggleSound.rainSound()
  })

  el.btnStore.addEventListener('click', () => {
    actions.selectStore()
    toggleSound.storeSound()
  })
}
