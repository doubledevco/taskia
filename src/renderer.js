const closeApp = document.getElementById('closeBtn')
const miniApp = document.getElementById('miniBtn')

closeApp.addEventListener('click', () => {
    window.electronAPI.closeApp()
})

miniApp.addEventListener('click', () => {
    window.electronAPI.miniApp()
})