const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  closeApp: () => ipcRenderer.send('closeApp'),
  miniApp: () => ipcRenderer.send('miniApp')
})