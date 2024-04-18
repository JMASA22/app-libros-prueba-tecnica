/*
Importamos NavigationContainer de @react-navigation/native y createStackNavigator de @react-navigation/stack para configurar la navegación.
Definimos un componente funcional App que actúa como punto de entrada de la aplicación.
Utilizamos el componente Stack.Navigator para definir las rutas de navegación. Cada Stack.Screen representa una pantalla de la aplicación.
Especificamos las pantallas que hemos creado anteriormente: BookListScreen, BookDetailsScreen, AddBookScreen y EditBookScreen.
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookListScreen from './src/screens/BookListScreen';
import BookDetailsScreen from './src/screens/BookDetailsScreen';
import AddBookScreen from './src/screens/AddBookScreen';
import EditBookScreen from './src/screens/EditBookScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BookList">
                <Stack.Screen name="BookList" component={BookListScreen} options={{ title: 'Lista de Libros' }} />
                <Stack.Screen name="BookDetails" component={BookDetailsScreen} options={{ title: 'Detalles del Libro' }} />
                <Stack.Screen name="AddBook" component={AddBookScreen} options={{ title: 'Agregar Libro' }} />
                <Stack.Screen name="EditBook" component={EditBookScreen} options={{ title: 'Editar Libro' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
