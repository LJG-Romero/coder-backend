const http = require('http');
const PORT = 8080;
const server = http.createServer( (req, res) => {
    res.end('Bienvenido');
});
server.listen(PORT, () => {
    console.log(`New server ready, listen on port ${PORT}`);
});