const express = require('express');
const app = express();
const port = 3001;

// Endpoint GET
app.get('/', (req, res) => {
    res.send('Hola, estamos en Node');
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});