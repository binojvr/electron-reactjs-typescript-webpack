const { app, BrowserWindow } = require('electron');
 
let win ;
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
 
  // and load the index.html of the app.
  win.loadFile('index.html');
}
 