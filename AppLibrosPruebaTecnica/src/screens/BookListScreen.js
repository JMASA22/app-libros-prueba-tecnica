import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const BookListScreen = ({ navigation }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Llamada a la API para obtener la lista de libros y actualizar el estado 'books'
        fetch('/api/books') /* llegir explicació sota: fetch*/
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error al obtener libros:', error));
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Información del libro', { book: item })}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                {/* Posibilidad de mostrar más información del libro... autor, fecha de publicación, etc */}
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            <TouchableOpacity onPress={() => navigation.navigate('AddBook')}>
                <View style={styles.addButton}>
                    <Text style={styles.addButtonText}>Agregar Libro</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 10,
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default BookListScreen;

/*
Utilizamos useState para mantener el estado de la lista de libros.
Utilizamos useEffect para realizar una llamada a la API y obtener la lista de libros cuando se monta el componente.
Renderizamos la lista de libros utilizando un FlatList y el método renderItem.
Cada elemento de la lista es un TouchableOpacity que, al hacer clic, navegará a la pantalla de detalles del libro (BookDetailsScreen) con los detalles del libro seleccionado.
También agregamos un botón para agregar un nuevo libro que navegará a la pantalla de agregar libro (AddBookScreen).
*/

/*
al utilizar fetch con rutas relativas, puedes interactuar con las API de tu propio servidor 
desde tu aplicación web sin la necesidad de proporcionar URLs completas. 
Esto simplifica el desarrollo y hace que tu código sea más portable.
*/