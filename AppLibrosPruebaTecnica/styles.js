import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
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

export default styles;



