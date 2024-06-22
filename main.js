const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const isMac = process.platform === "darwin";
const { App } = require("./index");
/**
 * This function handles the opening of a file.
 * It is an asynchronous function that calls the App function.
 *
 * @async
 * @function handleFileOpen
 * @returns {void}
 */
async function handleFileOpen() {
  App();
}

/**
 * This function initializes the main window of the application.
 * It creates a new BrowserWindow with specified options and loads the index.html file.
 *
 * @function Boot
 * @returns {void}
 */
function Boot() {
  const mainWindow = new BrowserWindow({
    title: "Nlvl Tracker", // The title displayed in the title bar of the window.
    width: 600, // The width of the window in pixels.
    height: 500, // The height of the window in pixels.
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // The path to the preload script.
    },
  });

  // Load the index.html file into the main window.
  mainWindow.loadFile(path.join(__dirname, "./views/index.html"));
}

/**
 * This function is a callback function that is executed when the application is ready.
 * It sets up the IPC communication for handling file open dialogs and initializes the main window.
 *
 * @function
 * @returns {void}
 */
app.whenReady().then(() => {
  // Register an IPC handler for the 'dialog:openFile' event.
  // When this event is received, the 'handleFileOpen' function will be called.
  ipcMain.handle("dialog:openFile", handleFileOpen);

  Boot(); // Initialize the main window of the application.

  // Listen for the 'activate' event.
  // This event is emitted when the application is activated
  app.on("activate", () => {
    // If no windows are open, initialize a new main window.
    if (BrowserWindow.getAllWindows().length === 0) {
      Boot();
    }
  });
});

/**
 * This function handles the closing of all windows when the application is quit.
 * It checks if the operating system is not macOS and then quits the application.
 *
 * @function closeAllWindows
 * @returns {void}
 */
app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit();
  }
});
