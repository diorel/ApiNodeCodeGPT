const express = require('express');
const app = express();
const port = 3001;

// Endpoint GET
app.get('/', (req, res) => {
    res.send('Hola, estamos en Node');
});

// Solo iniciamos el servidor si este archivo es el punto de entrada principal
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
}

// Exportamos la app para testing
module.exports = app;