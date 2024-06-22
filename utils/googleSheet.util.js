const axios = require("axios");
const moment = require("moment");
const { google } = require("googleapis");
const { spreadsheetId } = require("../secret.json");
const { notify } = require("./notification.util");
const { client } = require("../config/googleSheet.config");
const { url, sheet2UpdateTime, sheet3UpdateTime } = require("../constant");

//insert into sheet 1
exports.gsRun = async (client, stocksData) => {
    try {
        let nifty50Data = {
            SYMBOL: stocksData[0][0],
            LTP: stocksData[0][1],
            CHNG: stocksData[0][2],
            CHANGPercentage: stocksData[0][3],
            OPEN: stocksData[0][4],
            PREVCLOSE: stocksData[0][5],
            HIGH: stocksData[0][6],
            LOW: stocksData[0][7],
            VOLUME: stocksData[0][8],
            VALUE: stocksData[0][9],
            Date: stocksData[0][10],
            Time: stocksData[0][11],
        };
        let data1 = {
            SYMBOL: stocksData[1][0],
            LTP: stocksData[1][1],
            CHNG: stocksData[1][2],
            CHANGPercentage: stocksData[1][3],
            OPEN: stocksData[1][4],
            PREVCLOSE: stocksData[1][5],
            HIGH: stocksData[1][6],
            LOW: stocksData[1][7],
            VOLUME: stocksData[1][8],
            VALUE: stocksData[1][9],
            Date: stocksData[1][10],
            Time: stocksData[1][11],
        };
        let data2 = {
            SYMBOL: stocksData[2][0],
            LTP: stocksData[2][1],
            CHNG: stocksData[2][2],
            CHANGPercentage: stocksData[2][3],
            OPEN: stocksData[2][4],
            PREVCLOSE: stocksData[2][5],
            HIGH: stocksData[2][6],
            LOW: stocksData[2][7],
            VOLUME: stocksData[2][8],
            VALUE: stocksData[2][9],
            Date: stocksData[2][10],
            Time: stocksData[2][11],
        };
        let data3 = {
            SYMBOL: stocksData[3][0],
            LTP: stocksData[3][1],
            CHNG: stocksData[3][2],
            CHANGPercentage: stocksData[3][3],
            OPEN: stocksData[3][4],
            PREVCLOSE: stocksData[3][5],
            HIGH: stocksData[3][6],
            LOW: stocksData[3][7],
            VOLUME: stocksData[3][8],
            VALUE: stocksData[3][9],
            Date: stocksData[3][10],
            Time: stocksData[3][11],
        };
        let data4 = {
            SYMBOL: stocksData[4][0],
            LTP: stocksData[4][1],
            CHNG: stocksData[4][2],
            CHANGPercentage: stocksData[4][3],
            OPEN: stocksData[4][4],
            PREVCLOSE: stocksData[4][5],
            HIGH: stocksData[4][6],
            LOW: stocksData[4][7],
            VOLUME: stocksData[4][8],
            VALUE: stocksData[4][9],
            Date: stocksData[4][10],
            Time: stocksData[4][11],
        };
        let data5 = {
            SYMBOL: stocksData[5][0],
            LTP: stocksData[5][1],
            CHNG: stocksData[5][2],
            CHANGPercentage: stocksData[5][3],
            OPEN: stocksData[5][4],
            PREVCLOSE: stocksData[5][5],
            HIGH: stocksData[5][6],
            LOW: stocksData[5][7],
            VOLUME: stocksData[5][8],
            VALUE: stocksData[5][9],
            Date: stocksData[5][10],
            Time: stocksData[5][11],
        };
        let data6 = {
            SYMBOL: stocksData[6][0],
            LTP: stocksData[6][1],
            CHNG: stocksData[6][2],
            CHANGPercentage: stocksData[6][3],
            OPEN: stocksData[6][4],
            PREVCLOSE: stocksData[6][5],
            HIGH: stocksData[6][6],
            LOW: stocksData[6][7],
            VOLUME: stocksData[6][8],
            VALUE: stocksData[6][9],
            Date: stocksData[6][10],
            Time: stocksData[6][11],
        };
        let data7 = {
            SYMBOL: stocksData[7][0],
            LTP: stocksData[7][1],
            CHNG: stocksData[7][2],
            CHANGPercentage: stocksData[7][3],
            OPEN: stocksData[7][4],
            PREVCLOSE: stocksData[7][5],
            HIGH: stocksData[7][6],
            LOW: stocksData[7][7],
            VOLUME: stocksData[7][8],
            VALUE: stocksData[7][9],
            Date: stocksData[7][10],
            Time: stocksData[7][11],
        };
        let data8 = {
            SYMBOL: stocksData[8][0],
            LTP: stocksData[8][1],
            CHNG: stocksData[8][2],
            CHANGPercentage: stocksData[8][3],
            OPEN: stocksData[8][4],
            PREVCLOSE: stocksData[8][5],
            HIGH: stocksData[8][6],
            LOW: stocksData[8][7],
            VOLUME: stocksData[8][8],
            VALUE: stocksData[8][9],
            Date: stocksData[8][10],
            Time: stocksData[8][11],
        };
        let data9 = {
            SYMBOL: stocksData[9][0],
            LTP: stocksData[9][1],
            CHNG: stocksData[9][2],
            CHANGPercentage: stocksData[9][3],
            OPEN: stocksData[9][4],
            PREVCLOSE: stocksData[9][5],
            HIGH: stocksData[9][6],
            LOW: stocksData[9][7],
            VOLUME: stocksData[9][8],
            VALUE: stocksData[9][9],
            Date: stocksData[9][10],
            Time: stocksData[9][11],
        };
        let data10 = {
            SYMBOL: stocksData[10][0],
            LTP: stocksData[10][1],
            CHNG: stocksData[10][2],
            CHANGPercentage: stocksData[10][3],
            OPEN: stocksData[10][4],
            PREVCLOSE: stocksData[10][5],
            HIGH: stocksData[10][6],
            LOW: stocksData[10][7],
            VOLUME: stocksData[10][8],
            VALUE: stocksData[10][9],
            Date: stocksData[10][10],
            Time: stocksData[10][11],
        };
        let data11 = {
            SYMBOL: stocksData[11][0],
            LTP: stocksData[11][1],
            CHNG: stocksData[11][2],
            CHANGPercentage: stocksData[11][3],
            OPEN: stocksData[11][4],
            PREVCLOSE: stocksData[11][5],
            HIGH: stocksData[11][6],
            LOW: stocksData[11][7],
            VOLUME: stocksData[11][8],
            VALUE: stocksData[11][9],
            Date: stocksData[11][10],
            Time: stocksData[11][11],
        };
        let data12 = {
            SYMBOL: stocksData[12][0],
            LTP: stocksData[12][1],
            CHNG: stocksData[12][2],
            CHANGPercentage: stocksData[12][3],
            OPEN: stocksData[12][4],
            PREVCLOSE: stocksData[12][5],
            HIGH: stocksData[12][6],
            LOW: stocksData[12][7],
            VOLUME: stocksData[12][8],
            VALUE: stocksData[12][9],
            Date: stocksData[12][10],
            Time: stocksData[12][11],
        };
        let data13 = {
            SYMBOL: stocksData[13][0],
            LTP: stocksData[13][1],
            CHNG: stocksData[13][2],
            CHANGPercentage: stocksData[13][3],
            OPEN: stocksData[13][4],
            PREVCLOSE: stocksData[13][5],
            HIGH: stocksData[13][6],
            LOW: stocksData[13][7],
            VOLUME: stocksData[13][8],
            VALUE: stocksData[13][9],
            Date: stocksData[13][10],
            Time: stocksData[13][11],
        };
        let data14 = {
            SYMBOL: stocksData[14][0],
            LTP: stocksData[14][1],
            CHNG: stocksData[14][2],
            CHANGPercentage: stocksData[14][3],
            OPEN: stocksData[14][4],
            PREVCLOSE: stocksData[14][5],
            HIGH: stocksData[14][6],
            LOW: stocksData[14][7],
            VOLUME: stocksData[14][8],
            VALUE: stocksData[14][9],
            Date: stocksData[14][10],
            Time: stocksData[14][11],
        };
        let data15 = {
            SYMBOL: stocksData[15][0],
            LTP: stocksData[15][1],
            CHNG: stocksData[15][2],
            CHANGPercentage: stocksData[15][3],
            OPEN: stocksData[15][4],
            PREVCLOSE: stocksData[15][5],
            HIGH: stocksData[15][6],
            LOW: stocksData[15][7],
            VOLUME: stocksData[15][8],
            VALUE: stocksData[15][9],
            Date: stocksData[15][10],
            Time: stocksData[15][11],
        };
        let data16 = {
            SYMBOL: stocksData[16][0],
            LTP: stocksData[16][1],
            CHNG: stocksData[16][2],
            CHANGPercentage: stocksData[16][3],
            OPEN: stocksData[16][4],
            PREVCLOSE: stocksData[16][5],
            HIGH: stocksData[16][6],
            LOW: stocksData[16][7],
            VOLUME: stocksData[16][8],
            VALUE: stocksData[16][9],
            Date: stocksData[16][10],
            Time: stocksData[16][11],
        };
        let data17 = {
            SYMBOL: stocksData[17][0],
            LTP: stocksData[17][1],
            CHNG: stocksData[17][2],
            CHANGPercentage: stocksData[17][3],
            OPEN: stocksData[17][4],
            PREVCLOSE: stocksData[17][5],
            HIGH: stocksData[17][6],
            LOW: stocksData[17][7],
            VOLUME: stocksData[17][8],
            VALUE: stocksData[17][9],
            Date: stocksData[17][10],
            Time: stocksData[17][11],
        };
        let data18 = {
            SYMBOL: stocksData[18][0],
            LTP: stocksData[18][1],
            CHNG: stocksData[18][2],
            CHANGPercentage: stocksData[18][3],
            OPEN: stocksData[18][4],
            PREVCLOSE: stocksData[18][5],
            HIGH: stocksData[18][6],
            LOW: stocksData[18][7],
            VOLUME: stocksData[18][8],
            VALUE: stocksData[18][9],
            Date: stocksData[18][10],
            Time: stocksData[18][11],
        };
        let data19 = {
            SYMBOL: stocksData[19][0],
            LTP: stocksData[19][1],
            CHNG: stocksData[19][2],
            CHANGPercentage: stocksData[19][3],
            OPEN: stocksData[19][4],
            PREVCLOSE: stocksData[19][5],
            HIGH: stocksData[19][6],
            LOW: stocksData[19][7],
            VOLUME: stocksData[19][8],
            VALUE: stocksData[19][9],
            Date: stocksData[19][10],
            Time: stocksData[19][11],
        };
        let data20 = {
            SYMBOL: stocksData[20][0],
            LTP: stocksData[20][1],
            CHNG: stocksData[20][2],
            CHANGPercentage: stocksData[20][3],
            OPEN: stocksData[20][4],
            PREVCLOSE: stocksData[20][5],
            HIGH: stocksData[20][6],
            LOW: stocksData[20][7],
            VOLUME: stocksData[20][8],
            VALUE: stocksData[20][9],
            Date: stocksData[20][10],
            Time: stocksData[20][11],
        };
        let data21 = {
            SYMBOL: stocksData[21][0],
            LTP: stocksData[21][1],
            CHNG: stocksData[21][2],
            CHANGPercentage: stocksData[21][3],
            OPEN: stocksData[21][4],
            PREVCLOSE: stocksData[21][5],
            HIGH: stocksData[21][6],
            LOW: stocksData[21][7],
            VOLUME: stocksData[21][8],
            VALUE: stocksData[21][9],
            Date: stocksData[21][10],
            Time: stocksData[21][11],
        };
        let data22 = {
            SYMBOL: stocksData[22][0],
            LTP: stocksData[22][1],
            CHNG: stocksData[22][2],
            CHANGPercentage: stocksData[22][3],
            OPEN: stocksData[22][4],
            PREVCLOSE: stocksData[22][5],
            HIGH: stocksData[22][6],
            LOW: stocksData[22][7],
            VOLUME: stocksData[22][8],
            VALUE: stocksData[22][9],
            Date: stocksData[22][10],
            Time: stocksData[22][11],
        };
        let data23 = {
            SYMBOL: stocksData[23][0],
            LTP: stocksData[23][1],
            CHNG: stocksData[23][2],
            CHANGPercentage: stocksData[23][3],
            OPEN: stocksData[23][4],
            PREVCLOSE: stocksData[23][5],
            HIGH: stocksData[23][6],
            LOW: stocksData[23][7],
            VOLUME: stocksData[23][8],
            VALUE: stocksData[23][9],
            Date: stocksData[23][10],
            Time: stocksData[23][11],
        };
        let data24 = {
            SYMBOL: stocksData[24][0],
            LTP: stocksData[24][1],
            CHNG: stocksData[24][2],
            CHANGPercentage: stocksData[24][3],
            OPEN: stocksData[24][4],
            PREVCLOSE: stocksData[24][5],
            HIGH: stocksData[24][6],
            LOW: stocksData[24][7],
            VOLUME: stocksData[24][8],
            VALUE: stocksData[24][9],
            Date: stocksData[24][10],
            Time: stocksData[24][11],
        };
        let data25 = {
            SYMBOL: stocksData[25][0],
            LTP: stocksData[25][1],
            CHNG: stocksData[25][2],
            CHANGPercentage: stocksData[25][3],
            OPEN: stocksData[25][4],
            PREVCLOSE: stocksData[25][5],
            HIGH: stocksData[25][6],
            LOW: stocksData[25][7],
            VOLUME: stocksData[25][8],
            VALUE: stocksData[25][9],
            Date: stocksData[25][10],
            Time: stocksData[25][11],
        };
        let data26 = {
            SYMBOL: stocksData[26][0],
            LTP: stocksData[26][1],
            CHNG: stocksData[26][2],
            CHANGPercentage: stocksData[26][3],
            OPEN: stocksData[26][4],
            PREVCLOSE: stocksData[26][5],
            HIGH: stocksData[26][6],
            LOW: stocksData[26][7],
            VOLUME: stocksData[26][8],
            VALUE: stocksData[26][9],
            Date: stocksData[26][10],
            Time: stocksData[26][11],
        };
        let data27 = {
            SYMBOL: stocksData[27][0],
            LTP: stocksData[27][1],
            CHNG: stocksData[27][2],
            CHANGPercentage: stocksData[27][3],
            OPEN: stocksData[27][4],
            PREVCLOSE: stocksData[27][5],
            HIGH: stocksData[27][6],
            LOW: stocksData[27][7],
            VOLUME: stocksData[27][8],
            VALUE: stocksData[27][9],
            Date: stocksData[27][10],
            Time: stocksData[27][11],
        };
        let data28 = {
            SYMBOL: stocksData[28][0],
            LTP: stocksData[28][1],
            CHNG: stocksData[28][2],
            CHANGPercentage: stocksData[28][3],
            OPEN: stocksData[28][4],
            PREVCLOSE: stocksData[28][5],
            HIGH: stocksData[28][6],
            LOW: stocksData[28][7],
            VOLUME: stocksData[28][8],
            VALUE: stocksData[28][9],
            Date: stocksData[28][10],
            Time: stocksData[28][11],
        };
        let data29 = {
            SYMBOL: stocksData[29][0],
            LTP: stocksData[29][1],
            CHNG: stocksData[29][2],
            CHANGPercentage: stocksData[29][3],
            OPEN: stocksData[29][4],
            PREVCLOSE: stocksData[29][5],
            HIGH: stocksData[29][6],
            LOW: stocksData[29][7],
            VOLUME: stocksData[29][8],
            VALUE: stocksData[29][9],
            Date: stocksData[29][10],
            Time: stocksData[29][11],
        };
        let data30 = {
            SYMBOL: stocksData[30][0],
            LTP: stocksData[30][1],
            CHNG: stocksData[30][2],
            CHANGPercentage: stocksData[30][3],
            OPEN: stocksData[30][4],
            PREVCLOSE: stocksData[30][5],
            HIGH: stocksData[30][6],
            LOW: stocksData[30][7],
            VOLUME: stocksData[30][8],
            VALUE: stocksData[30][9],
            Date: stocksData[30][10],
            Time: stocksData[30][11],
        };
        let data31 = {
            SYMBOL: stocksData[31][0],
            LTP: stocksData[31][1],
            CHNG: stocksData[31][2],
            CHANGPercentage: stocksData[31][3],
            OPEN: stocksData[31][4],
            PREVCLOSE: stocksData[31][5],
            HIGH: stocksData[31][6],
            LOW: stocksData[31][7],
            VOLUME: stocksData[31][8],
            VALUE: stocksData[31][9],
            Date: stocksData[31][10],
            Time: stocksData[31][11],
        };
        let data32 = {
            SYMBOL: stocksData[32][0],
            LTP: stocksData[32][1],
            CHNG: stocksData[32][2],
            CHANGPercentage: stocksData[32][3],
            OPEN: stocksData[32][4],
            PREVCLOSE: stocksData[32][5],
            HIGH: stocksData[32][6],
            LOW: stocksData[32][7],
            VOLUME: stocksData[32][8],
            VALUE: stocksData[32][9],
            Date: stocksData[32][10],
            Time: stocksData[32][11],
        };
        let data33 = {
            SYMBOL: stocksData[33][0],
            LTP: stocksData[33][1],
            CHNG: stocksData[33][2],
            CHANGPercentage: stocksData[33][3],
            OPEN: stocksData[33][4],
            PREVCLOSE: stocksData[33][5],
            HIGH: stocksData[33][6],
            LOW: stocksData[33][7],
            VOLUME: stocksData[33][8],
            VALUE: stocksData[33][9],
            Date: stocksData[33][10],
            Time: stocksData[33][11],
        };
        let data34 = {
            SYMBOL: stocksData[34][0],
            LTP: stocksData[34][1],
            CHNG: stocksData[34][2],
            CHANGPercentage: stocksData[34][3],
            OPEN: stocksData[34][4],
            PREVCLOSE: stocksData[34][5],
            HIGH: stocksData[34][6],
            LOW: stocksData[34][7],
            VOLUME: stocksData[34][8],
            VALUE: stocksData[34][9],
            Date: stocksData[34][10],
            Time: stocksData[34][11],
        };
        let data35 = {
            SYMBOL: stocksData[35][0],
            LTP: stocksData[35][1],
            CHNG: stocksData[35][2],
            CHANGPercentage: stocksData[35][3],
            OPEN: stocksData[35][4],
            PREVCLOSE: stocksData[35][5],
            HIGH: stocksData[35][6],
            LOW: stocksData[35][7],
            VOLUME: stocksData[35][8],
            VALUE: stocksData[35][9],
            Date: stocksData[35][10],
            Time: stocksData[35][11],
        };
        let data36 = {
            SYMBOL: stocksData[36][0],
            LTP: stocksData[36][1],
            CHNG: stocksData[36][2],
            CHANGPercentage: stocksData[36][3],
            OPEN: stocksData[36][4],
            PREVCLOSE: stocksData[36][5],
            HIGH: stocksData[36][6],
            LOW: stocksData[36][7],
            VOLUME: stocksData[36][8],
            VALUE: stocksData[36][9],
            Date: stocksData[36][10],
            Time: stocksData[36][11],
        };
        let data37 = {
            SYMBOL: stocksData[37][0],
            LTP: stocksData[37][1],
            CHNG: stocksData[37][2],
            CHANGPercentage: stocksData[37][3],
            OPEN: stocksData[37][4],
            PREVCLOSE: stocksData[37][5],
            HIGH: stocksData[37][6],
            LOW: stocksData[37][7],
            VOLUME: stocksData[37][8],
            VALUE: stocksData[37][9],
            Date: stocksData[37][10],
            Time: stocksData[37][11],
        };
        let data38 = {
            SYMBOL: stocksData[38][0],
            LTP: stocksData[38][1],
            CHNG: stocksData[38][2],
            CHANGPercentage: stocksData[38][3],
            OPEN: stocksData[38][4],
            PREVCLOSE: stocksData[38][5],
            HIGH: stocksData[38][6],
            LOW: stocksData[38][7],
            VOLUME: stocksData[38][8],
            VALUE: stocksData[38][9],
            Date: stocksData[38][10],
            Time: stocksData[38][11],
        };
        let data39 = {
            SYMBOL: stocksData[39][0],
            LTP: stocksData[39][1],
            CHNG: stocksData[39][2],
            CHANGPercentage: stocksData[39][3],
            OPEN: stocksData[39][4],
            PREVCLOSE: stocksData[39][5],
            HIGH: stocksData[39][6],
            LOW: stocksData[39][7],
            VOLUME: stocksData[39][8],
            VALUE: stocksData[39][9],
            Date: stocksData[39][10],
            Time: stocksData[39][11],
        };
        let data40 = {
            SYMBOL: stocksData[40][0],
            LTP: stocksData[40][1],
            CHNG: stocksData[40][2],
            CHANGPercentage: stocksData[40][3],
            OPEN: stocksData[40][4],
            PREVCLOSE: stocksData[40][5],
            HIGH: stocksData[40][6],
            LOW: stocksData[40][7],
            VOLUME: stocksData[40][8],
            VALUE: stocksData[40][9],
            Date: stocksData[40][10],
            Time: stocksData[40][11],
        };
        let data41 = {
            SYMBOL: stocksData[41][0],
            LTP: stocksData[41][1],
            CHNG: stocksData[41][2],
            CHANGPercentage: stocksData[41][3],
            OPEN: stocksData[41][4],
            PREVCLOSE: stocksData[41][5],
            HIGH: stocksData[41][6],
            LOW: stocksData[41][7],
            VOLUME: stocksData[41][8],
            VALUE: stocksData[41][9],
            Date: stocksData[41][10],
            Time: stocksData[41][11],
        };
        let data42 = {
            SYMBOL: stocksData[42][0],
            LTP: stocksData[42][1],
            CHNG: stocksData[42][2],
            CHANGPercentage: stocksData[42][3],
            OPEN: stocksData[42][4],
            PREVCLOSE: stocksData[42][5],
            HIGH: stocksData[42][6],
            LOW: stocksData[42][7],
            VOLUME: stocksData[42][8],
            VALUE: stocksData[42][9],
            Date: stocksData[42][10],
            Time: stocksData[42][11],
        };
        let data43 = {
            SYMBOL: stocksData[43][0],
            LTP: stocksData[43][1],
            CHNG: stocksData[43][2],
            CHANGPercentage: stocksData[43][3],
            OPEN: stocksData[43][4],
            PREVCLOSE: stocksData[43][5],
            HIGH: stocksData[43][6],
            LOW: stocksData[43][7],
            VOLUME: stocksData[43][8],
            VALUE: stocksData[43][9],
            Date: stocksData[43][10],
            Time: stocksData[43][11],
        };
        let data44 = {
            SYMBOL: stocksData[44][0],
            LTP: stocksData[44][1],
            CHNG: stocksData[44][2],
            CHANGPercentage: stocksData[44][3],
            OPEN: stocksData[44][4],
            PREVCLOSE: stocksData[44][5],
            HIGH: stocksData[44][6],
            LOW: stocksData[44][7],
            VOLUME: stocksData[44][8],
            VALUE: stocksData[44][9],
            Date: stocksData[44][10],
            Time: stocksData[44][11],
        };
        let data45 = {
            SYMBOL: stocksData[45][0],
            LTP: stocksData[45][1],
            CHNG: stocksData[45][2],
            CHANGPercentage: stocksData[45][3],
            OPEN: stocksData[45][4],
            PREVCLOSE: stocksData[45][5],
            HIGH: stocksData[45][6],
            LOW: stocksData[45][7],
            VOLUME: stocksData[45][8],
            VALUE: stocksData[45][9],
            Date: stocksData[45][10],
            Time: stocksData[45][11],
        };
        let data46 = {
            SYMBOL: stocksData[46][0],
            LTP: stocksData[46][1],
            CHNG: stocksData[46][2],
            CHANGPercentage: stocksData[46][3],
            OPEN: stocksData[46][4],
            PREVCLOSE: stocksData[46][5],
            HIGH: stocksData[46][6],
            LOW: stocksData[46][7],
            VOLUME: stocksData[46][8],
            VALUE: stocksData[46][9],
            Date: stocksData[46][10],
            Time: stocksData[46][11],
        };
        let data47 = {
            SYMBOL: stocksData[47][0],
            LTP: stocksData[47][1],
            CHNG: stocksData[47][2],
            CHANGPercentage: stocksData[47][3],
            OPEN: stocksData[47][4],
            PREVCLOSE: stocksData[47][5],
            HIGH: stocksData[47][6],
            LOW: stocksData[47][7],
            VOLUME: stocksData[47][8],
            VALUE: stocksData[47][9],
            Date: stocksData[47][10],
            Time: stocksData[47][11],
        };
        let data48 = {
            SYMBOL: stocksData[48][0],
            LTP: stocksData[48][1],
            CHNG: stocksData[48][2],
            CHANGPercentage: stocksData[48][3],
            OPEN: stocksData[48][4],
            PREVCLOSE: stocksData[48][5],
            HIGH: stocksData[48][6],
            LOW: stocksData[48][7],
            VOLUME: stocksData[48][8],
            VALUE: stocksData[48][9],
            Date: stocksData[48][10],
            Time: stocksData[48][11],
        };
        let data49 = {
            SYMBOL: stocksData[49][0],
            LTP: stocksData[49][1],
            CHNG: stocksData[49][2],
            CHANGPercentage: stocksData[49][3],
            OPEN: stocksData[49][4],
            PREVCLOSE: stocksData[49][5],
            HIGH: stocksData[49][6],
            LOW: stocksData[49][7],
            VOLUME: stocksData[49][8],
            VALUE: stocksData[49][9],
            Date: stocksData[49][10],
            Time: stocksData[49][11],
        };
        let data50 = {
            SYMBOL: stocksData[50][0],
            LTP: stocksData[50][1],
            CHNG: stocksData[50][2],
            CHANGPercentage: stocksData[50][3],
            OPEN: stocksData[50][4],
            PREVCLOSE: stocksData[50][5],
            HIGH: stocksData[50][6],
            LOW: stocksData[50][7],
            VOLUME: stocksData[50][8],
            VALUE: stocksData[50][9],
            Date: stocksData[50][10],
            Time: stocksData[50][11],
        };

        //call axios request for stor data in mongo db
        let DATA = JSON.stringify({
            nifty50Data,
            data1,
            data2,
            data3,
            data4,
            data5,
            data6,
            data7,
            data8,
            data9,
            data10,
            data11,
            data12,
            data13,
            data14,
            data15,
            data16,
            data17,
            data18,
            data19,
            data20,
            data21,
            data22,
            data23,
            data24,
            data25,
            data26,
            data27,
            data28,
            data29,
            data30,
            data31,
            data32,
            data33,
            data34,
            data35,
            data36,
            data37,
            data38,
            data39,
            data40,
            data41,
            data42,
            data43,
            data44,
            data45,
            data46,
            data47,
            data48,
            data49,
            data50,
        });
        let config10 = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${url}/App/api/v1/scrapData`, //https://api.niftyleveltracker.in/App/api/v1/scrapData, Local: http://localhost:8000/App/api/v1/scrapData
            headers: {
                "Content-Type": "application/json",
            },
            data: DATA,
        };
        axios
            .request(config10)
            .then((response) => {
                console.log("530: sheet  Data inserted >>");
            })
            .catch(async (error) => {
                console.log("Internet Speed Is SLOW", error.message);
            });
        // console.log("609: Post request");
        console.log("2281: Stocks Post Successfully");
        gsApi = google.sheets({ version: "v4", auth: client });
        //Insert data in to  sheet 1 //
        // console.log("sheet1",stocksData[0]);
        // console.log('sheet1',`symbole: ${stocksData[0][0]},open: ${stocksData[0][1]},high: ${stocksData[0][2]}low: ${stocksData[0][3]},preClose: ${stocksData[0][4]},LTP: ${stocksData[0][5]},chang: ${stocksData[0][6]},%chang: ${stocksData[0][7]},volume: ${stocksData[0][8]},value: ${stocksData[0][9]}`);
        const updateOption = {
            spreadsheetId, // spreadsheetId
            range: "Data!A2",
            valueInputOption: "USER_ENTERED",
            resource: { values: stocksData },
        };
        let res = await gsApi.spreadsheets.values.update(updateOption); // post
        console.log("2293: >>>> Sheet 1 updated", res.status);
        notify("Sheets 1 Updated Successfully");
        //Get Data for Sheet 2//
        const date = moment().format("DD-MM-YY"); //today date
        const time = moment().subtract(sheet2UpdateTime, "m").format("hh.mm");
        console.log(date, time);
        let data = "";

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${url}/App/api/v1/getScrapData`, //https://api.niftyleveltracker.in/App/api/v1/getScrapData/, Local: 'http://localhost:8000/App/api/v1/getScrapData/
            headers: { date: date.toString(), time: time.toString() },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                // console.log(response.data);
                convert(response.data, 1);
            })
            .catch((error) => {
                console.log("573:", error);
            });
        // Sheet 2 //
    } catch (error) {
        console.log("577:ERROR While Updating Sheet 1", error);
    }
};

