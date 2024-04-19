import { createStackNavigator } from 'react-navigation-stack';
import BookListScreen from '../screen/BookListScreen';
import BookDetailsScreen from '../screen/BookDetailsScreen';
import AddBookScreen from '../screen/AddBookScreen';

const MainNavigator = createStackNavigator({
    BookListScreen: {
        screen: BookListScreen,
        navigationOptions: {
            title: 'Lista de Libros',
        },
    },
    BookDetailsScreen: {
        screen: BookDetailsScreen,
        navigationOptions: {
            title: 'Detalles del Libro',
        },
    },
    AddBookScreen: {
        screen: AddBookScreen,
        navigationOptions: {
            title: 'Agregar Libro',
        },
    },
});

export default MainNavigator;
