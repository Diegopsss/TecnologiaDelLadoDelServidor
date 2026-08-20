const http = require('node:http');

const server = http.createServer((request, response) => {
    const mockResponses = {
        GET: 'Mock GET response',
        POST: 'Mock POST response',
        PUT: 'Mock PUT response',
        PATCH: 'Mock PATCH response',
        DELETE: 'Mock DELETE response'
    };

    const message = mockResponses[request.method];

    if (request.method && request.url === '/mock') {
        console.log('Mock GET response');
    }

    response.statusCode = message ? 200 : 405;
    response.setHeader('Content-Type', 'application/json; charset=utf-8');

    response.end(JSON.stringify({
        message: message ?? 'Method not allowed',
        method: request.method,
        url: request.url
    }));
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor en http://127.0.0.1:3000');
});
