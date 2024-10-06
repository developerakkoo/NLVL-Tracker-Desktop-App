const { google } = require("googleapis");
const { notificationSpreadsheetId } = require("../secret.json");
const { notify } = require("./notification.util");
const { client } = require("../config/googleSheet.config");

/**
 * Fetches user-entered data from a specified Google Sheets range.
 *
 * @param {google.auth.OAuth2Client} client - The authenticated Google Sheets client.
 * @param {string} notificationSpreadsheetId - The ID of the spreadsheet containing the data.
 * @param {string} range - The range of cells to retrieve data from.
 * @returns {Promise<Array<Array<any>>|undefined>} - A promise that resolves to the retrieved data, or undefined if an error occurs.
 */
async function fetchUserEnteredDataFromSheet(
    client,
    notificationSpreadsheetId,
    range,
) {
    try {
        const gsApi = google.sheets({ version: "v4", auth: client });

        // Define the options for retrieving data
        const getOption = {
            spreadsheetId: notificationSpreadsheetId, // notificationSpreadsheetId
            range, // The range to retrieve data from
        };

        // Retrieve data from the specified sheet and range
        let res = await gsApi.spreadsheets.values.get(getOption);
        return res.data.values;
    } catch (error) {
        console.log("ERROR While Retrieving Data", error);
    }
}

/**
 * This function is responsible for fetching and processing data from a specified Google Sheets range.
 * It checks if the data is empty or contains only empty strings/falsy values.
 * If the data is valid, it sends a notification.
 *
 * @returns {Promise<void>} - A promise that resolves when the function completes.
 */
async function notification_sheet() {
    try {
        // Assuming client and notificationSpreadsheetId are defined and valid
        const data = await fetchUserEnteredDataFromSheet(
            client,
            notificationSpreadsheetId,
            "notification_sheet!A1:C5",
        );

        // Check if data is undefined or not an array
        if (!Array.isArray(data)) {
            console.log("IsArray:empty",data);
            return;
        }

        // Check if any subarray is empty or contains only empty strings/falsy values
        let temp = [];
        data.forEach((array) => {
            if (array.length === 0) {
                temp.push(0);
            } else {
                temp.push(1);
            }
        });
        let isAnySubarrayEmpty = temp.includes(1);

        // Print "empty" if any subarray is empty, otherwise print the array
        if (isAnySubarrayEmpty === false) {
            console.log("isAnySubarrayEmpty:empty");
        } else {
            notify("Notification Sheet Data Updated");
            console.log("data is present", data);
        }
    } catch (error) {
        console.error("Error in notification_sheet function:", error);
    }
}

module.exports = { notification_sheet };
