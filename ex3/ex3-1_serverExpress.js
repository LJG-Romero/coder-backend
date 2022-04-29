const express = require('express');
const app = express();

const PORT = 8081;

let objRes = {
    message: 'Welcome to this new server issued by',
    badge: 'Express.js',
    style: 'color:tomato; font-size:25px; text-align: center; border: 1px solid red'
}
let objRes2 = {
    message: 'Another message from different',
    badge: 'endpoint',
    style: 'color:greenyellow; font-size:25px; text-align: right; border: 1px solid darkgreen'
}

/* Petitions Handlers */
app.get('/', (req, res) => {
    res.send(`<p style="${objRes.style}">${objRes.message} <strong>${objRes.badge}</strong></p>`);
});
app.get('/test', (req, res) => {
    res.send(`<p style="${objRes2.style}">${objRes2.message} <strong>${objRes2.badge}</strong></p>`);
});

/* Server messages */
const server = app.listen(PORT, () => {
    console.log(`New server issue by Express.js ready, listen on port ${server.address().port}.`);
});

/* Error handler */
server.on('error', error => console.log(`Error: ${error}`));
