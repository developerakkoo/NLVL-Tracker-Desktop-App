const moment = require('moment');
const axios = require('axios');
const {google}= require('googleapis');
const key = require('./keys.json');
const WebSocket = require('ws');
const  wsUri = "ws://nimblewebstream.lisuns.com:4575/";
const password = "df39da22-ff37-44c0-8f3c-44e7caf99172";
const myInterval = setInterval(testWebSocket,120000);//120000 for every 2min  call main function

const client = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/spreadsheets'] // scope of the app https://developers.google.com/identity/protocols/oauth2/scopes#sheets
);
client.authorize(function(err,tokens){
  if(err){
      console.log(err);
      return;
  }else{
      console.log('connected!')
  }
});
    
    var output;
    var isAuthenticate = false;
    
    function testWebSocket(){
      console.log("main");
      websocket = new WebSocket(wsUri);
      websocket.onopen = function(evt) { onOpen(evt) };
      websocket.onclose = function(evt) { onClose(evt) };
      websocket.onmessage = function(evt) { onMessage(evt) };
      websocket.onerror = function(evt) { onError(evt) };
    }
    try{ 
    function onOpen(evt)
    {
      // writeToScreen("CONNECTED");
      // writeToScreen("Endpoint :"+wsUri);
      Authenticate();  
    }
  
    function onClose(evt){
    }
  
    function onMessage(evt)
    {
      var event = JSON.parse(evt.data);
      if (event.MessageType == "AuthenticateResult")
          if (event.Complete)
          {
              isAuthenticate = true;
              setTimeout(doTest, 500);
          }
          
          writeToScreen(evt.data);	
    }
  
    function onError(evt){
      // writeToScreen('<span style="color: red;"> Time : ' + new Date( Date.now()) + '</span>');	
      // writeToScreen('<span style="color: red;">ERROR data:</span> ' + evt.data);
      // writeToScreen('<span style="color: red;">ERROR message:</span> ' + evt.message);
      // writeToScreen('<span style="color: red;">ERROR reason:</span> ' + evt.reason);
      // writeToScreen("Endpoint :"+wsUri);
    }
    function doSend(message){
      var jsonmessage = JSON.stringify(message);
      websocket.send(jsonmessage); //  send request to web socket 
      writeToScreen(jsonmessage); // revived data 
    }
    
    function doClose(){
        websocket.close();
    }
      function Authenticate(){
      //  writeToScreen("Authenticate");
      var message = 
      {
        MessageType: "Authenticate",
        Password: password
      };
      doSend(message);
    }
  function doTest(){
      GetLastQuoteArray();					//GFDL : Returns Close of multiple Symbols – max 25 in single call (detailed)
  }
function GetLastQuoteArray(){
  console.log('dotest');
	const  request = 
		{
			MessageType: "GetLastQuoteArray",
			Exchange: "NSE",							
			InstrumentIdentifiers: [
			{Value:"TCS"}, {Value:"BAJAJ-AUTO"}, {Value:"BPCL"}, {Value:"INDUSINDBK"}, {Value:"AXISBANK"}, 
			{Value:"POWERGRID"}, {Value:"LT"}, {Value:"ULTRACEMCO"}, {Value:"CIPLA"}, {Value:"ADANIENT"}, 
			{Value:"GRASIM"}, {Value:"TATAMOTORS"}, {Value:"BRITANNIA"}, {Value:"NTPC"}, {Value:"DRREDDY"}, 
			{Value:"BAJFINANCE"}, {Value:"JSWSTEEL"}, {Value:"ICICIBANK"}, {Value:"TITAN"}, {Value:"HDFCBANK"}, 
			{Value:"LTIM"}, {Value:"NESTLEIND"}, {Value:"COALINDIA"}, {Value:"APOLLOHOSP"}, {Value:"SUNPHARMA"}, 
		],
		};
	const request1 = 
		{
			MessageType: "GetLastQuoteArray",
			Exchange: "NSE",							
			InstrumentIdentifiers: [
			{Value:"BAJAJFINSV"}, {Value:"DIVISLAB"}, {Value:"HDFCLIFE"}, {Value:"BHARTIARTL"}, {Value:"MARUTI"}, 
			{Value:"ADANIPORTS"}, {Value:"ASIANPAINT"}, {Value:"WIPRO"}, {Value:"KOTAKBANK"}, {Value:"M&M"}, 
			{Value:"RELIANCE"}, {Value:"TATACONSUM"}, {Value:"HINDALCO"}, {Value:"HEROMOTOCO"}, {Value:"TECHM"}, 
			{Value:"SBILIFE"}, {Value:"ITC"}, {Value:"ONGC"}, {Value:"INFY"}, {Value:"HCLTECH"}, 
			{Value:"HINDUNILVR"}, {Value:"UPL"}, {Value:"SBIN"}, {Value:"TATASTEEL"}, {Value:"EICHERMOT"}, 
		], 
		};
    const  request3 = 
		{
			MessageType: "GetLastQuoteArray",
			Exchange: "NSE_IDX",							
			InstrumentIdentifiers: [{Value:"NIFTY 50"}],
		};
	doSend(request,1);
	doSend(request1,2);
	doSend(request3,3);
}
// all data  pushed into metadata array
let metaData =[]
let nifty50Data 
let data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12,data13,data14,data15,data16,data17,data18,data19,data20,data21,data22,data23,data24,data25,data26,data27,data28,data29,data30,data31,data32,data33,data34,data35,data36,data37,data38,data39,data40,data41,data42,data43,data44,data45,data46,data47,data48,data49,data50

// after receiving 
function writeToScreen(message,reqNo){
  
  let data = JSON.parse(message);
  const Result = data.Result
  if (!Result) {
    //console.log('Data Not Available');
    // if received Data array the 
  }else{
    //if arr length ids = 1 then we received nifty data
    if (Result.length == 1) {
      console.log(Result[0]);
      nifty50Data ={SYMBOL:data.Result[0].InstrumentIdentifier,LTP: data.Result[0].LastTradePrice,CHNG: data.Result[0].PriceChange,CHANGPercentage: data.Result[0].PriceChangePercentage,OPEN:data.Result[0].Open,PREVCLOSE:data.Result[0].Close,HIGH:data.Result[0].High,LOW:data.Result[0].Low,VOLUME:data.Result[0].TotalQtyTraded,VALUE:data.Result[0].Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
    }
        if (Result.length == 25) {
          console.log('data received');
        for (Data of data.Result) {
            if(Data.InstrumentIdentifier == 'TCS'){
            data1 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
            }
            if(Data.InstrumentIdentifier == 'BAJAJ-AUTO'){
            data2 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
            }
            if(Data.InstrumentIdentifier == 'BPCL'){
            data3 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'INDUSINDBK'){
            data4 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'AXISBANK'){
            data5 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'POWERGRID'){
            data6 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'LT'){
            data7 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'ULTRACEMCO'){
            data8 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'CIPLA'){
            data9 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'ADANIENT'){
            data10 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'GRASIM'){
            data11 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'TATAMOTORS'){
            data12 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'BRITANNIA'){
            data13 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'NTPC'){
            data14 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'DRREDDY'){
            data15 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'BAJFINANCE'){
            data16 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'JSWSTEEL'){
            data17 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'ICICIBANK'){
            data18 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'TITAN'){
            data19 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'HDFCBANK'){
            data20 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'LTIM'){
            data21 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'NESTLEIND'){
            data22 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'COALINDIA'){
            data23 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'APOLLOHOSP'){
            data24 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'SUNPHARMA'){
            data25 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'BAJAJFINSV'){
            
            data26 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'DIVISLAB'){
            data27 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'HDFCLIFE'){
            data28 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'BHARTIARTL'){
            data29 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'MARUTI'){
            data30 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'ADANIPORTS'){
            data31 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'ASIANPAINT'){
            data32 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'WIPRO'){
            data33 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'KOTAKBANK'){
            data34 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'M&M'){
            data35 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'RELIANCE'){
            data36 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'TATACONSUM'){
            data37 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'HINDALCO'){
            data38 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'HEROMOTOCO'){
            data39 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'TECHM'){
            data40 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'SBILIFE'){
            data41 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'ITC'){
            data42 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'ONGC'){
            data43 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'INFY'){
            data44 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'HCLTECH'){
            data45 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'HINDUNILVR'){
            data46 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'UPL'){
            data47 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'SBIN'){
            data48 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'TATASTEEL'){
            data49 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
          if(Data.InstrumentIdentifier == 'EICHERMOT'){
            data50 = {SYMBOL:Data.InstrumentIdentifier,LTP: Data.LastTradePrice,CHNG: Data.PriceChange,CHANGPercentage: Data.PriceChangePercentage,OPEN:Data.Open,PREVCLOSE:Data.Close,HIGH:Data.High,LOW:Data.Low,VOLUME:Data.TotalQtyTraded,VALUE:Data.Value,Date:moment().format('DD-MM-YY'),Time:moment().format('hh.mm')}
          }
        }
        metaData .push(data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12,data13,data14,data15,data16,data17,data18,data19,data20,data21,data22,data23,data24,data25,data26,data27,data28,data29,data30,data31,data32,data33,data34,data35,data36,data37,data38,data39,data40,data41,data42,data43,data44,data45,data46,data47,data48,data49)
    }
    }
    //if meta data length = 49 and data 1 and data 26 and nifty data is defined then
    if (metaData.length == 49 && (data1 == undefined || data26 == undefined || nifty50Data == undefined ) ) {
      metaData = []
      // testWebSocket()
    }
    if (metaData.length == 49 && nifty50Data != undefined &&data1 != undefined && data26 != undefined && data27 != undefined && data50 != undefined ) {
      try{
          let DATA = [
              nifty50Data,data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,
              data11,data12,data13,data14,data15,data16,data17,data18,data19,data20,
              data21, data22,data23,data24,data25,data26,data27,data28,data29,data30, 
              data31,data32,data33,data34,data35,data36,data37,data38,data39,data40, 
              data41,data42,data43,data44,data45,data46,data47,data48,data49,data50
          ]
          
            metaData = []
            console.log('316: covert Data For Sheet1');
              covert1(DATA,0)
              //updated sheet 1
            }catch(error){
              console.log('320: Internet Speed Is SLOW Or Server Not Responding',error.message);
            };
        }
      }
  }catch(error){
    console.log(error);  
  }

//covering data for google sheets
function covert1(data,funcNu){
  try {
      let GetStock = []
      console.log("332: Data converted gsRun S1 >>>")
      
      GetStock.push([data[0].SYMBOL,data[0].OPEN,data[0].HIGH,data[0].LOW,data[0].PREVCLOSE,data[0].LTP,data[0].CHNG,data[0].CHANGPercentage,data[0].VOLUME,data[0].VALUE,data[0].Date,moment().format('hh.mm')]);
      GetStock.push([data[1].SYMBOL,data[1].OPEN,data[1].HIGH,data[1].LOW,data[1].PREVCLOSE,data[1].LTP,data[1].CHNG,data[1].CHANGPercentage,data[1].VOLUME,data[1].VALUE,data[1].Date,moment().format('hh.mm')]);
      GetStock.push([data[2].SYMBOL,data[2].OPEN,data[2].HIGH,data[2].LOW,data[2].PREVCLOSE,data[2].LTP,data[2].CHNG,data[2].CHANGPercentage,data[2].VOLUME,data[2].VALUE,data[2].Date,moment().format('hh.mm')]);
      GetStock.push([data[3].SYMBOL,data[3].OPEN,data[3].HIGH,data[3].LOW,data[3].PREVCLOSE,data[3].LTP,data[3].CHNG,data[3].CHANGPercentage,data[3].VOLUME,data[3].VALUE,data[3].Date,moment().format('hh.mm')]);
      GetStock.push([data[4].SYMBOL,data[4].OPEN,data[4].HIGH,data[4].LOW,data[4].PREVCLOSE,data[4].LTP,data[4].CHNG,data[4].CHANGPercentage,data[4].VOLUME,data[4].VALUE,data[4].Date,moment().format('hh.mm')]);
      GetStock.push([data[5].SYMBOL,data[5].OPEN,data[5].HIGH,data[5].LOW,data[5].PREVCLOSE,data[5].LTP,data[5].CHNG,data[5].CHANGPercentage,data[5].VOLUME,data[5].VALUE,data[5].Date,moment().format('hh.mm')]);
      GetStock.push([data[6].SYMBOL,data[6].OPEN,data[6].HIGH,data[6].LOW,data[6].PREVCLOSE,data[6].LTP,data[6].CHNG,data[6].CHANGPercentage,data[6].VOLUME,data[6].VALUE,data[6].Date,moment().format('hh.mm')]);
      GetStock.push([data[7].SYMBOL,data[7].OPEN,data[7].HIGH,data[7].LOW,data[7].PREVCLOSE,data[7].LTP,data[7].CHNG,data[7].CHANGPercentage,data[7].VOLUME,data[7].VALUE,data[7].Date,moment().format('hh.mm')]);
      GetStock.push([data[8].SYMBOL,data[8].OPEN,data[8].HIGH,data[8].LOW,data[8].PREVCLOSE,data[8].LTP,data[8].CHNG,data[8].CHANGPercentage,data[8].VOLUME,data[8].VALUE,data[8].Date,moment().format('hh.mm')]);
      GetStock.push([data[9].SYMBOL,data[9].OPEN,data[9].HIGH,data[9].LOW,data[9].PREVCLOSE,data[9].LTP,data[9].CHNG,data[9].CHANGPercentage,data[9].VOLUME,data[9].VALUE,data[9].Date,moment().format('hh.mm')]);
      GetStock.push([data[10].SYMBOL,data[10].OPEN,data[10].HIGH,data[10].LOW,data[10].PREVCLOSE,data[10].LTP,data[10].CHNG,data[10].CHANGPercentage,data[10].VOLUME,data[10].VALUE,data[10].Date,moment().format('hh.mm')]);
      GetStock.push([data[11].SYMBOL,data[11].OPEN,data[11].HIGH,data[11].LOW,data[11].PREVCLOSE,data[11].LTP,data[11].CHNG,data[11].CHANGPercentage,data[11].VOLUME,data[11].VALUE,data[11].Date,moment().format('hh.mm')]);
      GetStock.push([data[12].SYMBOL,data[12].OPEN,data[12].HIGH,data[12].LOW,data[12].PREVCLOSE,data[12].LTP,data[12].CHNG,data[12].CHANGPercentage,data[12].VOLUME,data[12].VALUE,data[12].Date,moment().format('hh.mm')]);
      GetStock.push([data[13].SYMBOL,data[13].OPEN,data[13].HIGH,data[13].LOW,data[13].PREVCLOSE,data[13].LTP,data[13].CHNG,data[13].CHANGPercentage,data[13].VOLUME,data[13].VALUE,data[13].Date,moment().format('hh.mm')]);
      GetStock.push([data[14].SYMBOL,data[14].OPEN,data[14].HIGH,data[14].LOW,data[14].PREVCLOSE,data[14].LTP,data[14].CHNG,data[14].CHANGPercentage,data[14].VOLUME,data[14].VALUE,data[14].Date,moment().format('hh.mm')]);
      GetStock.push([data[15].SYMBOL,data[15].OPEN,data[15].HIGH,data[15].LOW,data[15].PREVCLOSE,data[15].LTP,data[15].CHNG,data[15].CHANGPercentage,data[15].VOLUME,data[15].VALUE,data[15].Date,moment().format('hh.mm')]);
      GetStock.push([data[16].SYMBOL,data[16].OPEN,data[16].HIGH,data[16].LOW,data[16].PREVCLOSE,data[16].LTP,data[16].CHNG,data[16].CHANGPercentage,data[16].VOLUME,data[16].VALUE,data[16].Date,moment().format('hh.mm')]);
      GetStock.push([data[17].SYMBOL,data[17].OPEN,data[17].HIGH,data[17].LOW,data[17].PREVCLOSE,data[17].LTP,data[17].CHNG,data[17].CHANGPercentage,data[17].VOLUME,data[17].VALUE,data[17].Date,moment().format('hh.mm')]);
      GetStock.push([data[18].SYMBOL,data[18].OPEN,data[18].HIGH,data[18].LOW,data[18].PREVCLOSE,data[18].LTP,data[18].CHNG,data[18].CHANGPercentage,data[18].VOLUME,data[18].VALUE,data[18].Date,moment().format('hh.mm')]);
      GetStock.push([data[19].SYMBOL,data[19].OPEN,data[19].HIGH,data[19].LOW,data[19].PREVCLOSE,data[19].LTP,data[19].CHNG,data[19].CHANGPercentage,data[19].VOLUME,data[19].VALUE,data[19].Date,moment().format('hh.mm')]);
      GetStock.push([data[20].SYMBOL,data[20].OPEN,data[20].HIGH,data[20].LOW,data[20].PREVCLOSE,data[20].LTP,data[20].CHNG,data[20].CHANGPercentage,data[20].VOLUME,data[20].VALUE,data[20].Date,moment().format('hh.mm')]);
      GetStock.push([data[21].SYMBOL,data[21].OPEN,data[21].HIGH,data[21].LOW,data[21].PREVCLOSE,data[21].LTP,data[21].CHNG,data[21].CHANGPercentage,data[21].VOLUME,data[21].VALUE,data[21].Date,moment().format('hh.mm')]);
      GetStock.push([data[22].SYMBOL,data[22].OPEN,data[22].HIGH,data[22].LOW,data[22].PREVCLOSE,data[22].LTP,data[22].CHNG,data[22].CHANGPercentage,data[22].VOLUME,data[22].VALUE,data[22].Date,moment().format('hh.mm')]);
      GetStock.push([data[23].SYMBOL,data[23].OPEN,data[23].HIGH,data[23].LOW,data[23].PREVCLOSE,data[23].LTP,data[23].CHNG,data[23].CHANGPercentage,data[23].VOLUME,data[23].VALUE,data[23].Date,moment().format('hh.mm')]);
      GetStock.push([data[24].SYMBOL,data[24].OPEN,data[24].HIGH,data[24].LOW,data[24].PREVCLOSE,data[24].LTP,data[24].CHNG,data[24].CHANGPercentage,data[24].VOLUME,data[24].VALUE,data[24].Date,moment().format('hh.mm')]);
      GetStock.push([data[25].SYMBOL,data[25].OPEN,data[25].HIGH,data[25].LOW,data[25].PREVCLOSE,data[25].LTP,data[25].CHNG,data[25].CHANGPercentage,data[25].VOLUME,data[25].VALUE,data[25].Date,moment().format('hh.mm')]);
      GetStock.push([data[26].SYMBOL,data[26].OPEN,data[26].HIGH,data[26].LOW,data[26].PREVCLOSE,data[26].LTP,data[26].CHNG,data[26].CHANGPercentage,data[26].VOLUME,data[26].VALUE,data[26].Date,moment().format('hh.mm')]);
      GetStock.push([data[27].SYMBOL,data[27].OPEN,data[27].HIGH,data[27].LOW,data[27].PREVCLOSE,data[27].LTP,data[27].CHNG,data[27].CHANGPercentage,data[27].VOLUME,data[27].VALUE,data[27].Date,moment().format('hh.mm')]);
      GetStock.push([data[28].SYMBOL,data[28].OPEN,data[28].HIGH,data[28].LOW,data[28].PREVCLOSE,data[28].LTP,data[28].CHNG,data[28].CHANGPercentage,data[28].VOLUME,data[28].VALUE,data[28].Date,moment().format('hh.mm')]);
      GetStock.push([data[29].SYMBOL,data[29].OPEN,data[29].HIGH,data[29].LOW,data[29].PREVCLOSE,data[29].LTP,data[29].CHNG,data[29].CHANGPercentage,data[29].VOLUME,data[29].VALUE,data[29].Date,moment().format('hh.mm')]);
      GetStock.push([data[30].SYMBOL,data[30].OPEN,data[30].HIGH,data[30].LOW,data[30].PREVCLOSE,data[30].LTP,data[30].CHNG,data[30].CHANGPercentage,data[30].VOLUME,data[30].VALUE,data[30].Date,moment().format('hh.mm')]);
      GetStock.push([data[31].SYMBOL,data[31].OPEN,data[31].HIGH,data[31].LOW,data[31].PREVCLOSE,data[31].LTP,data[31].CHNG,data[31].CHANGPercentage,data[31].VOLUME,data[31].VALUE,data[31].Date,moment().format('hh.mm')]);
      GetStock.push([data[32].SYMBOL,data[32].OPEN,data[32].HIGH,data[32].LOW,data[32].PREVCLOSE,data[32].LTP,data[32].CHNG,data[32].CHANGPercentage,data[32].VOLUME,data[32].VALUE,data[32].Date,moment().format('hh.mm')]);
      GetStock.push([data[33].SYMBOL,data[33].OPEN,data[33].HIGH,data[33].LOW,data[33].PREVCLOSE,data[33].LTP,data[33].CHNG,data[33].CHANGPercentage,data[33].VOLUME,data[33].VALUE,data[33].Date,moment().format('hh.mm')]);
      GetStock.push([data[34].SYMBOL,data[34].OPEN,data[34].HIGH,data[34].LOW,data[34].PREVCLOSE,data[34].LTP,data[34].CHNG,data[34].CHANGPercentage,data[34].VOLUME,data[34].VALUE,data[34].Date,moment().format('hh.mm')]);
      GetStock.push([data[35].SYMBOL,data[35].OPEN,data[35].HIGH,data[35].LOW,data[35].PREVCLOSE,data[35].LTP,data[35].CHNG,data[35].CHANGPercentage,data[35].VOLUME,data[35].VALUE,data[35].Date,moment().format('hh.mm')]);
      GetStock.push([data[36].SYMBOL,data[36].OPEN,data[36].HIGH,data[36].LOW,data[36].PREVCLOSE,data[36].LTP,data[36].CHNG,data[36].CHANGPercentage,data[36].VOLUME,data[36].VALUE,data[36].Date,moment().format('hh.mm')]);
      GetStock.push([data[37].SYMBOL,data[37].OPEN,data[37].HIGH,data[37].LOW,data[37].PREVCLOSE,data[37].LTP,data[37].CHNG,data[37].CHANGPercentage,data[37].VOLUME,data[37].VALUE,data[37].Date,moment().format('hh.mm')]);
      GetStock.push([data[38].SYMBOL,data[38].OPEN,data[38].HIGH,data[38].LOW,data[38].PREVCLOSE,data[38].LTP,data[38].CHNG,data[38].CHANGPercentage,data[38].VOLUME,data[38].VALUE,data[38].Date,moment().format('hh.mm')]);
      GetStock.push([data[39].SYMBOL,data[39].OPEN,data[39].HIGH,data[39].LOW,data[39].PREVCLOSE,data[39].LTP,data[39].CHNG,data[39].CHANGPercentage,data[39].VOLUME,data[39].VALUE,data[39].Date,moment().format('hh.mm')]);
      GetStock.push([data[40].SYMBOL,data[40].OPEN,data[40].HIGH,data[40].LOW,data[40].PREVCLOSE,data[40].LTP,data[40].CHNG,data[40].CHANGPercentage,data[40].VOLUME,data[40].VALUE,data[40].Date,moment().format('hh.mm')]);
      GetStock.push([data[41].SYMBOL,data[41].OPEN,data[41].HIGH,data[41].LOW,data[41].PREVCLOSE,data[41].LTP,data[41].CHNG,data[41].CHANGPercentage,data[41].VOLUME,data[41].VALUE,data[41].Date,moment().format('hh.mm')]);
      GetStock.push([data[42].SYMBOL,data[42].OPEN,data[42].HIGH,data[42].LOW,data[42].PREVCLOSE,data[42].LTP,data[42].CHNG,data[42].CHANGPercentage,data[42].VOLUME,data[42].VALUE,data[42].Date,moment().format('hh.mm')]);
      GetStock.push([data[43].SYMBOL,data[43].OPEN,data[43].HIGH,data[43].LOW,data[43].PREVCLOSE,data[43].LTP,data[43].CHNG,data[43].CHANGPercentage,data[43].VOLUME,data[43].VALUE,data[43].Date,moment().format('hh.mm')]);
      GetStock.push([data[44].SYMBOL,data[44].OPEN,data[44].HIGH,data[44].LOW,data[44].PREVCLOSE,data[44].LTP,data[44].CHNG,data[44].CHANGPercentage,data[44].VOLUME,data[44].VALUE,data[44].Date,moment().format('hh.mm')]);
      GetStock.push([data[45].SYMBOL,data[45].OPEN,data[45].HIGH,data[45].LOW,data[45].PREVCLOSE,data[45].LTP,data[45].CHNG,data[45].CHANGPercentage,data[45].VOLUME,data[45].VALUE,data[45].Date,moment().format('hh.mm')]);
      GetStock.push([data[46].SYMBOL,data[46].OPEN,data[46].HIGH,data[46].LOW,data[46].PREVCLOSE,data[46].LTP,data[46].CHNG,data[46].CHANGPercentage,data[46].VOLUME,data[46].VALUE,data[46].Date,moment().format('hh.mm')]);
      GetStock.push([data[47].SYMBOL,data[47].OPEN,data[47].HIGH,data[47].LOW,data[47].PREVCLOSE,data[47].LTP,data[47].CHNG,data[47].CHANGPercentage,data[47].VOLUME,data[47].VALUE,data[47].Date,moment().format('hh.mm')]);
      GetStock.push([data[48].SYMBOL,data[48].OPEN,data[48].HIGH,data[48].LOW,data[48].PREVCLOSE,data[48].LTP,data[48].CHNG,data[48].CHANGPercentage,data[48].VOLUME,data[48].VALUE,data[48].Date,moment().format('hh.mm')]);
      GetStock.push([data[49].SYMBOL,data[49].OPEN,data[49].HIGH,data[49].LOW,data[49].PREVCLOSE,data[49].LTP,data[49].CHNG,data[49].CHANGPercentage,data[49].VOLUME,data[49].VALUE,data[49].Date,moment().format('hh.mm')]);
      GetStock.push([data[50].SYMBOL,data[50].OPEN,data[50].HIGH,data[50].LOW,data[50].PREVCLOSE,data[50].LTP,data[50].CHNG,data[50].CHANGPercentage,data[50].VOLUME,data[50].VALUE,data[49].Date,moment().format('hh.mm')]);
      if(funcNu==0){
          gsRun(client,GetStock)
      }
  } catch (error) {
      console.log("388: Error While Converting data",error);
  }
} 

function covert(data,funcNu){
  try {
      let GetStock = []
      console.log("395: Data converted >>>")
      GetStock.push([data[0].SYMBOL,data[0].LTP,data[0].CHNG,data[0].CHANGPercentage,data[0].OPEN,data[0].PREVCLOSE,data[0].HIGH,data[0].LOW,data[0].VOLUME,data[0].VALUE,data[0].Date,data[0].Time]);
      GetStock.push([data[1].SYMBOL,data[1].LTP,data[1].CHNG,data[1].CHANGPercentage,data[1].OPEN,data[1].PREVCLOSE,data[1].HIGH,data[1].LOW,data[1].VOLUME,data[1].VALUE,data[1].Date,data[1].Time]);
      GetStock.push([data[2].SYMBOL,data[2].LTP,data[2].CHNG,data[2].CHANGPercentage,data[2].OPEN,data[2].PREVCLOSE,data[2].HIGH,data[2].LOW,data[2].VOLUME,data[2].VALUE,data[2].Date,data[2].Time]);
      GetStock.push([data[3].SYMBOL,data[3].LTP,data[3].CHNG,data[3].CHANGPercentage,data[3].OPEN,data[3].PREVCLOSE,data[3].HIGH,data[3].LOW,data[3].VOLUME,data[3].VALUE,data[3].Date,data[3].Time]);
      GetStock.push([data[4].SYMBOL,data[4].LTP,data[4].CHNG,data[4].CHANGPercentage,data[4].OPEN,data[4].PREVCLOSE,data[4].HIGH,data[4].LOW,data[4].VOLUME,data[4].VALUE,data[4].Date,data[4].Time]);
      GetStock.push([data[5].SYMBOL,data[5].LTP,data[5].CHNG,data[5].CHANGPercentage,data[5].OPEN,data[5].PREVCLOSE,data[5].HIGH,data[5].LOW,data[5].VOLUME,data[5].VALUE,data[5].Date,data[5].Time]);
      GetStock.push([data[6].SYMBOL,data[6].LTP,data[6].CHNG,data[6].CHANGPercentage,data[6].OPEN,data[6].PREVCLOSE,data[6].HIGH,data[6].LOW,data[6].VOLUME,data[6].VALUE,data[6].Date,data[6].Time]);
      GetStock.push([data[7].SYMBOL,data[7].LTP,data[7].CHNG,data[7].CHANGPercentage,data[7].OPEN,data[7].PREVCLOSE,data[7].HIGH,data[7].LOW,data[7].VOLUME,data[7].VALUE,data[7].Date,data[7].Time]);
      GetStock.push([data[8].SYMBOL,data[8].LTP,data[8].CHNG,data[8].CHANGPercentage,data[8].OPEN,data[8].PREVCLOSE,data[8].HIGH,data[8].LOW,data[8].VOLUME,data[8].VALUE,data[8].Date,data[8].Time]);
      GetStock.push([data[9].SYMBOL,data[9].LTP,data[9].CHNG,data[9].CHANGPercentage,data[9].OPEN,data[9].PREVCLOSE,data[9].HIGH,data[9].LOW,data[9].VOLUME,data[9].VALUE,data[9].Date,data[9].Time]);
      GetStock.push([data[10].SYMBOL,data[10].LTP,data[10].CHNG,data[10].CHANGPercentage,data[10].OPEN,data[10].PREVCLOSE,data[10].HIGH,data[10].LOW,data[10].VOLUME,data[10].VALUE,data[10].Date,data[10].Time]);
      GetStock.push([data[11].SYMBOL,data[11].LTP,data[11].CHNG,data[11].CHANGPercentage,data[11].OPEN,data[11].PREVCLOSE,data[11].HIGH,data[11].LOW,data[11].VOLUME,data[11].VALUE,data[11].Date,data[11].Time]);
      GetStock.push([data[12].SYMBOL,data[12].LTP,data[12].CHNG,data[12].CHANGPercentage,data[12].OPEN,data[12].PREVCLOSE,data[12].HIGH,data[12].LOW,data[12].VOLUME,data[12].VALUE,data[12].Date,data[12].Time]);
      GetStock.push([data[13].SYMBOL,data[13].LTP,data[13].CHNG,data[13].CHANGPercentage,data[13].OPEN,data[13].PREVCLOSE,data[13].HIGH,data[13].LOW,data[13].VOLUME,data[13].VALUE,data[13].Date,data[13].Time]);
      GetStock.push([data[14].SYMBOL,data[14].LTP,data[14].CHNG,data[14].CHANGPercentage,data[14].OPEN,data[14].PREVCLOSE,data[14].HIGH,data[14].LOW,data[14].VOLUME,data[14].VALUE,data[14].Date,data[14].Time]);
      GetStock.push([data[15].SYMBOL,data[15].LTP,data[15].CHNG,data[15].CHANGPercentage,data[15].OPEN,data[15].PREVCLOSE,data[15].HIGH,data[15].LOW,data[15].VOLUME,data[15].VALUE,data[15].Date,data[15].Time]);
      GetStock.push([data[16].SYMBOL,data[16].LTP,data[16].CHNG,data[16].CHANGPercentage,data[16].OPEN,data[16].PREVCLOSE,data[16].HIGH,data[16].LOW,data[16].VOLUME,data[16].VALUE,data[16].Date,data[16].Time]);
      GetStock.push([data[17].SYMBOL,data[17].LTP,data[17].CHNG,data[17].CHANGPercentage,data[17].OPEN,data[17].PREVCLOSE,data[17].HIGH,data[17].LOW,data[17].VOLUME,data[17].VALUE,data[17].Date,data[17].Time]);
      GetStock.push([data[18].SYMBOL,data[18].LTP,data[18].CHNG,data[18].CHANGPercentage,data[18].OPEN,data[18].PREVCLOSE,data[18].HIGH,data[18].LOW,data[18].VOLUME,data[18].VALUE,data[18].Date,data[18].Time]);
      GetStock.push([data[19].SYMBOL,data[19].LTP,data[19].CHNG,data[19].CHANGPercentage,data[19].OPEN,data[19].PREVCLOSE,data[19].HIGH,data[19].LOW,data[19].VOLUME,data[19].VALUE,data[19].Date,data[19].Time]);
      GetStock.push([data[20].SYMBOL,data[20].LTP,data[20].CHNG,data[20].CHANGPercentage,data[20].OPEN,data[20].PREVCLOSE,data[20].HIGH,data[20].LOW,data[20].VOLUME,data[20].VALUE,data[20].Date,data[20].Time]);
      GetStock.push([data[21].SYMBOL,data[21].LTP,data[21].CHNG,data[21].CHANGPercentage,data[21].OPEN,data[21].PREVCLOSE,data[21].HIGH,data[21].LOW,data[21].VOLUME,data[21].VALUE,data[21].Date,data[21].Time]);
      GetStock.push([data[22].SYMBOL,data[22].LTP,data[22].CHNG,data[22].CHANGPercentage,data[22].OPEN,data[22].PREVCLOSE,data[22].HIGH,data[22].LOW,data[22].VOLUME,data[22].VALUE,data[22].Date,data[22].Time]);
      GetStock.push([data[23].SYMBOL,data[23].LTP,data[23].CHNG,data[23].CHANGPercentage,data[23].OPEN,data[23].PREVCLOSE,data[23].HIGH,data[23].LOW,data[23].VOLUME,data[23].VALUE,data[23].Date,data[23].Time]);
      GetStock.push([data[24].SYMBOL,data[24].LTP,data[24].CHNG,data[24].CHANGPercentage,data[24].OPEN,data[24].PREVCLOSE,data[24].HIGH,data[24].LOW,data[24].VOLUME,data[24].VALUE,data[24].Date,data[24].Time]);
      GetStock.push([data[25].SYMBOL,data[25].LTP,data[25].CHNG,data[25].CHANGPercentage,data[25].OPEN,data[25].PREVCLOSE,data[25].HIGH,data[25].LOW,data[25].VOLUME,data[25].VALUE,data[25].Date,data[25].Time]);
      GetStock.push([data[26].SYMBOL,data[26].LTP,data[26].CHNG,data[26].CHANGPercentage,data[26].OPEN,data[26].PREVCLOSE,data[26].HIGH,data[26].LOW,data[26].VOLUME,data[26].VALUE,data[26].Date,data[26].Time]);
      GetStock.push([data[27].SYMBOL,data[27].LTP,data[27].CHNG,data[27].CHANGPercentage,data[27].OPEN,data[27].PREVCLOSE,data[27].HIGH,data[27].LOW,data[27].VOLUME,data[27].VALUE,data[27].Date,data[27].Time]);
      GetStock.push([data[28].SYMBOL,data[28].LTP,data[28].CHNG,data[28].CHANGPercentage,data[28].OPEN,data[28].PREVCLOSE,data[28].HIGH,data[28].LOW,data[28].VOLUME,data[28].VALUE,data[28].Date,data[28].Time]);
      GetStock.push([data[29].SYMBOL,data[29].LTP,data[29].CHNG,data[29].CHANGPercentage,data[29].OPEN,data[29].PREVCLOSE,data[29].HIGH,data[29].LOW,data[29].VOLUME,data[29].VALUE,data[29].Date,data[29].Time]);
      GetStock.push([data[30].SYMBOL,data[30].LTP,data[30].CHNG,data[30].CHANGPercentage,data[30].OPEN,data[30].PREVCLOSE,data[30].HIGH,data[30].LOW,data[30].VOLUME,data[30].VALUE,data[30].Date,data[30].Time]);
      GetStock.push([data[31].SYMBOL,data[31].LTP,data[31].CHNG,data[31].CHANGPercentage,data[31].OPEN,data[31].PREVCLOSE,data[31].HIGH,data[31].LOW,data[31].VOLUME,data[31].VALUE,data[31].Date,data[31].Time]);
      GetStock.push([data[32].SYMBOL,data[32].LTP,data[32].CHNG,data[32].CHANGPercentage,data[32].OPEN,data[32].PREVCLOSE,data[32].HIGH,data[32].LOW,data[32].VOLUME,data[32].VALUE,data[32].Date,data[32].Time]);
      GetStock.push([data[33].SYMBOL,data[33].LTP,data[33].CHNG,data[33].CHANGPercentage,data[33].OPEN,data[33].PREVCLOSE,data[33].HIGH,data[33].LOW,data[33].VOLUME,data[33].VALUE,data[33].Date,data[33].Time]);
      GetStock.push([data[34].SYMBOL,data[34].LTP,data[34].CHNG,data[34].CHANGPercentage,data[34].OPEN,data[34].PREVCLOSE,data[34].HIGH,data[34].LOW,data[34].VOLUME,data[34].VALUE,data[34].Date,data[34].Time]);
      GetStock.push([data[35].SYMBOL,data[35].LTP,data[35].CHNG,data[35].CHANGPercentage,data[35].OPEN,data[35].PREVCLOSE,data[35].HIGH,data[35].LOW,data[35].VOLUME,data[35].VALUE,data[35].Date,data[35].Time]);
      GetStock.push([data[36].SYMBOL,data[36].LTP,data[36].CHNG,data[36].CHANGPercentage,data[36].OPEN,data[36].PREVCLOSE,data[36].HIGH,data[36].LOW,data[36].VOLUME,data[36].VALUE,data[36].Date,data[36].Time]);
      GetStock.push([data[37].SYMBOL,data[37].LTP,data[37].CHNG,data[37].CHANGPercentage,data[37].OPEN,data[37].PREVCLOSE,data[37].HIGH,data[37].LOW,data[37].VOLUME,data[37].VALUE,data[37].Date,data[37].Time]);
      GetStock.push([data[38].SYMBOL,data[38].LTP,data[38].CHNG,data[38].CHANGPercentage,data[38].OPEN,data[38].PREVCLOSE,data[38].HIGH,data[38].LOW,data[38].VOLUME,data[38].VALUE,data[38].Date,data[38].Time]);
      GetStock.push([data[39].SYMBOL,data[39].LTP,data[39].CHNG,data[39].CHANGPercentage,data[39].OPEN,data[39].PREVCLOSE,data[39].HIGH,data[39].LOW,data[39].VOLUME,data[39].VALUE,data[39].Date,data[39].Time]);
      GetStock.push([data[40].SYMBOL,data[40].LTP,data[40].CHNG,data[40].CHANGPercentage,data[40].OPEN,data[40].PREVCLOSE,data[40].HIGH,data[40].LOW,data[40].VOLUME,data[40].VALUE,data[40].Date,data[40].Time]);
      GetStock.push([data[41].SYMBOL,data[41].LTP,data[41].CHNG,data[41].CHANGPercentage,data[41].OPEN,data[41].PREVCLOSE,data[41].HIGH,data[41].LOW,data[41].VOLUME,data[41].VALUE,data[41].Date,data[41].Time]);
      GetStock.push([data[42].SYMBOL,data[42].LTP,data[42].CHNG,data[42].CHANGPercentage,data[42].OPEN,data[42].PREVCLOSE,data[42].HIGH,data[42].LOW,data[42].VOLUME,data[42].VALUE,data[42].Date,data[42].Time]);
      GetStock.push([data[43].SYMBOL,data[43].LTP,data[43].CHNG,data[43].CHANGPercentage,data[43].OPEN,data[43].PREVCLOSE,data[43].HIGH,data[43].LOW,data[43].VOLUME,data[43].VALUE,data[43].Date,data[43].Time]);
      GetStock.push([data[44].SYMBOL,data[44].LTP,data[44].CHNG,data[44].CHANGPercentage,data[44].OPEN,data[44].PREVCLOSE,data[44].HIGH,data[44].LOW,data[44].VOLUME,data[44].VALUE,data[44].Date,data[44].Time]);
      GetStock.push([data[45].SYMBOL,data[45].LTP,data[45].CHNG,data[45].CHANGPercentage,data[45].OPEN,data[45].PREVCLOSE,data[45].HIGH,data[45].LOW,data[45].VOLUME,data[45].VALUE,data[45].Date,data[45].Time]);
      GetStock.push([data[46].SYMBOL,data[46].LTP,data[46].CHNG,data[46].CHANGPercentage,data[46].OPEN,data[46].PREVCLOSE,data[46].HIGH,data[46].LOW,data[46].VOLUME,data[46].VALUE,data[46].Date,data[46].Time]);
      GetStock.push([data[47].SYMBOL,data[47].LTP,data[47].CHNG,data[47].CHANGPercentage,data[47].OPEN,data[47].PREVCLOSE,data[47].HIGH,data[47].LOW,data[47].VOLUME,data[47].VALUE,data[47].Date,data[47].Time]);
      GetStock.push([data[48].SYMBOL,data[48].LTP,data[48].CHNG,data[48].CHANGPercentage,data[48].OPEN,data[48].PREVCLOSE,data[48].HIGH,data[48].LOW,data[48].VOLUME,data[48].VALUE,data[48].Date,data[48].Time]);
      GetStock.push([data[49].SYMBOL,data[49].LTP,data[49].CHNG,data[49].CHANGPercentage,data[49].OPEN,data[49].PREVCLOSE,data[49].HIGH,data[49].LOW,data[49].VOLUME,data[49].VALUE,data[49].Date,data[49].Time]);
      GetStock.push([data[50].SYMBOL,data[50].LTP,data[50].CHNG,data[50].CHANGPercentage,data[50].OPEN,data[50].PREVCLOSE,data[50].HIGH,data[50].LOW,data[50].VOLUME,data[50].VALUE,data[50].Date,data[50].Time]);
          if(funcNu==1){
              gsRun2(client,GetStock)
          }
          if(funcNu==2){
              gsRun4(client,GetStock)
          }
  } catch (error) {
      console.log("454: Error While Converting data",error);
  }
} 

//insert into sheet 1
async function gsRun(client,stocksData){
try {
let nifty50Data = {SYMBOL:stocksData[0][0],LTP: stocksData[0][1],CHNG: stocksData[0][2],CHANGPercentage: stocksData[0][3],OPEN: stocksData[0][4],PREVCLOSE:stocksData[0][5],HIGH:stocksData[0][6],LOW:stocksData[0][7],VOLUME:stocksData[0][8],VALUE:stocksData[0][9],Date:stocksData[0][10],Time:stocksData[0][11]}
let data1 = {SYMBOL:stocksData[1][0],LTP: stocksData[1][1],CHNG: stocksData[1][2],CHANGPercentage: stocksData[1][3],OPEN: stocksData[1][4],PREVCLOSE:stocksData[1][5],HIGH:stocksData[1][6],LOW:stocksData[1][7],VOLUME:stocksData[1][8],VALUE:stocksData[1][9],Date:stocksData[1][10],Time:stocksData[1][11]}
let data2 = {SYMBOL:stocksData[2][0],LTP: stocksData[2][1],CHNG: stocksData[2][2],CHANGPercentage: stocksData[2][3],OPEN: stocksData[2][4],PREVCLOSE:stocksData[2][5],HIGH:stocksData[2][6],LOW:stocksData[2][7],VOLUME:stocksData[2][8],VALUE:stocksData[2][9],Date:stocksData[2][10],Time:stocksData[2][11]}
let data3 = {SYMBOL:stocksData[3][0],LTP: stocksData[3][1],CHNG: stocksData[3][2],CHANGPercentage: stocksData[3][3],OPEN: stocksData[3][4],PREVCLOSE:stocksData[3][5],HIGH:stocksData[3][6],LOW:stocksData[3][7],VOLUME:stocksData[3][8],VALUE:stocksData[3][9],Date:stocksData[3][10],Time:stocksData[3][11]}
let data4 = {SYMBOL:stocksData[4][0],LTP: stocksData[4][1],CHNG: stocksData[4][2],CHANGPercentage: stocksData[4][3],OPEN: stocksData[4][4],PREVCLOSE:stocksData[4][5],HIGH:stocksData[4][6],LOW:stocksData[4][7],VOLUME:stocksData[4][8],VALUE:stocksData[4][9],Date:stocksData[4][10],Time:stocksData[4][11]}
let data5 = {SYMBOL:stocksData[5][0],LTP: stocksData[5][1],CHNG: stocksData[5][2],CHANGPercentage: stocksData[5][3],OPEN: stocksData[5][4],PREVCLOSE:stocksData[5][5],HIGH:stocksData[5][6],LOW:stocksData[5][7],VOLUME:stocksData[5][8],VALUE:stocksData[5][9],Date:stocksData[5][10],Time:stocksData[5][11]}
let data6 = {SYMBOL:stocksData[6][0],LTP: stocksData[6][1],CHNG: stocksData[6][2],CHANGPercentage: stocksData[6][3],OPEN: stocksData[6][4],PREVCLOSE:stocksData[6][5],HIGH:stocksData[6][6],LOW:stocksData[6][7],VOLUME:stocksData[6][8],VALUE:stocksData[6][9],Date:stocksData[6][10],Time:stocksData[6][11]}
let data7 = {SYMBOL:stocksData[7][0],LTP: stocksData[7][1],CHNG: stocksData[7][2],CHANGPercentage: stocksData[7][3],OPEN: stocksData[7][4],PREVCLOSE:stocksData[7][5],HIGH:stocksData[7][6],LOW:stocksData[7][7],VOLUME:stocksData[7][8],VALUE:stocksData[7][9],Date:stocksData[7][10],Time:stocksData[7][11]}
let data8 = {SYMBOL:stocksData[8][0],LTP: stocksData[8][1],CHNG: stocksData[8][2],CHANGPercentage: stocksData[8][3],OPEN: stocksData[8][4],PREVCLOSE:stocksData[8][5],HIGH:stocksData[8][6],LOW:stocksData[8][7],VOLUME:stocksData[8][8],VALUE:stocksData[8][9],Date:stocksData[8][10],Time:stocksData[8][11]}
let data9 = {SYMBOL:stocksData[9][0],LTP: stocksData[9][1],CHNG: stocksData[9][2],CHANGPercentage: stocksData[9][3],OPEN: stocksData[9][4],PREVCLOSE:stocksData[9][5],HIGH:stocksData[9][6],LOW:stocksData[9][7],VOLUME:stocksData[9][8],VALUE:stocksData[9][9],Date:stocksData[9][10],Time:stocksData[9][11]}
let data10 = {SYMBOL:stocksData[10][0],LTP: stocksData[10][1],CHNG: stocksData[10][2],CHANGPercentage: stocksData[10][3],OPEN: stocksData[10][4],PREVCLOSE:stocksData[10][5],HIGH:stocksData[10][6],LOW:stocksData[10][7],VOLUME:stocksData[10][8],VALUE:stocksData[10][9],Date:stocksData[10][10],Time:stocksData[10][11]}
let data11 = {SYMBOL:stocksData[11][0],LTP: stocksData[11][1],CHNG: stocksData[11][2],CHANGPercentage: stocksData[11][3],OPEN: stocksData[11][4],PREVCLOSE:stocksData[11][5],HIGH:stocksData[11][6],LOW:stocksData[11][7],VOLUME:stocksData[11][8],VALUE:stocksData[11][9],Date:stocksData[11][10],Time:stocksData[11][11]}
let data12 = {SYMBOL:stocksData[12][0],LTP: stocksData[12][1],CHNG: stocksData[12][2],CHANGPercentage: stocksData[12][3],OPEN: stocksData[12][4],PREVCLOSE:stocksData[12][5],HIGH:stocksData[12][6],LOW:stocksData[12][7],VOLUME:stocksData[12][8],VALUE:stocksData[12][9],Date:stocksData[12][10],Time:stocksData[12][11]}
let data13 = {SYMBOL:stocksData[13][0],LTP: stocksData[13][1],CHNG: stocksData[13][2],CHANGPercentage: stocksData[13][3],OPEN: stocksData[13][4],PREVCLOSE:stocksData[13][5],HIGH:stocksData[13][6],LOW:stocksData[13][7],VOLUME:stocksData[13][8],VALUE:stocksData[13][9],Date:stocksData[13][10],Time:stocksData[13][11]}
let data14 = {SYMBOL:stocksData[14][0],LTP: stocksData[14][1],CHNG: stocksData[14][2],CHANGPercentage: stocksData[14][3],OPEN: stocksData[14][4],PREVCLOSE:stocksData[14][5],HIGH:stocksData[14][6],LOW:stocksData[14][7],VOLUME:stocksData[14][8],VALUE:stocksData[14][9],Date:stocksData[14][10],Time:stocksData[14][11]}
let data15 = {SYMBOL:stocksData[15][0],LTP: stocksData[15][1],CHNG: stocksData[15][2],CHANGPercentage: stocksData[15][3],OPEN: stocksData[15][4],PREVCLOSE:stocksData[15][5],HIGH:stocksData[15][6],LOW:stocksData[15][7],VOLUME:stocksData[15][8],VALUE:stocksData[15][9],Date:stocksData[15][10],Time:stocksData[15][11]}
let data16 = {SYMBOL:stocksData[16][0],LTP: stocksData[16][1],CHNG: stocksData[16][2],CHANGPercentage: stocksData[16][3],OPEN: stocksData[16][4],PREVCLOSE:stocksData[16][5],HIGH:stocksData[16][6],LOW:stocksData[16][7],VOLUME:stocksData[16][8],VALUE:stocksData[16][9],Date:stocksData[16][10],Time:stocksData[16][11]}
let data17 = {SYMBOL:stocksData[17][0],LTP: stocksData[17][1],CHNG: stocksData[17][2],CHANGPercentage: stocksData[17][3],OPEN: stocksData[17][4],PREVCLOSE:stocksData[17][5],HIGH:stocksData[17][6],LOW:stocksData[17][7],VOLUME:stocksData[17][8],VALUE:stocksData[17][9],Date:stocksData[17][10],Time:stocksData[17][11]}
let data18 = {SYMBOL:stocksData[18][0],LTP: stocksData[18][1],CHNG: stocksData[18][2],CHANGPercentage: stocksData[18][3],OPEN: stocksData[18][4],PREVCLOSE:stocksData[18][5],HIGH:stocksData[18][6],LOW:stocksData[18][7],VOLUME:stocksData[18][8],VALUE:stocksData[18][9],Date:stocksData[18][10],Time:stocksData[18][11]}
let data19 = {SYMBOL:stocksData[19][0],LTP: stocksData[19][1],CHNG: stocksData[19][2],CHANGPercentage: stocksData[19][3],OPEN: stocksData[19][4],PREVCLOSE:stocksData[19][5],HIGH:stocksData[19][6],LOW:stocksData[19][7],VOLUME:stocksData[19][8],VALUE:stocksData[19][9],Date:stocksData[19][10],Time:stocksData[19][11]}
let data20 = {SYMBOL:stocksData[20][0],LTP: stocksData[20][1],CHNG: stocksData[20][2],CHANGPercentage: stocksData[20][3],OPEN: stocksData[20][4],PREVCLOSE:stocksData[20][5],HIGH:stocksData[20][6],LOW:stocksData[20][7],VOLUME:stocksData[20][8],VALUE:stocksData[20][9],Date:stocksData[20][10],Time:stocksData[20][11]}
let data21 = {SYMBOL:stocksData[21][0],LTP: stocksData[21][1],CHNG: stocksData[21][2],CHANGPercentage: stocksData[21][3],OPEN: stocksData[21][4],PREVCLOSE:stocksData[21][5],HIGH:stocksData[21][6],LOW:stocksData[21][7],VOLUME:stocksData[21][8],VALUE:stocksData[21][9],Date:stocksData[21][10],Time:stocksData[21][11]}
let data22 = {SYMBOL:stocksData[22][0],LTP: stocksData[22][1],CHNG: stocksData[22][2],CHANGPercentage: stocksData[22][3],OPEN: stocksData[22][4],PREVCLOSE:stocksData[22][5],HIGH:stocksData[22][6],LOW:stocksData[22][7],VOLUME:stocksData[22][8],VALUE:stocksData[22][9],Date:stocksData[22][10],Time:stocksData[22][11]}
let data23 = {SYMBOL:stocksData[23][0],LTP: stocksData[23][1],CHNG: stocksData[23][2],CHANGPercentage: stocksData[23][3],OPEN: stocksData[23][4],PREVCLOSE:stocksData[23][5],HIGH:stocksData[23][6],LOW:stocksData[23][7],VOLUME:stocksData[23][8],VALUE:stocksData[23][9],Date:stocksData[23][10],Time:stocksData[23][11]}
let data24 = {SYMBOL:stocksData[24][0],LTP: stocksData[24][1],CHNG: stocksData[24][2],CHANGPercentage: stocksData[24][3],OPEN: stocksData[24][4],PREVCLOSE:stocksData[24][5],HIGH:stocksData[24][6],LOW:stocksData[24][7],VOLUME:stocksData[24][8],VALUE:stocksData[24][9],Date:stocksData[24][10],Time:stocksData[24][11]}
let data25 = {SYMBOL:stocksData[25][0],LTP: stocksData[25][1],CHNG: stocksData[25][2],CHANGPercentage: stocksData[25][3],OPEN: stocksData[25][4],PREVCLOSE:stocksData[25][5],HIGH:stocksData[25][6],LOW:stocksData[25][7],VOLUME:stocksData[25][8],VALUE:stocksData[25][9],Date:stocksData[25][10],Time:stocksData[25][11]}
let data26 = {SYMBOL:stocksData[26][0],LTP: stocksData[26][1],CHNG: stocksData[26][2],CHANGPercentage: stocksData[26][3],OPEN: stocksData[26][4],PREVCLOSE:stocksData[26][5],HIGH:stocksData[26][6],LOW:stocksData[26][7],VOLUME:stocksData[26][8],VALUE:stocksData[26][9],Date:stocksData[26][10],Time:stocksData[26][11]}
let data27 = {SYMBOL:stocksData[27][0],LTP: stocksData[27][1],CHNG: stocksData[27][2],CHANGPercentage: stocksData[27][3],OPEN: stocksData[27][4],PREVCLOSE:stocksData[27][5],HIGH:stocksData[27][6],LOW:stocksData[27][7],VOLUME:stocksData[27][8],VALUE:stocksData[27][9],Date:stocksData[27][10],Time:stocksData[27][11]}
let data28 = {SYMBOL:stocksData[28][0],LTP: stocksData[28][1],CHNG: stocksData[28][2],CHANGPercentage: stocksData[28][3],OPEN: stocksData[28][4],PREVCLOSE:stocksData[28][5],HIGH:stocksData[28][6],LOW:stocksData[28][7],VOLUME:stocksData[28][8],VALUE:stocksData[28][9],Date:stocksData[28][10],Time:stocksData[28][11]}
let data29 = {SYMBOL:stocksData[29][0],LTP: stocksData[29][1],CHNG: stocksData[29][2],CHANGPercentage: stocksData[29][3],OPEN: stocksData[29][4],PREVCLOSE:stocksData[29][5],HIGH:stocksData[29][6],LOW:stocksData[29][7],VOLUME:stocksData[29][8],VALUE:stocksData[29][9],Date:stocksData[29][10],Time:stocksData[29][11]}
let data30 = {SYMBOL:stocksData[30][0],LTP: stocksData[30][1],CHNG: stocksData[30][2],CHANGPercentage: stocksData[30][3],OPEN: stocksData[30][4],PREVCLOSE:stocksData[30][5],HIGH:stocksData[30][6],LOW:stocksData[30][7],VOLUME:stocksData[30][8],VALUE:stocksData[30][9],Date:stocksData[30][10],Time:stocksData[30][11]}
let data31 = {SYMBOL:stocksData[31][0],LTP: stocksData[31][1],CHNG: stocksData[31][2],CHANGPercentage: stocksData[31][3],OPEN: stocksData[31][4],PREVCLOSE:stocksData[31][5],HIGH:stocksData[31][6],LOW:stocksData[31][7],VOLUME:stocksData[31][8],VALUE:stocksData[31][9],Date:stocksData[31][10],Time:stocksData[31][11]}
let data32 = {SYMBOL:stocksData[32][0],LTP: stocksData[32][1],CHNG: stocksData[32][2],CHANGPercentage: stocksData[32][3],OPEN: stocksData[32][4],PREVCLOSE:stocksData[32][5],HIGH:stocksData[32][6],LOW:stocksData[32][7],VOLUME:stocksData[32][8],VALUE:stocksData[32][9],Date:stocksData[32][10],Time:stocksData[32][11]}
let data33 = {SYMBOL:stocksData[33][0],LTP: stocksData[33][1],CHNG: stocksData[33][2],CHANGPercentage: stocksData[33][3],OPEN: stocksData[33][4],PREVCLOSE:stocksData[33][5],HIGH:stocksData[33][6],LOW:stocksData[33][7],VOLUME:stocksData[33][8],VALUE:stocksData[33][9],Date:stocksData[33][10],Time:stocksData[33][11]}
let data34 = {SYMBOL:stocksData[34][0],LTP: stocksData[34][1],CHNG: stocksData[34][2],CHANGPercentage: stocksData[34][3],OPEN: stocksData[34][4],PREVCLOSE:stocksData[34][5],HIGH:stocksData[34][6],LOW:stocksData[34][7],VOLUME:stocksData[34][8],VALUE:stocksData[34][9],Date:stocksData[34][10],Time:stocksData[34][11]}
let data35 = {SYMBOL:stocksData[35][0],LTP: stocksData[35][1],CHNG: stocksData[35][2],CHANGPercentage: stocksData[35][3],OPEN: stocksData[35][4],PREVCLOSE:stocksData[35][5],HIGH:stocksData[35][6],LOW:stocksData[35][7],VOLUME:stocksData[35][8],VALUE:stocksData[35][9],Date:stocksData[35][10],Time:stocksData[35][11]}
let data36 = {SYMBOL:stocksData[36][0],LTP: stocksData[36][1],CHNG: stocksData[36][2],CHANGPercentage: stocksData[36][3],OPEN: stocksData[36][4],PREVCLOSE:stocksData[36][5],HIGH:stocksData[36][6],LOW:stocksData[36][7],VOLUME:stocksData[36][8],VALUE:stocksData[36][9],Date:stocksData[36][10],Time:stocksData[36][11]}
let data37 = {SYMBOL:stocksData[37][0],LTP: stocksData[37][1],CHNG: stocksData[37][2],CHANGPercentage: stocksData[37][3],OPEN: stocksData[37][4],PREVCLOSE:stocksData[37][5],HIGH:stocksData[37][6],LOW:stocksData[37][7],VOLUME:stocksData[37][8],VALUE:stocksData[37][9],Date:stocksData[37][10],Time:stocksData[37][11]}
let data38 = {SYMBOL:stocksData[38][0],LTP: stocksData[38][1],CHNG: stocksData[38][2],CHANGPercentage: stocksData[38][3],OPEN: stocksData[38][4],PREVCLOSE:stocksData[38][5],HIGH:stocksData[38][6],LOW:stocksData[38][7],VOLUME:stocksData[38][8],VALUE:stocksData[38][9],Date:stocksData[38][10],Time:stocksData[38][11]}
let data39 = {SYMBOL:stocksData[39][0],LTP: stocksData[39][1],CHNG: stocksData[39][2],CHANGPercentage: stocksData[39][3],OPEN: stocksData[39][4],PREVCLOSE:stocksData[39][5],HIGH:stocksData[39][6],LOW:stocksData[39][7],VOLUME:stocksData[39][8],VALUE:stocksData[39][9],Date:stocksData[39][10],Time:stocksData[39][11]}
let data40 = {SYMBOL:stocksData[40][0],LTP: stocksData[40][1],CHNG: stocksData[40][2],CHANGPercentage: stocksData[40][3],OPEN: stocksData[40][4],PREVCLOSE:stocksData[40][5],HIGH:stocksData[40][6],LOW:stocksData[40][7],VOLUME:stocksData[40][8],VALUE:stocksData[40][9],Date:stocksData[40][10],Time:stocksData[40][11]}
let data41 = {SYMBOL:stocksData[41][0],LTP: stocksData[41][1],CHNG: stocksData[41][2],CHANGPercentage: stocksData[41][3],OPEN: stocksData[41][4],PREVCLOSE:stocksData[41][5],HIGH:stocksData[41][6],LOW:stocksData[41][7],VOLUME:stocksData[41][8],VALUE:stocksData[41][9],Date:stocksData[41][10],Time:stocksData[41][11]}
let data42 = {SYMBOL:stocksData[42][0],LTP: stocksData[42][1],CHNG: stocksData[42][2],CHANGPercentage: stocksData[42][3],OPEN: stocksData[42][4],PREVCLOSE:stocksData[42][5],HIGH:stocksData[42][6],LOW:stocksData[42][7],VOLUME:stocksData[42][8],VALUE:stocksData[42][9],Date:stocksData[42][10],Time:stocksData[42][11]}
let data43 = {SYMBOL:stocksData[43][0],LTP: stocksData[43][1],CHNG: stocksData[43][2],CHANGPercentage: stocksData[43][3],OPEN: stocksData[43][4],PREVCLOSE:stocksData[43][5],HIGH:stocksData[43][6],LOW:stocksData[43][7],VOLUME:stocksData[43][8],VALUE:stocksData[43][9],Date:stocksData[43][10],Time:stocksData[43][11]}
let data44 = {SYMBOL:stocksData[44][0],LTP: stocksData[44][1],CHNG: stocksData[44][2],CHANGPercentage: stocksData[44][3],OPEN: stocksData[44][4],PREVCLOSE:stocksData[44][5],HIGH:stocksData[44][6],LOW:stocksData[44][7],VOLUME:stocksData[44][8],VALUE:stocksData[44][9],Date:stocksData[44][10],Time:stocksData[44][11]}
let data45 = {SYMBOL:stocksData[45][0],LTP: stocksData[45][1],CHNG: stocksData[45][2],CHANGPercentage: stocksData[45][3],OPEN: stocksData[45][4],PREVCLOSE:stocksData[45][5],HIGH:stocksData[45][6],LOW:stocksData[45][7],VOLUME:stocksData[45][8],VALUE:stocksData[45][9],Date:stocksData[45][10],Time:stocksData[45][11]}
let data46 = {SYMBOL:stocksData[46][0],LTP: stocksData[46][1],CHNG: stocksData[46][2],CHANGPercentage: stocksData[46][3],OPEN: stocksData[46][4],PREVCLOSE:stocksData[46][5],HIGH:stocksData[46][6],LOW:stocksData[46][7],VOLUME:stocksData[46][8],VALUE:stocksData[46][9],Date:stocksData[46][10],Time:stocksData[46][11]}
let data47 = {SYMBOL:stocksData[47][0],LTP: stocksData[47][1],CHNG: stocksData[47][2],CHANGPercentage: stocksData[47][3],OPEN: stocksData[47][4],PREVCLOSE:stocksData[47][5],HIGH:stocksData[47][6],LOW:stocksData[47][7],VOLUME:stocksData[47][8],VALUE:stocksData[47][9],Date:stocksData[47][10],Time:stocksData[47][11]}
let data48 = {SYMBOL:stocksData[48][0],LTP: stocksData[48][1],CHNG: stocksData[48][2],CHANGPercentage: stocksData[48][3],OPEN: stocksData[48][4],PREVCLOSE:stocksData[48][5],HIGH:stocksData[48][6],LOW:stocksData[48][7],VOLUME:stocksData[48][8],VALUE:stocksData[48][9],Date:stocksData[48][10],Time:stocksData[48][11]}
let data49 = {SYMBOL:stocksData[49][0],LTP: stocksData[49][1],CHNG: stocksData[49][2],CHANGPercentage: stocksData[49][3],OPEN: stocksData[49][4],PREVCLOSE:stocksData[49][5],HIGH:stocksData[49][6],LOW:stocksData[49][7],VOLUME:stocksData[49][8],VALUE:stocksData[49][9],Date:stocksData[49][10],Time:stocksData[49][11]}
let data50 = {SYMBOL:stocksData[50][0],LTP: stocksData[50][1],CHNG: stocksData[50][2],CHANGPercentage: stocksData[50][3],OPEN: stocksData[50][4],PREVCLOSE:stocksData[50][5],HIGH:stocksData[50][6],LOW:stocksData[50][7],VOLUME:stocksData[50][8],VALUE:stocksData[50][9],Date:stocksData[50][10],Time:stocksData[50][11]}

//call axios request for stor data in mongo db
      let DATA = JSON.stringify({
        nifty50Data,data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,
        data11,data12,data13,data14,data15,data16,data17,data18,data19,data20,
        data21, data22,data23,data24,data25,data26,data27,data28,data29,data30, 
        data31,data32,data33,data34,data35,data36,data37,data38,data39,data40, 
        data41,data42,data43,data44,data45,data46,data47,data48,data49,data50
    });
    let config10 = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.niftyleveltracker.in/App/api/v1/scrapData',//https://api.niftyleveltracker.in/App/api/v1/scrapData, Local: http://localhost:8000/App/api/v1/scrapData
        headers: { 
            'Content-Type': 'application/json'
        },
        data : DATA
    };
    axios.request(config10)
    .then((response) => {
      console.log('530: sheet  Data inserted >>');
        })
        .catch(async(error) => {
        console.log('Internet Speed Is SLOW',error.message);
        });
        // console.log("609: Post request");
        console.log('536: Stocks Post Successfully');
gsApi = google.sheets({version:'v4',auth:client});
    //Insert data in to  sheet 1 //
    // console.log("sheet1",stocksData[0]);
    // console.log('sheet1',`symbole: ${stocksData[0][0]},open: ${stocksData[0][1]},high: ${stocksData[0][2]}low: ${stocksData[0][3]},preClose: ${stocksData[0][4]},LTP: ${stocksData[0][5]},chang: ${stocksData[0][6]},%chang: ${stocksData[0][7]},volume: ${stocksData[0][8]},value: ${stocksData[0][9]}`);
      const updateOption= {
          spreadsheetId:'1iA8gKAehpYPaI8XMb5PhE6dFs0HTxNohZQHizScRk84', // spreadsheetId
          range: 'Data!A2',
          valueInputOption:'USER_ENTERED',
          resource: {values:stocksData}
      };
      let res = await gsApi.spreadsheets.values.update(updateOption); // post
      console.log("546: >>>> Sheet 1 updated",res.status);  
          //Get Data for Sheet 2//
  const date =moment().format('DD-MM-YY') //today date 
  const time = moment().subtract(10,"m").format('hh.mm')
  console.log(date,time);
let data = '';

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.niftyleveltracker.in/App/api/v1/getScrapData/',//https://api.niftyleveltracker.in/App/api/v1/getScrapData/, Local: 'http://localhost:8000/App/api/v1/getScrapData/
  headers: {date:date.toString(),time: time.toString()},
  data : data
};

axios.request(config)
.then((response) => {
  // console.log(response.data);
  covert(response.data,1)
})
.catch((error) => {
  console.log('566:',error.response.data.message);
});
// Sheet 2 //
  } catch (error) {
    console.log('573:ERROR While Updating Sheet 1',error);
  }
}


 //insert into sheet 2
  async function gsRun2(client,stocksData){
  try {
    // console.log("sheet2",stocksData[0]);
    // console.log('sheet2',`symbole: ${stocksData[0][0]},open: ${stocksData[0][1]},high: ${stocksData[0][2]}low: ${stocksData[0][3]},preClose: ${stocksData[0][4]},LTP: ${stocksData[0][5]},chang: ${stocksData[0][6]},%chang: ${stocksData[0][7]},volume: ${stocksData[0][8]}`);
    const time1 = moment().subtract(20,"m").format('hh.mm')
      const gsApi = google.sheets({version:'v4',auth:client});
      const updateOption1= {
      spreadsheetId:'1iA8gKAehpYPaI8XMb5PhE6dFs0HTxNohZQHizScRk84', // spreadsheetId
      range: 'Data2!A2',
      valueInputOption:'USER_ENTERED',
      resource: {values:stocksData}
  };
  let res1 = await gsApi.spreadsheets.values.update(updateOption1); // post
  console.log("588: >>>> Sheet 2 updated",res1.status);  
  //Get Data for Sheet 3//
  const date =moment().format('DD-MM-YY') //today date 

  let dataA = '';

let configA = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.niftyleveltracker.in/App/api/v1/getScrapData20',//http://localhost:8000/App/api/v1/getScrapData20
  headers: { date:date.toString(),time1: time1.toString()},
  data : dataA
};

axios.request(configA)
.then((response) => {
  console.log(`604: Get request for sheet 3 with time ${time1}`);
  covert(response.data,2)
})
.catch((error) => {
  console.log('611:',error.response.data.message);
});
// Sheet 3//
  } catch (error) {
      console.log('615:ERROR While Updating Sheet 2',error);
  }
  }
   //insert into sheet 3
  async function gsRun4(client,stocksData){
    try {
        const gsApi = google.sheets({version:'v4',auth:client});
        const updateOption1= {
            spreadsheetId:'1iA8gKAehpYPaI8XMb5PhE6dFs0HTxNohZQHizScRk84', // spreadsheetId
            range: 'Data3!A2',
            valueInputOption:'USER_ENTERED',
            resource: {values:stocksData}
        };
        let res1 = await gsApi.spreadsheets.values.update(updateOption1); // post
        console.log("629: >>>> Sheet 3 updated",res1.status);
    } catch (error) {
        console.log('631: ERROR While Updating Sheet 3',error);
        }
    }

    module.exports={testWebSocket} 