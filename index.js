const { app, BrowserWindow, protocol } = require('electron')
const path = require('path')
const url = require('url')

console.log(app)

let win

function createWindow () {
  const WEB_FOLDER = 'dist'
  const PROTOCOL = 'file'

  win = new BrowserWindow({width: 800, height: 600})

  win.loadURL(url.format({
    pathname: 'index.html',
    protocol: PROTOCOL + ':',
    slashes: true
  }))

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })

  protocol.interceptFileProtocol('file', (request, callback) => {
    let url = request.url.substr(PROTOCOL.length + 1)
    url = path.join(__dirname, WEB_FOLDER, url)
    url = path.normalize(url)
    console.log(url)
    callback({ path: url })
  }, (err) => {
    if (err) console.error('Failed to register protocol')
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
