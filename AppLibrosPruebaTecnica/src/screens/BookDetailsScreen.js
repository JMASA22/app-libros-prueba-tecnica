import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const BookDetailsScreen = ({ navigation }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Llamada a la API para obtener la lista de libros y actualizar el estado 'books'
        fetch('/api/books') /* llegir explicació sota: fetch*/
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error para obtener libros:', error));
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

export default BookDetailsScreen;