import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const EditBookScreen = ({ navigation }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Llamada a la API para obtener la lista de libros y actualizar el estado 'books'
        fetch('/api/books')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error para obtener libros:', error));
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Editar Libro', { book: item })}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
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
        </View>
    );
};

export default EditBookScreen;