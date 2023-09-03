import { openTablePT, openTableEN } from './tableHelp.js'

const helpBtn = document.getElementById('help')

const Help = {
  openHelper: document.getElementById('popup'),
  closeHelper: document.getElementById('popupClose'),
  openHelpEN: document.getElementById('helpEN'),
  openHelpPT: document.getElementById('helpPT'),

  open() {
    Help.openHelper.classList.add('open')
  },
  close() {
    Help.openHelper.classList.remove('open')
  }
}

helpBtn.onclick = () => {
  Help.open()
}

Help.openHelpEN.addEventListener('click', () => {
  openTableEN()
})

Help.openHelpPT.addEventListener('click', () => {
  openTablePT()
})

Help.closeHelper.addEventListener('click', () => {
  Help.close()
})

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    Help.close()
  }
})
