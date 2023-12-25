const { app, BrowserWindow } = require('electron')

app.commandLine.appendSwitch('disable-web-security');
let appWindow

function createWindow() {
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    },
  })

  // appWindow.loadFile('dist/electron-apppp/index.html');

  // appWindow.loadFile(path.join(__dirname, '/dist/electron-apppp/index.html'));

  const appPath = app.getAppPath();
  const indexPath = `${appPath}/dist/sakai-ng/index.html`;
  console.log('IndexPath:', indexPath);
  appWindow.loadURL(`file://${indexPath}`);

  


  //  Load the Angular app.
  //  appWindow.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, 'dist/electron-apppp/index.html'),
  //     protocol: 'file:',
  //     slashes: true,
  //   })
  // );

  // Open the DevTools.
  // appWindow.webContents.openDevTools();

  appWindow.on('closed', function () {
    appWindow = null
  })

  appWindow.webContents.on('did-fail-load', () => appWindow.loadURL(`file://${indexPath}`));
  // Handle navigation
  // appWindow.webContents.on('will-navigate', (event, url) => {
  //   event.preventDefault();
  //   appWindow.loadURL(url);
  // });

}


// app.whenReady().then(() => {
//   createWindow()
// })


app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (appWindow === null) createWindow();
});