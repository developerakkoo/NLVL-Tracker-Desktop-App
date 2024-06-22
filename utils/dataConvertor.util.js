const moment = require("moment");
const { client } = require("../config/googleSheet.config");
const { gsRun } = require("./googleSheet.util");




/**
 * This function converts the data from the API into a format that can be used by the gsRun function.
 *
 * @param {Object} client - The client object used for making API requests.
 * @param {Array} data - The data received from the API.
 * @param {number} funcNu - The function number.
 * @param {number} gsRun - The gsRun function.
 * @param {Object} moment - The moment object for handling date and time.
 * @returns {void}
 */
function convert1(data, funcNu) {
  try {
    const GetStock = data.map((item) => [
      item.SYMBOL,
      item.OPEN,
      item.HIGH,
      item.LOW,
      item.PREVCLOSE,
      item.LTP,
      item.CHNG,
      item.CHANGPercentage,
      item.VOLUME,
      item.VALUE,
      item.Date,
      moment().format("hh.mm"),
    ]);
    if (funcNu == 0) {
      gsRun(client, GetStock);
    }
    console.log("convert1: Data converted successfully:");
  } catch (error) {
    console.error("Error converting data:", error);
  }
}

module.exports = {
  convert1,
};
