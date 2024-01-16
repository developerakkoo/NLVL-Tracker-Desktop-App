const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://api.niftyleveltracker.in/App/api/v1/getScrapData/',
  headers: { 
    'Content-Type': 'application/json',
    'time': ' 10.56', 
    'date': '19-10-23'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
