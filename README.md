**PRUEBA TÉCNICA**
Desarrollo de una aplicación con Node.js, Express, Firebase y React Native
--------------------------------------------------------------------------

**Objetivo general**
El objetivo de esta prueba técnica es evaluar las habilidades del desarrollador en el desarrollo de una aplicación completa utilizando Node.js, Express, Firebase y React Native. Se espera que el desarrollador sea capaz de construir una API REST utilizando Node.js y Express, integrar Firebase Firestore como base de datos, y desarrollar una aplicación móvil utilizando React Native para consumir y mostrar los datos de la API.


☝🏻**PARTE 1: Desarrollo de la API REST**

**Configuración de Firebase**
El desarrollador deberá crear un proyecto en Firebase y configurar Firebase Firestore como base de datos. Deberán proporcionarse las credenciales y la configuración necesaria al desarrollador para que pueda conectarse a Firebase Firestore desde su aplicación.

**Desarrollo de la API**
El desarrollador deberá crear una API REST utilizando Node.js y Express. La API debe tener los siguientes endpoints:
- GET /books: Devuelve una lista de todos los libros almacenados en Firebase Firestore.
- GET /books/{id}: Devuelve los detalles de un libro específico según su ID.
- POST /books: Crea un nuevo libro con la información proporcionada en la solicitud.
- PUT /books/{id}: Actualiza la información de un libro existente según su ID.
- DELETE /books/{id}: Elimina un libro específico según su ID.

El desarrollador debe utilizar la biblioteca firebase-admin de Node.js para interactuar con Firebase Firestore y realizar las operaciones CRUD necesarias.


✌🏻**PARTE 2: Desarrollo de la aplicación móvil en React Native**

**Configuración del proyecto de React Native**
El desarrollador deberá configurar un proyecto de React Native utilizando react-native init y asegurarse de tener todas las dependencias necesarias instaladas.

**Desarrollo de la interfaz de usuario**
El desarrollador deberá crear una interfaz de usuario en la aplicación móvil utilizando componentes de React Native. Se espera que la interfaz de usuario muestre los libros obtenidos de la API REST desarrollada en la Parte 1. Algunos aspectos importantes a considerar son:

Mostrar la lista de libros en una pantalla principal.
  - Permitir al usuario ver los detalles de un libro al hacer clic en él.
  - Proporcionar la funcionalidad para agregar un nuevo libro.
  - Permitir al usuario editar y eliminar libros existentes.

**Consumo de la API REST**
El desarrollador deberá consumir la API REST desarrollada en la Parte 1 utilizando fetch u otra biblioteca adecuada en React Native. Deben implementarse las llamadas a los endpoints correspondientes para obtener, crear, actualizar y eliminar libros.


📚 **ENTREGADOS ESPERADOS**
  - Código fuente completo de la API REST desarrollada en Node.js y Express, disponible en GitHub.
  - Código fuente completo de la aplicación móvil en React Native, disponible en GitHub.
  - Un video que muestre el funcionamiento de la aplicación, incluyendo la navegación por la interfaz de usuario y la interacción con la API REST.
