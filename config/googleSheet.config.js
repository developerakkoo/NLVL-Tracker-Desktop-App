const key = require("../secret.json");
const { auth } = require("googleapis").google;

const client = new auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ["https://www.googleapis.com/auth/spreadsheets"], // scope of the app https://developers.google.com/identity/protocols/oauth2/scopes#sheets
);
client.authorize(function (err, tokens) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("connected!");
    }
});

module.exports = { client };
