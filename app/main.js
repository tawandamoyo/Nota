const { app, BrowserWindow } = require('electron');

let win = null;
function newWindow () {
    win = new BrowserWindow();
    win.loadFile("app/index.html")
}

app.whenReady().then(() => {
    newWindow();
})