import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles';

const AddBookScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddBook = () => {
        // Verificar que los campos no estén vacíos
        if (!title || !description) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Realizar la llamada a la API para agregar el libro
        fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                description,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al agregar el libro.');
                }
                return response.json();
            })
            .then(data => {
                // Si se agrega correctamente, navegar de regreso a la pantalla de lista de libros
                navigation.goBack();
            })
            .catch(error => {
                alert('Error al agregar el libro. Por favor, inténtelo de nuevo.');
                console.error('Error al agregar el libro:', error);
            });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Título"
                value={title}
                onChangeText={text => setTitle(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Descripción"
                value={description}
                onChangeText={text => setDescription(text)}
            />
            <TouchableOpacity onPress={handleAddBook}>
                <View style={styles.addButton}>
                    <Text style={styles.addButtonText}>Agregar Libro</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default AddBookScreen;
