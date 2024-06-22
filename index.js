const { mainFunctionTimer } = require("./constant");
const { fetchYahooFinanceData } = require("./app");
const { convert1 } = require("./utils/dataConvertor.util");
const myInterval = setInterval(App, mainFunctionTimer);

/**
 * The main function that is called within an interval set in the mainFunctionTimer.
 * It logs a message to the console and calls the writeToSheet function.
 *
 * @returns {void}
 */
function App() {
    console.log("main");
    writeToSheet();
}

/**
 * This function fetches data from Yahoo Finance API, processes it, and writes it to a sheet.
 * It is called within an interval set in the main function.
 *
 * @returns {Promise<void>}
 */
async function writeToSheet() {
    // Fetch data from Yahoo Finance API
    let DATA = await fetchYahooFinanceData();

    // Check if there was an error fetching data
    if (DATA.error) {
        console.error("Error:", DATA.error);
        return;
    }

    try {
        console.log("18: covert Data For Sheet1");

        // Convert the fetched data to the required format for Sheet 1
        convert1(DATA, 0);

        // Update Sheet 1 with the converted data
        // ...
    } catch (error) {
        console.log(
            "43: Internet Speed Is SLOW Or Server Not Responding",
            error.message,
        );
    }
}

module.exports = { App };
