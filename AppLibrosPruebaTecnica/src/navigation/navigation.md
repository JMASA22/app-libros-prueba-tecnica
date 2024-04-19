<!--
Los archivos con extensión ".md" son archivos de texto con formato Markdown. 
Markdown es un lenguaje de marcado ligero que se utiliza comúnmente para formatear texto de manera simple 
y legible, con la capacidad de convertirlo fácilmente a HTML u otros formatos de presentación.
-->

# Documentación de Navegación

Este documento proporciona una descripción de la configuración de navegación de la aplicación.

## Estructura de Navegación

La navegación de la aplicación se gestiona utilizando React Navigation. La estructura de navegación incluye principalmente tres tipos de navegadores:

- **StackNavigator**: Se utiliza para la navegación entre diferentes pantallas.
- **TabNavigator**: Se utiliza para la navegación entre diferentes pestañas.
- **DrawerNavigator**: Se utiliza para la navegación mediante un menú desplegable.

## Rutas

Las rutas de navegación están definidas en el archivo `navigation.js`. A continuación se muestra un ejemplo de cómo se definen algunas de las rutas:

- **Stack de Libros**:
  - `BookListScreen`: Pantalla principal que muestra una lista de libros.
  - `BookDetailsScreen`: Pantalla que muestra los detalles de un libro específico.
  - `AddBookScreen`: Pantalla para agregar un nuevo libro.

## Integración con Componentes

Los componentes de navegación se integran con los componentes de la aplicación en los archivos `App.js` y `screen/*.js`.

Para obtener más detalles sobre cómo se implementa la navegación en la aplicación, consulte el archivo `MainNavigation.js`.