/**
 * Updates the Google Sheets with the provided stocks data for Sheet 2.
 *
 * @param {Object} client - The authenticated Google Sheets client.
 * @param {Array} stocksData - The array of stocks data to be inserted into the Sheet 2.
 *
 * @returns {Promise} - A Promise that resolves when the Sheet 2 is updated successfully.
 *
 * @throws {Error} - Throws an error if there is an issue updating the Sheet 2.
 */
async function gsRun2(client, stocksData) {
    try {
        // console.log("sheet2",stocksData[0]);
        // console.log('sheet2',`symbole: ${stocksData[0][0]},open: ${stocksData[0][1]},high: ${stocksData[0][2]}low: ${stocksData[0][3]},preClose: ${stocksData[0][4]},LTP: ${stocksData[0][5]},chang: ${stocksData[0][6]},%chang: ${stocksData[0][7]},volume: ${stocksData[0][8]}`);
        const time1 = moment().subtract(sheet3UpdateTime, "m").format("hh.mm");
        const gsApi = google.sheets({ version: "v4", auth: client });
        const updateOption1 = {
            spreadsheetId, // spreadsheetId
            range: "Data2!A2",
            valueInputOption: "USER_ENTERED",
            resource: { values: stocksData },
        };
        let res1 = await gsApi.spreadsheets.values.update(updateOption1); // post
        console.log("2337: >>>> Sheet 2 updated", res1.status);
        notify("Sheets 2 Updated Successfully");
        //Get Data for Sheet 3//
        const date = moment().format("DD-MM-YY"); //today date

        let dataA = "";

        let configA = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${url}/App/api/v1/getScrapData20`, //http://localhost:8000/App/api/v1/getScrapData20
            headers: { date: date.toString(), time1: time1.toString() },
            data: dataA,
        };

        axios
            .request(configA)
            .then((response) => {
                console.log(`2354: Get request for sheet 3 with time ${time1}`);
                convert(response.data, 2);
            })
            .catch((error) => {
                console.log("2358:", error);
            });
        // Sheet 3//
    } catch (error) {
        console.log("2362:ERROR While Updating Sheet 2", error);
    }
}

/**
 * Updates the Google Sheets with the provided stocks data for Sheet 3.
 *
 * @param {Object} client - The authenticated Google Sheets client.
 * @param {Array} stocksData - The array of stocks data to be inserted into the Sheet 3.
 *
 * @returns {Promise} - A Promise that resolves when the Sheet 3 is updated successfully.
 *
 * @throws {Error} - Throws an error if there is an issue updating the Sheet 3.
 */
async function gsRun4(client, stocksData) {
    try {
        const gsApi = google.sheets({ version: "v4", auth: client });
        const updateOption1 = {
            spreadsheetId, // spreadsheetId
            range: "Data3!A2",
            valueInputOption: "USER_ENTERED",
            resource: { values: stocksData },
        };
        let res1 = await gsApi.spreadsheets.values.update(updateOption1); // post
        console.log("2374: >>>> Sheet 3 updated", res1.status);
        notify("Sheets 3 Updated Successfully");
    } catch (error) {
        console.log("2378: ERROR While Updating Sheet 3", error);
    }
}

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
function convert(data, funcNu) {
    try {
        let GetStock = data.map((item) => [
            item.SYMBOL,
            item.LTP,
            item.CHNG,
            item.CHANGPercentage,
            item.OPEN,
            item.PREVCLOSE,
            item.HIGH,
            item.LOW,
            item.VOLUME,
            item.VALUE,
            item.Date,
            item.Time,
        ]);
        console.log("convert: Data converted >>>");
        if (funcNu == 1) {
            gsRun2(client, GetStock);
        }
        if (funcNu == 2) {
            gsRun4(client, GetStock);
        }
    } catch (error) {
        console.error(error);
    }
}
