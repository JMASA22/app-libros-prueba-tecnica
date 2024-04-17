/*
Aquest arxiu importa les funcions controlades de booksController.js i defineix 
les rutes de la meva API REST per a les operacions CRUD sobre les taqsques utilitzant Express Router.

La lògica de l'API separada de la lògica de l'aplicació principal.

*/

const express = require("express");
const router = express.Router();

// Importar controladors per operacions CRUD

const {
    getAllBooks, getBookById, createBook, updateBook, deleteBook,
} = require("../controllers/booksController");

//DEfinir rutes
//totes
router.get("/books", getAllBooks);

//per ID
router.get("/books/:id", getBookById);

//nova
router.post("/books", createBook);

//actualizar
router.put("/books/:id", updateBook);

//esborrar
router.delete("/books/:id", deleteBook);

module.exports = router;