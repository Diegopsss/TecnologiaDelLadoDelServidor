
const http = require('node:http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    res.end(JSON.stringify({
        message: 'Hola desde Node.js',
        method: req.method,
        url: req.url
    }))
})

server.listen(3000, '127.0.0.1', () => {
    console.log('servidor escuchando en : http://127.0.0.1:3000 ');
});

