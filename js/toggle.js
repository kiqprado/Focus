let lightMode = true

const modeBtn = document.getElementById('toggle-mode')

modeBtn.addEventListener('click', e => {
  document.documentElement.classList.toggle('dark')

  const mode = lightMode ? 'dark' : 'light'
  e.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`

  lightMode = !lightMode
})
