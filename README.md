# Amigo Secreto

## Descripción
Este proyecto es una aplicación web interactiva que permite a los usuarios organizar un juego de "Amigo Secreto". Los participantes pueden ingresar sus nombres, visualizarlos en una lista y realizar un sorteo aleatorio para determinar quién es su "Amigo Secreto".

## Estructura del Proyecto
El proyecto está compuesto por los siguientes archivos:

- **index.html**: Contiene la estructura principal de la aplicación.
- **style.css**: Define los estilos y el diseño visual de la página.
- **app.js**: Contiene la lógica del juego, incluyendo la funcionalidad de agregar participantes, actualizar la lista y realizar el sorteo.

## Funcionalidades

1. **Agregar Nombres:**
   - El usuario ingresa un nombre en un campo de texto y lo añade a la lista haciendo clic en el botón "Añadir".
   - Se valida que el campo no esté vacío antes de agregar el nombre.
   
2. **Visualizar la Lista de Participantes:**
   - Los nombres ingresados se muestran dinámicamente en una lista debajo del campo de entrada.
   
3. **Realizar el Sorteo:**
   - Al hacer clic en el botón "Sortear Amigo", se selecciona un nombre de manera aleatoria.
   - El resultado se muestra en la página.
   - Se valida que haya al menos un participante antes de realizar el sorteo.

## Uso

1. Abrir `index.html` en un navegador web.
   ![image](https://github.com/user-attachments/assets/7d9a8d5a-deaf-4a0b-8983-9b69c86c3ac1)

2. Ingresar los nombres de los participantes en el campo de texto y presionar "Añadir".
   ![image](https://github.com/user-attachments/assets/7b85bc3e-3e20-4839-a653-01bd6e1ac086)

En caso de que el campo este vacío, va a salir una alerta diciendo "Por favor, inserte un nombre"
![image](https://github.com/user-attachments/assets/bbc34103-1c9a-4956-b65f-ab62e1fa0cc6)

4. Verificar que los nombres aparezcan en la lista.
![image](https://github.com/user-attachments/assets/305c5a15-d53f-4d30-9584-638781d6d26c)

5. Presionar el botón "Sortear Amigo" para obtener un resultado aleatorio.
![image](https://github.com/user-attachments/assets/d781f2ea-3bf2-4e27-beb8-629756969058)
![image](https://github.com/user-attachments/assets/6cd4205f-0ecc-494c-9bc3-0ef22d0ef621)


## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)

## Autor
Este proyecto fue desarrollado por **Evelyn Pareja Rios** como parte de un Challenge de Alura en el curso **ONE-Alura**, con el propósito de practicar la manipulación del DOM en JavaScript y crear una aplicación interactiva sencilla.

## Mejoras Futuras
- Implementar restricciones para que un participante no se asigne a sí mismo.
- Agregar la opción de eliminar nombres de la lista.
- Incluir estilos más avanzados para mejorar la experiencia del usuario.

