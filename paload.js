/**
 * Exposes Electron's IPCRenderer and contextBridge to the main world.
 * This allows communication between the renderer process (web page) and the main process.
 *
 * @module electronAPI
 */

const { contextBridge, ipcRenderer } = require("electron");

/**
 * Exposes a function to open a file dialog in the main process.
 *
 * @function openFile
 * @returns {Promise<string[]>} - A promise that resolves to an array of file paths selected by the user.
 *
 * @example
 * // In the renderer process
 * const { electronAPI } = window;
 * electronAPI.openFile()
 *   .then(filePaths => {
 *     console.log('Selected files:', filePaths);
 *   })
 *   .catch(err => {
 *     console.error('Error opening file:', err);
 *   });
 */
contextBridge.exposeInMainWorld("electronAPI", {
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
});
