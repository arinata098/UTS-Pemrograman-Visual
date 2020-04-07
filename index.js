const electron = require("electron");

const {app, BrowserWindow, Menu, ipcMain} = electron;

let homeWindow;
let aboutWindow;
let CelsiusfWindow;
let CelsiusrWindow;
let FahrenheitcWindow;
let FahrenheitrWindow;
let ReamurcWindow;
let ReamurfWindow;


app.on("ready", ()=> {
    homeWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title: "Aplikasi dokter2"
    });

    homeWindow.loadURL(`file://${__dirname}/home.html`);
    homeWindow.on("close", () => {

        app.quit();
        homeWindow = null;
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

const CelsiusfWindowCreator = () => {
    CelsiusfWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title:"Celsius to Fahrenheit"
    });

    CelsiusfWindow.setMenu(null);
    CelsiusfWindow.loadURL(`file://${__dirname}/CTF.html`);
    CelsiusfWindow.on("close", () => (CelsiusfWindow = null));
};

const CelsiusrWindowCreator = () => {
    CelsiusrWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title:"Celsius to Reamur"
    });

    CelsiusrWindow.setMenu(null);
    CelsiusrWindow.loadURL(`file://${__dirname}/CTR.html`);
    CelsiusrWindow.on("close", () => (CelsiusrWindow = null));
};

const FahrenheitcWindowCreator = () => {
    FahrenheitcWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title:"Fahrenheit to Celsius"
    });

    FahrenheitcWindow.setMenu(null);
    FahrenheitcWindow.loadURL(`file://${__dirname}/FTC.html`);
    FahrenheitcWindow.on("close", () => (FahrenheitcWindow = null));
};

const FahrenheitrWindowCreator = () => {
    FahrenheitrWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title:"Fahrenheit to Reamur"
    });

    FahrenheitrWindow.setMenu(null);
    FahrenheitrWindow.loadURL(`file://${__dirname}/FTR.html`);
    FahrenheitrWindow.on("close", () => (FahrenheitrWindow = null));
};

const ReamurcWindowCreator = () => {
    ReamurcWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title:"Reamur to Celsius"
    });

    ReamurcWindow.setMenu(null);
    ReamurcWindow.loadURL(`file://${__dirname}/RTC.html`);
    ReamurcWindow.on("close", () => (ReamurcWindow = null));
};

const ReamurfWindowCreator = () => {
    ReamurfWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title:"Reamur to Fahrenheit"
    });

    ReamurfWindow.setMenu(null);
    ReamurfWindow.loadURL(`file://${__dirname}/RTF.html`);
    ReamurfWindow.on("close", () => (ReamurfWindow = null));
};

const aboutWindowCreator = () => {
    aboutWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title:"About"
    });

    aboutWindow.setMenu(null);
    aboutWindow.loadURL(`file://${__dirname}/about.html`);
    aboutWindow.on("close", () => (aboutWindow = null));
};

ipcMain.on("appointment:create", (event, appointment) => {
    console.log(appointment);
});

const menuTemplate = [
    {
        label: "File",
        
        submenu: [
            {

                label: "About", 
                    click() {
                        aboutWindowCreator();
                    }
            },
            {
                label: "Quit",
                accelerator: process.platform === "darwin" ? "Command + Q" : "Ctrl + Q",
                click() {
                    app.quit();
                }
            }    
        ]
    },

    {
        label: "Convert",
        submenu: [
            {
                label: "Celsius To Fahrenheit",

                click() {
                    CelsiusfWindowCreator();
                }
            },
            {
                label: "Fahrenheit To Celsius",

                click() {
                    FahrenheitcWindowCreator();
                }
            },
            {
                label: "Celsius To Reamur",

                click() {
                    CelsiusrWindowCreator();
                }
            },
            {
                label: "Reamur To Celsius",

                click() {
                    ReamurcWindowCreator();
                }
            },
            {
                label: "Fahrenheit To Reamur",

                click() {
                    FahrenheitrWindowCreator();
                }
            },
            {
                label: "Reamur To Fahrenheit",

                click() {
                    ReamurfWindowCreator();
                }
            }
            
        ]
    },

    {

        label: "View",
        submenu: [{role: "Reload"}, {role: "toggledevtolls"}]
    },

]