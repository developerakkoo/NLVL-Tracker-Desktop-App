const { client } = require("./config/googleSheet.config");


/**
 * Converts the data received from the API into a format suitable for the database.
 *
 * @param {Object} data - The data received from the API.
 * @param {number} funcNu - The function number to determine which function to run.
 * @param {Object} client - The google sheet client.
 * @param {Function} gsRun2 - The function to run if funcNu is 1.
 * @param {Function} gsRun4 - The function to run if funcNu is 2.
 *
 * @returns {void}
 */
exports.covert = (data, funcNu) => {
  try {
    let GetStock = [];
    console.log("395: Data converted >>>");
    GetStock.push([
      data[0].SYMBOL,
      data[0].LTP,
      data[0].CHNG,
      data[0].CHANGPercentage,
      data[0].OPEN,
      data[0].PREVCLOSE,
      data[0].HIGH,
      data[0].LOW,
      data[0].VOLUME,
      data[0].VALUE,
      data[0].Date,
      data[0].Time,
    ]);
    GetStock.push([
      data[1].SYMBOL,
      data[1].LTP,
      data[1].CHNG,
      data[1].CHANGPercentage,
      data[1].OPEN,
      data[1].PREVCLOSE,
      data[1].HIGH,
      data[1].LOW,
      data[1].VOLUME,
      data[1].VALUE,
      data[1].Date,
      data[1].Time,
    ]);
    GetStock.push([
      data[2].SYMBOL,
      data[2].LTP,
      data[2].CHNG,
      data[2].CHANGPercentage,
      data[2].OPEN,
      data[2].PREVCLOSE,
      data[2].HIGH,
      data[2].LOW,
      data[2].VOLUME,
      data[2].VALUE,
      data[2].Date,
      data[2].Time,
    ]);
    GetStock.push([
      data[3].SYMBOL,
      data[3].LTP,
      data[3].CHNG,
      data[3].CHANGPercentage,
      data[3].OPEN,
      data[3].PREVCLOSE,
      data[3].HIGH,
      data[3].LOW,
      data[3].VOLUME,
      data[3].VALUE,
      data[3].Date,
      data[3].Time,
    ]);
    GetStock.push([
      data[4].SYMBOL,
      data[4].LTP,
      data[4].CHNG,
      data[4].CHANGPercentage,
      data[4].OPEN,
      data[4].PREVCLOSE,
      data[4].HIGH,
      data[4].LOW,
      data[4].VOLUME,
      data[4].VALUE,
      data[4].Date,
      data[4].Time,
    ]);
    GetStock.push([
      data[5].SYMBOL,
      data[5].LTP,
      data[5].CHNG,
      data[5].CHANGPercentage,
      data[5].OPEN,
      data[5].PREVCLOSE,
      data[5].HIGH,
      data[5].LOW,
      data[5].VOLUME,
      data[5].VALUE,
      data[5].Date,
      data[5].Time,
    ]);
    GetStock.push([
      data[6].SYMBOL,
      data[6].LTP,
      data[6].CHNG,
      data[6].CHANGPercentage,
      data[6].OPEN,
      data[6].PREVCLOSE,
      data[6].HIGH,
      data[6].LOW,
      data[6].VOLUME,
      data[6].VALUE,
      data[6].Date,
      data[6].Time,
    ]);
    GetStock.push([
      data[7].SYMBOL,
      data[7].LTP,
      data[7].CHNG,
      data[7].CHANGPercentage,
      data[7].OPEN,
      data[7].PREVCLOSE,
      data[7].HIGH,
      data[7].LOW,
      data[7].VOLUME,
      data[7].VALUE,
      data[7].Date,
      data[7].Time,
    ]);
    GetStock.push([
      data[8].SYMBOL,
      data[8].LTP,
      data[8].CHNG,
      data[8].CHANGPercentage,
      data[8].OPEN,
      data[8].PREVCLOSE,
      data[8].HIGH,
      data[8].LOW,
      data[8].VOLUME,
      data[8].VALUE,
      data[8].Date,
      data[8].Time,
    ]);
    GetStock.push([
      data[9].SYMBOL,
      data[9].LTP,
      data[9].CHNG,
      data[9].CHANGPercentage,
      data[9].OPEN,
      data[9].PREVCLOSE,
      data[9].HIGH,
      data[9].LOW,
      data[9].VOLUME,
      data[9].VALUE,
      data[9].Date,
      data[9].Time,
    ]);
    GetStock.push([
      data[10].SYMBOL,
      data[10].LTP,
      data[10].CHNG,
      data[10].CHANGPercentage,
      data[10].OPEN,
      data[10].PREVCLOSE,
      data[10].HIGH,
      data[10].LOW,
      data[10].VOLUME,
      data[10].VALUE,
      data[10].Date,
      data[10].Time,
    ]);
    GetStock.push([
      data[11].SYMBOL,
      data[11].LTP,
      data[11].CHNG,
      data[11].CHANGPercentage,
      data[11].OPEN,
      data[11].PREVCLOSE,
      data[11].HIGH,
      data[11].LOW,
      data[11].VOLUME,
      data[11].VALUE,
      data[11].Date,
      data[11].Time,
    ]);
    GetStock.push([
      data[12].SYMBOL,
      data[12].LTP,
      data[12].CHNG,
      data[12].CHANGPercentage,
      data[12].OPEN,
      data[12].PREVCLOSE,
      data[12].HIGH,
      data[12].LOW,
      data[12].VOLUME,
      data[12].VALUE,
      data[12].Date,
      data[12].Time,
    ]);
    GetStock.push([
      data[13].SYMBOL,
      data[13].LTP,
      data[13].CHNG,
      data[13].CHANGPercentage,
      data[13].OPEN,
      data[13].PREVCLOSE,
      data[13].HIGH,
      data[13].LOW,
      data[13].VOLUME,
      data[13].VALUE,
      data[13].Date,
      data[13].Time,
    ]);
    GetStock.push([
      data[14].SYMBOL,
      data[14].LTP,
      data[14].CHNG,
      data[14].CHANGPercentage,
      data[14].OPEN,
      data[14].PREVCLOSE,
      data[14].HIGH,
      data[14].LOW,
      data[14].VOLUME,
      data[14].VALUE,
      data[14].Date,
      data[14].Time,
    ]);
    GetStock.push([
      data[15].SYMBOL,
      data[15].LTP,
      data[15].CHNG,
      data[15].CHANGPercentage,
      data[15].OPEN,
      data[15].PREVCLOSE,
      data[15].HIGH,
      data[15].LOW,
      data[15].VOLUME,
      data[15].VALUE,
      data[15].Date,
      data[15].Time,
    ]);
    GetStock.push([
      data[16].SYMBOL,
      data[16].LTP,
      data[16].CHNG,
      data[16].CHANGPercentage,
      data[16].OPEN,
      data[16].PREVCLOSE,
      data[16].HIGH,
      data[16].LOW,
      data[16].VOLUME,
      data[16].VALUE,
      data[16].Date,
      data[16].Time,
    ]);
    GetStock.push([
      data[17].SYMBOL,
      data[17].LTP,
      data[17].CHNG,
      data[17].CHANGPercentage,
      data[17].OPEN,
      data[17].PREVCLOSE,
      data[17].HIGH,
      data[17].LOW,
      data[17].VOLUME,
      data[17].VALUE,
      data[17].Date,
      data[17].Time,
    ]);
    GetStock.push([
      data[18].SYMBOL,
      data[18].LTP,
      data[18].CHNG,
      data[18].CHANGPercentage,
      data[18].OPEN,
      data[18].PREVCLOSE,
      data[18].HIGH,
      data[18].LOW,
      data[18].VOLUME,
      data[18].VALUE,
      data[18].Date,
      data[18].Time,
    ]);
    GetStock.push([
      data[19].SYMBOL,
      data[19].LTP,
      data[19].CHNG,
      data[19].CHANGPercentage,
      data[19].OPEN,
      data[19].PREVCLOSE,
      data[19].HIGH,
      data[19].LOW,
      data[19].VOLUME,
      data[19].VALUE,
      data[19].Date,
      data[19].Time,
    ]);
    GetStock.push([
      data[20].SYMBOL,
      data[20].LTP,
      data[20].CHNG,
      data[20].CHANGPercentage,
      data[20].OPEN,
      data[20].PREVCLOSE,
      data[20].HIGH,
      data[20].LOW,
      data[20].VOLUME,
      data[20].VALUE,
      data[20].Date,
      data[20].Time,
    ]);
    GetStock.push([
      data[21].SYMBOL,
      data[21].LTP,
      data[21].CHNG,
      data[21].CHANGPercentage,
      data[21].OPEN,
      data[21].PREVCLOSE,
      data[21].HIGH,
      data[21].LOW,
      data[21].VOLUME,
      data[21].VALUE,
      data[21].Date,
      data[21].Time,
    ]);
    GetStock.push([
      data[22].SYMBOL,
      data[22].LTP,
      data[22].CHNG,
      data[22].CHANGPercentage,
      data[22].OPEN,
      data[22].PREVCLOSE,
      data[22].HIGH,
      data[22].LOW,
      data[22].VOLUME,
      data[22].VALUE,
      data[22].Date,
      data[22].Time,
    ]);
    GetStock.push([
      data[23].SYMBOL,
      data[23].LTP,
      data[23].CHNG,
      data[23].CHANGPercentage,
      data[23].OPEN,
      data[23].PREVCLOSE,
      data[23].HIGH,
      data[23].LOW,
      data[23].VOLUME,
      data[23].VALUE,
      data[23].Date,
      data[23].Time,
    ]);
    GetStock.push([
      data[24].SYMBOL,
      data[24].LTP,
      data[24].CHNG,
      data[24].CHANGPercentage,
      data[24].OPEN,
      data[24].PREVCLOSE,
      data[24].HIGH,
      data[24].LOW,
      data[24].VOLUME,
      data[24].VALUE,
      data[24].Date,
      data[24].Time,
    ]);
    GetStock.push([
      data[25].SYMBOL,
      data[25].LTP,
      data[25].CHNG,
      data[25].CHANGPercentage,
      data[25].OPEN,
      data[25].PREVCLOSE,
      data[25].HIGH,
      data[25].LOW,
      data[25].VOLUME,
      data[25].VALUE,
      data[25].Date,
      data[25].Time,
    ]);
    GetStock.push([
      data[26].SYMBOL,
      data[26].LTP,
      data[26].CHNG,
      data[26].CHANGPercentage,
      data[26].OPEN,
      data[26].PREVCLOSE,
      data[26].HIGH,
      data[26].LOW,
      data[26].VOLUME,
      data[26].VALUE,
      data[26].Date,
      data[26].Time,
    ]);
    GetStock.push([
      data[27].SYMBOL,
      data[27].LTP,
      data[27].CHNG,
      data[27].CHANGPercentage,
      data[27].OPEN,
      data[27].PREVCLOSE,
      data[27].HIGH,
      data[27].LOW,
      data[27].VOLUME,
      data[27].VALUE,
      data[27].Date,
      data[27].Time,
    ]);
    GetStock.push([
      data[28].SYMBOL,
      data[28].LTP,
      data[28].CHNG,
      data[28].CHANGPercentage,
      data[28].OPEN,
      data[28].PREVCLOSE,
      data[28].HIGH,
      data[28].LOW,
      data[28].VOLUME,
      data[28].VALUE,
      data[28].Date,
      data[28].Time,
    ]);
    GetStock.push([
      data[29].SYMBOL,
      data[29].LTP,
      data[29].CHNG,
      data[29].CHANGPercentage,
      data[29].OPEN,
      data[29].PREVCLOSE,
      data[29].HIGH,
      data[29].LOW,
      data[29].VOLUME,
      data[29].VALUE,
      data[29].Date,
      data[29].Time,
    ]);
    GetStock.push([
      data[30].SYMBOL,
      data[30].LTP,
      data[30].CHNG,
      data[30].CHANGPercentage,
      data[30].OPEN,
      data[30].PREVCLOSE,
      data[30].HIGH,
      data[30].LOW,
      data[30].VOLUME,
      data[30].VALUE,
      data[30].Date,
      data[30].Time,
    ]);
    GetStock.push([
      data[31].SYMBOL,
      data[31].LTP,
      data[31].CHNG,
      data[31].CHANGPercentage,
      data[31].OPEN,
      data[31].PREVCLOSE,
      data[31].HIGH,
      data[31].LOW,
      data[31].VOLUME,
      data[31].VALUE,
      data[31].Date,
      data[31].Time,
    ]);
    GetStock.push([
      data[32].SYMBOL,
      data[32].LTP,
      data[32].CHNG,
      data[32].CHANGPercentage,
      data[32].OPEN,
      data[32].PREVCLOSE,
      data[32].HIGH,
      data[32].LOW,
      data[32].VOLUME,
      data[32].VALUE,
      data[32].Date,
      data[32].Time,
    ]);
    GetStock.push([
      data[33].SYMBOL,
      data[33].LTP,
      data[33].CHNG,
      data[33].CHANGPercentage,
      data[33].OPEN,
      data[33].PREVCLOSE,
      data[33].HIGH,
      data[33].LOW,
      data[33].VOLUME,
      data[33].VALUE,
      data[33].Date,
      data[33].Time,
    ]);
    GetStock.push([
      data[34].SYMBOL,
      data[34].LTP,
      data[34].CHNG,
      data[34].CHANGPercentage,
      data[34].OPEN,
      data[34].PREVCLOSE,
      data[34].HIGH,
      data[34].LOW,
      data[34].VOLUME,
      data[34].VALUE,
      data[34].Date,
      data[34].Time,
    ]);
    GetStock.push([
      data[35].SYMBOL,
      data[35].LTP,
      data[35].CHNG,
      data[35].CHANGPercentage,
      data[35].OPEN,
      data[35].PREVCLOSE,
      data[35].HIGH,
      data[35].LOW,
      data[35].VOLUME,
      data[35].VALUE,
      data[35].Date,
      data[35].Time,
    ]);
    GetStock.push([
      data[36].SYMBOL,
      data[36].LTP,
      data[36].CHNG,
      data[36].CHANGPercentage,
      data[36].OPEN,
      data[36].PREVCLOSE,
      data[36].HIGH,
      data[36].LOW,
      data[36].VOLUME,
      data[36].VALUE,
      data[36].Date,
      data[36].Time,
    ]);
    GetStock.push([
      data[37].SYMBOL,
      data[37].LTP,
      data[37].CHNG,
      data[37].CHANGPercentage,
      data[37].OPEN,
      data[37].PREVCLOSE,
      data[37].HIGH,
      data[37].LOW,
      data[37].VOLUME,
      data[37].VALUE,
      data[37].Date,
      data[37].Time,
    ]);
    GetStock.push([
      data[38].SYMBOL,
      data[38].LTP,
      data[38].CHNG,
      data[38].CHANGPercentage,
      data[38].OPEN,
      data[38].PREVCLOSE,
      data[38].HIGH,
      data[38].LOW,
      data[38].VOLUME,
      data[38].VALUE,
      data[38].Date,
      data[38].Time,
    ]);
    GetStock.push([
      data[39].SYMBOL,
      data[39].LTP,
      data[39].CHNG,
      data[39].CHANGPercentage,
      data[39].OPEN,
      data[39].PREVCLOSE,
      data[39].HIGH,
      data[39].LOW,
      data[39].VOLUME,
      data[39].VALUE,
      data[39].Date,
      data[39].Time,
    ]);
    GetStock.push([
      data[40].SYMBOL,
      data[40].LTP,
      data[40].CHNG,
      data[40].CHANGPercentage,
      data[40].OPEN,
      data[40].PREVCLOSE,
      data[40].HIGH,
      data[40].LOW,
      data[40].VOLUME,
      data[40].VALUE,
      data[40].Date,
      data[40].Time,
    ]);
    GetStock.push([
      data[41].SYMBOL,
      data[41].LTP,
      data[41].CHNG,
      data[41].CHANGPercentage,
      data[41].OPEN,
      data[41].PREVCLOSE,
      data[41].HIGH,
      data[41].LOW,
      data[41].VOLUME,
      data[41].VALUE,
      data[41].Date,
      data[41].Time,
    ]);
    GetStock.push([
      data[42].SYMBOL,
      data[42].LTP,
      data[42].CHNG,
      data[42].CHANGPercentage,
      data[42].OPEN,
      data[42].PREVCLOSE,
      data[42].HIGH,
      data[42].LOW,
      data[42].VOLUME,
      data[42].VALUE,
      data[42].Date,
      data[42].Time,
    ]);
    GetStock.push([
      data[43].SYMBOL,
      data[43].LTP,
      data[43].CHNG,
      data[43].CHANGPercentage,
      data[43].OPEN,
      data[43].PREVCLOSE,
      data[43].HIGH,
      data[43].LOW,
      data[43].VOLUME,
      data[43].VALUE,
      data[43].Date,
      data[43].Time,
    ]);
    GetStock.push([
      data[44].SYMBOL,
      data[44].LTP,
      data[44].CHNG,
      data[44].CHANGPercentage,
      data[44].OPEN,
      data[44].PREVCLOSE,
      data[44].HIGH,
      data[44].LOW,
      data[44].VOLUME,
      data[44].VALUE,
      data[44].Date,
      data[44].Time,
    ]);
    GetStock.push([
      data[45].SYMBOL,
      data[45].LTP,
      data[45].CHNG,
      data[45].CHANGPercentage,
      data[45].OPEN,
      data[45].PREVCLOSE,
      data[45].HIGH,
      data[45].LOW,
      data[45].VOLUME,
      data[45].VALUE,
      data[45].Date,
      data[45].Time,
    ]);
    GetStock.push([
      data[46].SYMBOL,
      data[46].LTP,
      data[46].CHNG,
      data[46].CHANGPercentage,
      data[46].OPEN,
      data[46].PREVCLOSE,
      data[46].HIGH,
      data[46].LOW,
      data[46].VOLUME,
      data[46].VALUE,
      data[46].Date,
      data[46].Time,
    ]);
    GetStock.push([
      data[47].SYMBOL,
      data[47].LTP,
      data[47].CHNG,
      data[47].CHANGPercentage,
      data[47].OPEN,
      data[47].PREVCLOSE,
      data[47].HIGH,
      data[47].LOW,
      data[47].VOLUME,
      data[47].VALUE,
      data[47].Date,
      data[47].Time,
    ]);
    GetStock.push([
      data[48].SYMBOL,
      data[48].LTP,
      data[48].CHNG,
      data[48].CHANGPercentage,
      data[48].OPEN,
      data[48].PREVCLOSE,
      data[48].HIGH,
      data[48].LOW,
      data[48].VOLUME,
      data[48].VALUE,
      data[48].Date,
      data[48].Time,
    ]);
    GetStock.push([
      data[49].SYMBOL,
      data[49].LTP,
      data[49].CHNG,
      data[49].CHANGPercentage,
      data[49].OPEN,
      data[49].PREVCLOSE,
      data[49].HIGH,
      data[49].LOW,
      data[49].VOLUME,
      data[49].VALUE,
      data[49].Date,
      data[49].Time,
    ]);
    GetStock.push([
      data[50].SYMBOL,
      data[50].LTP,
      data[50].CHNG,
      data[50].CHANGPercentage,
      data[50].OPEN,
      data[50].PREVCLOSE,
      data[50].HIGH,
      data[50].LOW,
      data[50].VOLUME,
      data[50].VALUE,
      data[50].Date,
      data[50].Time,
    ]);
    if (funcNu == 1) {
      gsRun2(client, GetStock);
    }
    if (funcNu == 2) {
      gsRun4(client, GetStock);
    }
  } catch (error) {
    console.log("454: Error While Converting data", error);
  }
};


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
exports.covert1 = (data, funcNu) => {
  try {
    let GetStock = [];
    console.log("38: Data converted gsRun S1 >>>");

    GetStock.push([
      data[0].SYMBOL,
      data[0].OPEN,
      data[0].HIGH,
      data[0].LOW,
      data[0].PREVCLOSE,
      data[0].LTP,
      data[0].CHNG,
      data[0].CHANGPercentage,
      data[0].VOLUME,
      data[0].VALUE,
      data[0].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[1].SYMBOL,
      data[1].OPEN,
      data[1].HIGH,
      data[1].LOW,
      data[1].PREVCLOSE,
      data[1].LTP,
      data[1].CHNG,
      data[1].CHANGPercentage,
      data[1].VOLUME,
      data[1].VALUE,
      data[1].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[2].SYMBOL,
      data[2].OPEN,
      data[2].HIGH,
      data[2].LOW,
      data[2].PREVCLOSE,
      data[2].LTP,
      data[2].CHNG,
      data[2].CHANGPercentage,
      data[2].VOLUME,
      data[2].VALUE,
      data[2].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[3].SYMBOL,
      data[3].OPEN,
      data[3].HIGH,
      data[3].LOW,
      data[3].PREVCLOSE,
      data[3].LTP,
      data[3].CHNG,
      data[3].CHANGPercentage,
      data[3].VOLUME,
      data[3].VALUE,
      data[3].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[4].SYMBOL,
      data[4].OPEN,
      data[4].HIGH,
      data[4].LOW,
      data[4].PREVCLOSE,
      data[4].LTP,
      data[4].CHNG,
      data[4].CHANGPercentage,
      data[4].VOLUME,
      data[4].VALUE,
      data[4].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[5].SYMBOL,
      data[5].OPEN,
      data[5].HIGH,
      data[5].LOW,
      data[5].PREVCLOSE,
      data[5].LTP,
      data[5].CHNG,
      data[5].CHANGPercentage,
      data[5].VOLUME,
      data[5].VALUE,
      data[5].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[6].SYMBOL,
      data[6].OPEN,
      data[6].HIGH,
      data[6].LOW,
      data[6].PREVCLOSE,
      data[6].LTP,
      data[6].CHNG,
      data[6].CHANGPercentage,
      data[6].VOLUME,
      data[6].VALUE,
      data[6].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[7].SYMBOL,
      data[7].OPEN,
      data[7].HIGH,
      data[7].LOW,
      data[7].PREVCLOSE,
      data[7].LTP,
      data[7].CHNG,
      data[7].CHANGPercentage,
      data[7].VOLUME,
      data[7].VALUE,
      data[7].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[8].SYMBOL,
      data[8].OPEN,
      data[8].HIGH,
      data[8].LOW,
      data[8].PREVCLOSE,
      data[8].LTP,
      data[8].CHNG,
      data[8].CHANGPercentage,
      data[8].VOLUME,
      data[8].VALUE,
      data[8].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[9].SYMBOL,
      data[9].OPEN,
      data[9].HIGH,
      data[9].LOW,
      data[9].PREVCLOSE,
      data[9].LTP,
      data[9].CHNG,
      data[9].CHANGPercentage,
      data[9].VOLUME,
      data[9].VALUE,
      data[9].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[10].SYMBOL,
      data[10].OPEN,
      data[10].HIGH,
      data[10].LOW,
      data[10].PREVCLOSE,
      data[10].LTP,
      data[10].CHNG,
      data[10].CHANGPercentage,
      data[10].VOLUME,
      data[10].VALUE,
      data[10].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[11].SYMBOL,
      data[11].OPEN,
      data[11].HIGH,
      data[11].LOW,
      data[11].PREVCLOSE,
      data[11].LTP,
      data[11].CHNG,
      data[11].CHANGPercentage,
      data[11].VOLUME,
      data[11].VALUE,
      data[11].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[12].SYMBOL,
      data[12].OPEN,
      data[12].HIGH,
      data[12].LOW,
      data[12].PREVCLOSE,
      data[12].LTP,
      data[12].CHNG,
      data[12].CHANGPercentage,
      data[12].VOLUME,
      data[12].VALUE,
      data[12].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[13].SYMBOL,
      data[13].OPEN,
      data[13].HIGH,
      data[13].LOW,
      data[13].PREVCLOSE,
      data[13].LTP,
      data[13].CHNG,
      data[13].CHANGPercentage,
      data[13].VOLUME,
      data[13].VALUE,
      data[13].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[14].SYMBOL,
      data[14].OPEN,
      data[14].HIGH,
      data[14].LOW,
      data[14].PREVCLOSE,
      data[14].LTP,
      data[14].CHNG,
      data[14].CHANGPercentage,
      data[14].VOLUME,
      data[14].VALUE,
      data[14].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[15].SYMBOL,
      data[15].OPEN,
      data[15].HIGH,
      data[15].LOW,
      data[15].PREVCLOSE,
      data[15].LTP,
      data[15].CHNG,
      data[15].CHANGPercentage,
      data[15].VOLUME,
      data[15].VALUE,
      data[15].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[16].SYMBOL,
      data[16].OPEN,
      data[16].HIGH,
      data[16].LOW,
      data[16].PREVCLOSE,
      data[16].LTP,
      data[16].CHNG,
      data[16].CHANGPercentage,
      data[16].VOLUME,
      data[16].VALUE,
      data[16].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[17].SYMBOL,
      data[17].OPEN,
      data[17].HIGH,
      data[17].LOW,
      data[17].PREVCLOSE,
      data[17].LTP,
      data[17].CHNG,
      data[17].CHANGPercentage,
      data[17].VOLUME,
      data[17].VALUE,
      data[17].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[18].SYMBOL,
      data[18].OPEN,
      data[18].HIGH,
      data[18].LOW,
      data[18].PREVCLOSE,
      data[18].LTP,
      data[18].CHNG,
      data[18].CHANGPercentage,
      data[18].VOLUME,
      data[18].VALUE,
      data[18].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[19].SYMBOL,
      data[19].OPEN,
      data[19].HIGH,
      data[19].LOW,
      data[19].PREVCLOSE,
      data[19].LTP,
      data[19].CHNG,
      data[19].CHANGPercentage,
      data[19].VOLUME,
      data[19].VALUE,
      data[19].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[20].SYMBOL,
      data[20].OPEN,
      data[20].HIGH,
      data[20].LOW,
      data[20].PREVCLOSE,
      data[20].LTP,
      data[20].CHNG,
      data[20].CHANGPercentage,
      data[20].VOLUME,
      data[20].VALUE,
      data[20].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[21].SYMBOL,
      data[21].OPEN,
      data[21].HIGH,
      data[21].LOW,
      data[21].PREVCLOSE,
      data[21].LTP,
      data[21].CHNG,
      data[21].CHANGPercentage,
      data[21].VOLUME,
      data[21].VALUE,
      data[21].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[22].SYMBOL,
      data[22].OPEN,
      data[22].HIGH,
      data[22].LOW,
      data[22].PREVCLOSE,
      data[22].LTP,
      data[22].CHNG,
      data[22].CHANGPercentage,
      data[22].VOLUME,
      data[22].VALUE,
      data[22].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[23].SYMBOL,
      data[23].OPEN,
      data[23].HIGH,
      data[23].LOW,
      data[23].PREVCLOSE,
      data[23].LTP,
      data[23].CHNG,
      data[23].CHANGPercentage,
      data[23].VOLUME,
      data[23].VALUE,
      data[23].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[24].SYMBOL,
      data[24].OPEN,
      data[24].HIGH,
      data[24].LOW,
      data[24].PREVCLOSE,
      data[24].LTP,
      data[24].CHNG,
      data[24].CHANGPercentage,
      data[24].VOLUME,
      data[24].VALUE,
      data[24].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[25].SYMBOL,
      data[25].OPEN,
      data[25].HIGH,
      data[25].LOW,
      data[25].PREVCLOSE,
      data[25].LTP,
      data[25].CHNG,
      data[25].CHANGPercentage,
      data[25].VOLUME,
      data[25].VALUE,
      data[25].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[26].SYMBOL,
      data[26].OPEN,
      data[26].HIGH,
      data[26].LOW,
      data[26].PREVCLOSE,
      data[26].LTP,
      data[26].CHNG,
      data[26].CHANGPercentage,
      data[26].VOLUME,
      data[26].VALUE,
      data[26].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[27].SYMBOL,
      data[27].OPEN,
      data[27].HIGH,
      data[27].LOW,
      data[27].PREVCLOSE,
      data[27].LTP,
      data[27].CHNG,
      data[27].CHANGPercentage,
      data[27].VOLUME,
      data[27].VALUE,
      data[27].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[28].SYMBOL,
      data[28].OPEN,
      data[28].HIGH,
      data[28].LOW,
      data[28].PREVCLOSE,
      data[28].LTP,
      data[28].CHNG,
      data[28].CHANGPercentage,
      data[28].VOLUME,
      data[28].VALUE,
      data[28].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[29].SYMBOL,
      data[29].OPEN,
      data[29].HIGH,
      data[29].LOW,
      data[29].PREVCLOSE,
      data[29].LTP,
      data[29].CHNG,
      data[29].CHANGPercentage,
      data[29].VOLUME,
      data[29].VALUE,
      data[29].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[30].SYMBOL,
      data[30].OPEN,
      data[30].HIGH,
      data[30].LOW,
      data[30].PREVCLOSE,
      data[30].LTP,
      data[30].CHNG,
      data[30].CHANGPercentage,
      data[30].VOLUME,
      data[30].VALUE,
      data[30].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[31].SYMBOL,
      data[31].OPEN,
      data[31].HIGH,
      data[31].LOW,
      data[31].PREVCLOSE,
      data[31].LTP,
      data[31].CHNG,
      data[31].CHANGPercentage,
      data[31].VOLUME,
      data[31].VALUE,
      data[31].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[32].SYMBOL,
      data[32].OPEN,
      data[32].HIGH,
      data[32].LOW,
      data[32].PREVCLOSE,
      data[32].LTP,
      data[32].CHNG,
      data[32].CHANGPercentage,
      data[32].VOLUME,
      data[32].VALUE,
      data[32].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[33].SYMBOL,
      data[33].OPEN,
      data[33].HIGH,
      data[33].LOW,
      data[33].PREVCLOSE,
      data[33].LTP,
      data[33].CHNG,
      data[33].CHANGPercentage,
      data[33].VOLUME,
      data[33].VALUE,
      data[33].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[34].SYMBOL,
      data[34].OPEN,
      data[34].HIGH,
      data[34].LOW,
      data[34].PREVCLOSE,
      data[34].LTP,
      data[34].CHNG,
      data[34].CHANGPercentage,
      data[34].VOLUME,
      data[34].VALUE,
      data[34].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[35].SYMBOL,
      data[35].OPEN,
      data[35].HIGH,
      data[35].LOW,
      data[35].PREVCLOSE,
      data[35].LTP,
      data[35].CHNG,
      data[35].CHANGPercentage,
      data[35].VOLUME,
      data[35].VALUE,
      data[35].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[36].SYMBOL,
      data[36].OPEN,
      data[36].HIGH,
      data[36].LOW,
      data[36].PREVCLOSE,
      data[36].LTP,
      data[36].CHNG,
      data[36].CHANGPercentage,
      data[36].VOLUME,
      data[36].VALUE,
      data[36].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[37].SYMBOL,
      data[37].OPEN,
      data[37].HIGH,
      data[37].LOW,
      data[37].PREVCLOSE,
      data[37].LTP,
      data[37].CHNG,
      data[37].CHANGPercentage,
      data[37].VOLUME,
      data[37].VALUE,
      data[37].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[38].SYMBOL,
      data[38].OPEN,
      data[38].HIGH,
      data[38].LOW,
      data[38].PREVCLOSE,
      data[38].LTP,
      data[38].CHNG,
      data[38].CHANGPercentage,
      data[38].VOLUME,
      data[38].VALUE,
      data[38].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[39].SYMBOL,
      data[39].OPEN,
      data[39].HIGH,
      data[39].LOW,
      data[39].PREVCLOSE,
      data[39].LTP,
      data[39].CHNG,
      data[39].CHANGPercentage,
      data[39].VOLUME,
      data[39].VALUE,
      data[39].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[40].SYMBOL,
      data[40].OPEN,
      data[40].HIGH,
      data[40].LOW,
      data[40].PREVCLOSE,
      data[40].LTP,
      data[40].CHNG,
      data[40].CHANGPercentage,
      data[40].VOLUME,
      data[40].VALUE,
      data[40].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[41].SYMBOL,
      data[41].OPEN,
      data[41].HIGH,
      data[41].LOW,
      data[41].PREVCLOSE,
      data[41].LTP,
      data[41].CHNG,
      data[41].CHANGPercentage,
      data[41].VOLUME,
      data[41].VALUE,
      data[41].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[42].SYMBOL,
      data[42].OPEN,
      data[42].HIGH,
      data[42].LOW,
      data[42].PREVCLOSE,
      data[42].LTP,
      data[42].CHNG,
      data[42].CHANGPercentage,
      data[42].VOLUME,
      data[42].VALUE,
      data[42].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[43].SYMBOL,
      data[43].OPEN,
      data[43].HIGH,
      data[43].LOW,
      data[43].PREVCLOSE,
      data[43].LTP,
      data[43].CHNG,
      data[43].CHANGPercentage,
      data[43].VOLUME,
      data[43].VALUE,
      data[43].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[44].SYMBOL,
      data[44].OPEN,
      data[44].HIGH,
      data[44].LOW,
      data[44].PREVCLOSE,
      data[44].LTP,
      data[44].CHNG,
      data[44].CHANGPercentage,
      data[44].VOLUME,
      data[44].VALUE,
      data[44].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[45].SYMBOL,
      data[45].OPEN,
      data[45].HIGH,
      data[45].LOW,
      data[45].PREVCLOSE,
      data[45].LTP,
      data[45].CHNG,
      data[45].CHANGPercentage,
      data[45].VOLUME,
      data[45].VALUE,
      data[45].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[46].SYMBOL,
      data[46].OPEN,
      data[46].HIGH,
      data[46].LOW,
      data[46].PREVCLOSE,
      data[46].LTP,
      data[46].CHNG,
      data[46].CHANGPercentage,
      data[46].VOLUME,
      data[46].VALUE,
      data[46].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[47].SYMBOL,
      data[47].OPEN,
      data[47].HIGH,
      data[47].LOW,
      data[47].PREVCLOSE,
      data[47].LTP,
      data[47].CHNG,
      data[47].CHANGPercentage,
      data[47].VOLUME,
      data[47].VALUE,
      data[47].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[48].SYMBOL,
      data[48].OPEN,
      data[48].HIGH,
      data[48].LOW,
      data[48].PREVCLOSE,
      data[48].LTP,
      data[48].CHNG,
      data[48].CHANGPercentage,
      data[48].VOLUME,
      data[48].VALUE,
      data[48].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[49].SYMBOL,
      data[49].OPEN,
      data[49].HIGH,
      data[49].LOW,
      data[49].PREVCLOSE,
      data[49].LTP,
      data[49].CHNG,
      data[49].CHANGPercentage,
      data[49].VOLUME,
      data[49].VALUE,
      data[49].Date,
      moment().format("hh.mm"),
    ]);
    GetStock.push([
      data[50].SYMBOL,
      data[50].OPEN,
      data[50].HIGH,
      data[50].LOW,
      data[50].PREVCLOSE,
      data[50].LTP,
      data[50].CHNG,
      data[50].CHANGPercentage,
      data[50].VOLUME,
      data[50].VALUE,
      data[49].Date,
      moment().format("hh.mm"),
    ]);
    if (funcNu == 0) {
      gsRun(client, GetStock);
    }
  } catch (error) {
    console.log("388: Error While Converting data", error);
  }
};
