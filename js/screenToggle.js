const myDocument = document.documentElement

let fullScreenToggle = document.getElementById('fullScreen')

fullScreenToggle.addEventListener('click', () => {
  if (fullScreenToggle.textContent == 'Tela cheia') {
    if (myDocument.requestFullscreen) {
      myDocument.requestFullscreen()
    } else if (myDocument.msRequestFullscreen) {
      myDocument.msRequestFullscreen()
    } else if (myDocument.mozRequestFullscreen) {
      myDocument.mozRequestFullscreen()
    } else if (myDocument.webkitRequestFullscreen) {
      myDocument.webkitRequestFullscreen()
    }

    fullScreenToggle.textContent = 'Sair'
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.mozExitFullscreen) {
      document.mozExitFullscreen()
    }
    fullScreenToggle.textContent = 'Tela cheia'
  }
})

fullScreenToggle.addEventListener('keydown', e => {
  if (e.key === 'escape') {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.mozExitFullscreen) {
      document.mozExitFullscreen()
    }
    fullScreenToggle.textContent = 'Tela cheia'
  }
})
