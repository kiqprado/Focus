const openPT = document.getElementById('popupTablePT')
const openEN = document.getElementById('popupTableEN')

const tableClosePT = document.querySelector('.tableClosePT')
const tableCloseEN = document.querySelector('.tableCloseEN')

export function openTablePT() {
  openPT.classList.add('open')
}

export function openTableEN() {
  openEN.classList.add('open')
}

tableClosePT.addEventListener('click', () => {
  openPT.classList.remove('open')
})

tableCloseEN.addEventListener('click', () => {
  openEN.classList.remove('open')
})

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    openEN.classList.remove('open')
    openPT.classList.remove('open')
  }
})
