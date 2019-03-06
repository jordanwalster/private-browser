const electron = require('electron')

const {app, BrowserWindow} = require('electron');

app.setName('Disposable Browserino')

let mainWindow


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        width: 2000,
        height: 1168,
        titleBarStyle: 'hiddenInset'
        
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`)
  });

