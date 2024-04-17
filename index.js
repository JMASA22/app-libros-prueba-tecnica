/*
- Este archivo es el punto de entrada principal de la aplicación Node.js.
- Configura y inicializa el servidor Express.
- Conecta la aplicación a Firebase Firestore utilizando las credenciales proporcionadas.
- Define el puerto en el que se ejecutará el servidor y lo hace escuchar en ese puerto.
*/

const express = require('express');
const app = express();
const admin = require('firebase-admin');
const PORT = 3000;


// Ruta al archivo JSON de credenciales
const serviceAccount = require('./config/prueba-tecnica-janams-firebase-adminsdk-dwgaf-2278c2793a.json');

// Inicializa Firebase Admin con las credenciales
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Acceder a Firebase Firestore
const db = admin.firestore();

app.get('/books', (req, res) => {
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});