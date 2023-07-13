const {app,BrowserWindow,ipcMain, dialog} = require('electron');
const path = require('path');
const isMac = process.platform === 'darwin';
const  {main} = require('./app');
const notifier = require('node-notifier');
async function handleFileOpen () {
    notifier.notify({
        appName: "com.NlvlTracker.id", 
        title: 'Nlvl Tracker',
        message: 'Data Collection Started'
        });
        main()
    }

function Boot(){
    const mainWindow = new BrowserWindow({
        title:'Nlvl Tracker',
        width:600,
        height:500,
        webPreferences: {
            preload: path.join(__dirname, 'paload.js')
        }
    });
    mainWindow.loadFile(path.join(__dirname,'./views/index.html'));
}

app.whenReady().then(() => {
    ipcMain.handle('dialog:openFile', handleFileOpen)
    Boot();
    app.on('activate',()=>{
        if (BrowserWindow.getAllWindows().length ===0) {
            Boot()
        }
    })
});


app.on('window-all-closed',() =>{
    if (!isMac) {
        app.quit()
    }
})