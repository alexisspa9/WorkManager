'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        show: false,
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