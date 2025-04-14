# Proyecto Entrega N°1

Este proyecto es una API que simula la gestión de usuarios y mascotas. Utiliza un router para manejar las rutas relacionadas con la generación de datos ficticios y la inserción en la base de datos.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
entrega-n1
├── src
│   ├── routes
│   │   └── mocks.router.js       # Define el router para la ruta base /api/mocks
│   ├── modules
│   │   └── mocking.js             # Módulo para generar usuarios ficticios
│   ├── controllers
│   │   ├── users.controller.js    # Controlador para operaciones de usuarios
│   │   └── pets.controller.js     # Controlador para operaciones de mascotas
│   ├── models
│   │   ├── user.model.js          # Modelo de usuario
│   │   └── pet.model.js           # Modelo de mascota
│   └── app.js                     # Punto de entrada de la aplicación
├── config
│   └── database.js                # Configuración de la conexión a la base de datos
├── package.json                   # Configuración de npm
├── .env                           # Variables de entorno
└── README.md                      # Documentación del proyecto
```

## Instalación

1. Clona el repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Instala las dependencias ejecutando:

   ```
   npm install
   ```

4. Configura las variables de entorno en el archivo `.env` según sea necesario.

## Uso

Para iniciar la aplicación, ejecuta el siguiente comando:

```
npm start
```

La API estará disponible en `http://localhost:3000/api/mocks`.

## Endpoints

- **GET /api/mocks/mockingpets**: Devuelve datos ficticios de mascotas.
- **GET /api/mocks/mockingusers**: Genera y devuelve 50 usuarios ficticios.
- **POST /api/mocks/generateData**: Genera e inserta usuarios y mascotas en la base de datos según los parámetros `users` y `pets` recibidos en el cuerpo de la solicitud.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.