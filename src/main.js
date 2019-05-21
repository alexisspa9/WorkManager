'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 650,
        width: 1000,
        show: false,
        titleBarStyle: 'hiddenInset',
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.once('ready-to-show', ()=> {
        mainWindow.show();
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
});