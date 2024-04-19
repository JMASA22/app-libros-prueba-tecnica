// Función para obtener todos los libros desde la API
async function getAllBooks() {
    try {
        const response = await fetch('/api/books');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los libros:', error);
        throw error; // Lanza el error para gestionarlo el lugar donde se llama a la función
    }
}

// Función para obtener un libro por su ID desde la API
async function getBookById(bookId) {
    try {
        const response = await fetch(`/api/books/${bookId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener el libro:', error);
        throw error; // Lanza el error para gestionarlo en el lugar donde se llama a la función
    }
}

// Función para agregar un nuevo libro a la API
async function addBook(newBook) {
    try {
        const response = await fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al agregar el libro:', error);
        throw error; // Lanza el error para gestionarlo en el lugar donde se llama a la función
    }
}

// Exporta las funciones para que puedan ser utilizadas desde otros archivos
export { getAllBooks, getBookById, addBook };
