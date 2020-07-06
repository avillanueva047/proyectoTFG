# WotAPI
Api para el TFG de Adalid

## Como instalar el proyecto

Lo primero que debemos hacer es crear un archivo `.env` en la raiz del proyecto, este archivo debe contener los siguientes parametros.

* PORT, indica el puerto en el que se lanzará la API.
* DB_URI, indica la direccion donde este levantada mongodb.
* DB_NAME, indica el nombre de la base de datos que la API utiliza de fondo. Es importante que crees manualmente la colección con el nombre que indiques aquí.
* DB_USER, nombre de usuario de la base de datos.
* DB_PASS, pasword de la base de datos.

Una vez generado el archivo `.env` vamos a procedder a instalar las dependencias de la aplicacion para ello ejecutas:

```
npm install .
```

Y para inciar la aplicación escribes en consola.

```
npm start
o
node index.js
```

### TODO

* ~~Validar thing description.~~
* Autentificación con servicios de google.
* Dependiendo de los datos que nos de google generar schema de usuario con mongoose.
* Esquema para guardar config de usuario en la UI.