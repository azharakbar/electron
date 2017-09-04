'use strict'

const {app, BrowserWindow} = require('electron')
// var app = require('app')
const path = require('path')
const url = require('url')

var win ;

require('electron-reload')(__dirname)

function createWindow(){
	win = new BrowserWindow({
		width : 1450,
		height : 768,
		icon : __dirname + '/img/icon.png',
		// frame : false,
		// fullScreen : true,
		show : false
	})

	// win.setFullScreenable(true)
	win.setMaximizable(false)
	// win.setFullScreen(true)

	win.once('ready-to-show', () => {
	  win.show()
	})

	win.setMenu(null)

	win.loadURL("http://localhost:2016/")

	// win.webContents.openDevTools()

	win.on('closed' , ()=>{
		win = null 
	})
}

app.on('ready' , createWindow )

app.on('window-all-closed' , ()=>{
	if ( process.platform !== 'darwin'){
		app.quit()
	}
})