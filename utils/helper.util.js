require("dotenv").config();
const axios = require("axios");
const moment = require("moment");

/**
 * Fetches stock data from Yahoo Finance using RapidAPI.
 *
 * @param {string[]} symbols - An array of stock symbols to fetch data for.
 * @returns {Promise<object>} - A promise that resolves to the fetched data or an error object.
 * @throws Will throw an error if the request fails.
 */
exports.getStokesDataFromYahooFin = async (symbols) => {
    const options = {
        method: "GET",
        url: process.env.RAPIDAPI_URL,
        params: {
            region: "IN",
            symbols,
        },
        headers: {
            "x-rapidapi-key": process.env.RAPIDAPI_KEY,
            "x-rapidapi-host": process.env.RAPIDAPI_HOST,
        },
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error("Error fetching data from Yahoo Finance:", error.message);
        return { error: error.message };
    }
};

/**
 * Extracts required fields from the fetched stock data.
 *
 * @param {object[]} dataArray - An array of fetched stock data objects.
 * @returns {object[]} - An array of objects containing the required fields.
 *
 * @throws Will throw an error if the input dataArray is not an array or if any object in the array does not contain the required fields.
 */
exports.extractRequiredFields = async (dataArray) => {
    // Check if dataArray is an array
    if (!Array.isArray(dataArray)) {
        throw new Error("Input dataArray must be an array");
    }

    //   console.log(dataArray);
    // Map through the dataArray and extract required fields
    return await dataArray.map((data) => {
        // Return an object with the required fields
        return {
            SYMBOL: data.shortName,
            OPEN: data.regularMarketOpen,
            HIGH: data.regularMarketDayHigh,
            LOW: data.regularMarketDayLow,
            PREVCLOSE: data.regularMarketPreviousClose,
            LTP: data.regularMarketPrice, // This is LTP
            CHNG: data.regularMarketChange,
            CHANGPercentage: data.regularMarketChangePercent,
            VOLUME: data.regularMarketVolume,
            VALUE: data.regularMarketPreviousClose, // 'value' is set to 'regularMarketPreviousClose'
            Date: moment().format("DD-MM-YY"),
            Time: moment().format("hh.mm"),
        };
    });
};
