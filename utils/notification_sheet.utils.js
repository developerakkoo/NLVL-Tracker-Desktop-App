const { google } = require("googleapis");
const { notificationSpreadsheetId } = require("../secret.json");
const { notify } = require("./notification.util");
const { client } = require("../config/googleSheet.config");

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
        // notify("Data Retrieved Successfully");

        // You can process stocksData as needed here
    } catch (error) {
        console.log("ERROR While Retrieving Data", error);
    }
}

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
            console.log("empty");
            return;
        }
        // Check if any subarray is empty
        let isAnySubarrayEmpty = data.some(
            (subarray) => !Array.isArray(subarray) || subarray.length === 0,
        );

        // Print "empty" if any subarray is empty, otherwise print the array
        if (isAnySubarrayEmpty) {
            console.log("empty");
        } else {
            notify("Notification Sheet Data Updated")
            console.log("data is present", data);
        }
    } catch (error) {
        console.error("Error in userInput function:", error);
    }
}

module.exports = { notification_sheet };
