const express = require('express'); // Usa la libreria y jala la función de express
const app = express(); // asignamos app como un alias para la función de express()

app.use(express.json());

app.get('/abc', (request, response) => {
    response.json({ message: 'Hola desde ABC' });
});

app.listen(3000, '127.0.0.1', () => {
    console.log('Servidor en http://127.0.0.1:3000');
});

// 1: POST /api/items — usar request.body y status 201.
app.post('/api/items', (request, response) => {
    response.status(201).json({
        message: 'Mock POST response',
        method: request.method,
        body: request.body
    });
});

// 2: PUT /api/items/:id — usar request.params.id.
app.put('/api/items/:id', (request, response) => {
    response.json({
        message: 'Mock PUT response',
        method: request.method,
        id: request.params.id,
        body: request.body
    });
});

// 5: Probar query parameters con GET /api/search?q=node&limit=10.
app.get('/api/search', (request, response) => {
    response.json({
        message: 'Mock SEARCH response',
        method: request.method,
        query: request.query,
        page: request.query.page,
        limit: request.query.limit
    });
});

app.get('/api/items/:event_series_id',(request, response) => {
    response.json({
        message: 'Mock GET response',
        method: request.method,
        query: request.query,
        page: request.query.page,
        limit: request.query.limit
    })
}

