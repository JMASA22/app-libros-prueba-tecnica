/*
1- Este archivo contiene las funciones controladoras que gestionan las operaciones CRUD sobre las tareas.
2- Cada función controladora corresponde a una operación CRUD específica (getAllBooks, createBook, updateBook, deleteBook).
3- Utiliza el módulo firebase-admin para interactuar con Firebase Firestore y realizar operaciones de lectura, escritura y eliminación en la colección "books".
4- Gestiona los errores y devuelve respuestas JSON con mensajes de error en caso de que ocurran problemas durante la ejecución de las operaciones.
*/

const admin = require('firebase-admin');
const db = admin.firestore();
// snapshot es un objeto que contiene los resultados de una consulta a Firestore y te permite acceder a los documentos devueltos por esa consulta.

// Totes les tasques
exports.getAllBooks = async (req, res) => {
    try {
        // db.collection('books').get() - consulta para obtener todos los documentos de la colección 'books' en Firestore
        const snapshot = await db.collection('books').get();
        const books = [];

        // snapshot.forEach - para iterar sobre cada documento devuelto por la consulta. En cada iteración, doc representa un documento específico en el snapshot.
        snapshot.forEach(doc => {
            books.push({ id: doc.id, ...doc.data() }); // doc.data: para obtener un objeto que representa los datos del documento.
        });
        //Devolver las tareas en formato JSON
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Nova
exports.createBook = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Validar datos de entrada
        if (!title || !description) {
            return res.status(400).json({ message: 'El título y la descripción son obligatorios.' });
        }

        // Crear la tarea en la base de datos
        const bookRef = await db.collection('books').add({ title, description });

        res.status(201).json({ id: bookRef.id, title, description });
    } catch (error) {
        console.error('Error creando libro:', error);

        // Devolver un código de estado 400 para errores de validación de datos
        if (error instanceof TypeError || error instanceof SyntaxError) {
            return res.status(400).json({ message: 'Datos de entrada incorrectos.' });
        }

        // Para otros errores, devolver un código de estado 500
        res.status(500).json({ message: 'Ha ocurrido un error inesperado al crear el libro.' });
    }
};

// Actualizar 
exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        await db.collection('books').doc(id).update({ title, description });
        res.json({ id, title, description });
    } catch (error) {
        console.error('Error actualizando libro:', error);

        // Devolver un código de estado 400 para errores específicos
        if (error instanceof TypeError || error instanceof SyntaxError) {
            return res.status(400).json({ message: 'Datos de entrada incorrectos.' });
        }

        // Para otros errores, devolver un código de estado 500
        res.status(500).json({ message: 'Ha ocurrido un error inesperado al actualizar tu libro.' });
    }
};

// Eliminar
exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        await db.collection('books').doc(id).delete();
        res.json({ message: "El libro se ha borrado satisfactoriamente" });
    } catch (error) {
        console.error('Error borrando libro:', error);

        // Devolver un código de estado 404 si la tarea no se encuentra
        if (error.code === 5) {
            return res.status(404).json({ message: 'El libro no se encuentra.' });
        }

        // Para otros errores, devolver un código de estado 500
        res.status(500).json({ message: 'Ha ocurrido un error inesperado al borrar el libro.' });
    }
};

/*
Se devuelve un código de estado 400 para errores de validación de datos,
como cuando el título o la descripción faltan en la solicitud.

TMb hay una verificación para errores de tipo específico (TypeError y SyntaxError),
que podrían ocurrir si hay problemas con los datos de entrada. 

Para otros errores que no son controlados explícitamente, se devuelve un código de estado 500.
Esto asegura que sólo se devuelvan códigos de 500 para errores ciertamente imprevistos.
*/
