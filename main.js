
const { app, BrowserWindow , ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      nodeIntegration:true,
      preload: path.join(__dirname, 'preload.js')
    },
    title: "Taskia",
    frame: false,
    backgroundColor: "#181818"
  })
  mainWindow.loadFile(path.join(__dirname, "src", "main.html"))
}

app.whenReady().then(() => {
  ipcMain.on('closeApp', () => app.quit())
  ipcMain.on('miniApp', () => BrowserWindow.getFocusedWindow().minimize())
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})