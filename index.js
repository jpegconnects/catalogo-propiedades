// Importar el módulo express
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Importa path para manejar rutas de archivos

// Crear una instancia de Express
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Definir el puerto en el que el servidor escuchará
const port = 3000;

// Servir archivos estáticos desde la carpeta "dist"
app.use(express.static(path.join(__dirname, 'dist')));


// Ruta POST
app.post('/bitrix-widget', (req, res) => {
  let id = JSON.parse(req.body.PLACEMENT_OPTIONS).ID;
  let entityType = req.body.PLACEMENT.split('_')[1];

  res.redirect(`/?id=${id}&entityType=${entityType}`);
});

// Ruta GET modificada
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
