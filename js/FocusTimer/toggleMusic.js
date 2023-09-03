import * as sounds from './sounds.js'
import * as el from './elements.js'

export function forestSound() {
  if (el.btnForest.classList.contains('selected')) {
    sounds.forestSound.play()

    sounds.campfireSound.pause()
    sounds.rainSound.pause()
    sounds.storeSound.pause()
  } else {
    sounds.forestSound.pause()
  }
}

export function fireSound() {
  if (el.btnFire.classList.contains('selected')) {
    sounds.campfireSound.play()

    sounds.forestSound.pause()
    sounds.rainSound.pause()
    sounds.storeSound.pause()
  } else {
    sounds.campfireSound.pause()
  }
}

export function rainSound() {
  if (el.btnRain.classList.contains('selected')) {
    sounds.rainSound.play()

    sounds.forestSound.pause()
    sounds.campfireSound.pause()
    sounds.storeSound.pause()
  } else {
    sounds.rainSound.pause()
  }
}

export function storeSound() {
  if (el.btnStore.classList.contains('selected')) {
    sounds.storeSound.play()

    sounds.forestSound.pause()
    sounds.campfireSound.pause()
    sounds.rainSound.pause()
  } else {
    sounds.storeSound.pause()
  }
}
