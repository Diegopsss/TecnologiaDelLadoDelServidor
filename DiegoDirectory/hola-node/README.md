## Introducción de Node

Author: Diego Gálvez Bricio

Sistema Operativo: Mac

versiones:
    
- NVM : 0.40.3
- Node.js : v24.16.0
- NPM : 11.13.0

IDE : Webstorm 2026

Postman : v12.23.8

## Descripción del proyecto

Servidor HTTP construido únicamente con el módulo nativo `http` de Node.js (sin frameworks ni dependencias externas). Escucha en `http://127.0.0.1:3000` y responde a los cinco verbos HTTP principales (GET, POST, PUT, PATCH, DELETE) con un JSON simulado (mock) que indica el método y la URL recibidos. Cualquier otro método responde con status `405 Method not allowed`.

## Instrucciones de instalación y uso step by step

1. **Clonar o descargar el repositorio** y ubicarse en la carpeta `hola-node`:
   ```bash
   cd hola-node
   ```

2. **Verificar la versión de Node.js instalada** (se recomienda usar NVM):
   ```bash
   nvm use
   node -v
   ```

3. **Instalar dependencias** con NPM (el proyecto no requiere paquetes externos, pero este paso genera/valida `node_modules` y `package-lock.json`):
   ```bash
   npm install
   ```

4. **Iniciar el servidor**:
   ```bash
   node server.js
   ```
   Deberías ver en consola:
   ```
   Servidor en http://127.0.0.1:3000
   ```

5. **Probar los endpoints** con `curl` o con la colección de Postman incluida (`hola-node.postman_collection.json`), enviando peticiones a `http://127.0.0.1:3000/` con cada uno de los verbos: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.

6. **Detener el servidor** con `Ctrl + C` en la terminal donde se ejecuta.

## Pruebas con Postman

1. Abrir Postman e importar la colección `hola-node.postman_collection.json` (File > Import).
2. Con el servidor corriendo (`node server.js`), ejecutar cada request de la colección: GET, POST, PUT, PATCH y DELETE contra `http://127.0.0.1:3000/`.
3. Verificar que cada respuesta tenga status `200 OK` y un cuerpo JSON con el mensaje mock correspondiente.
4. Las capturas de pantalla de cada prueba se encuentran en la carpeta `evidencias/`.

## Evidencia de ejecución y respuestas por verbo HTTP

Servidor iniciado:
```
$ node server.js
Servidor en http://127.0.0.1:3000
```

Pruebas realizadas con `curl -i -X <VERBO> http://127.0.0.1:3000/`:

**GET**
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"message":"Mock GET response","method":"GET","url":"/"}
```

**POST**
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"message":"Mock POST response","method":"POST","url":"/"}
```

**PUT**
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"message":"Mock PUT response","method":"PUT","url":"/"}
```

**PATCH**
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"message":"Mock PATCH response","method":"PATCH","url":"/"}
```

**DELETE**
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"message":"Mock DELETE response","method":"DELETE","url":"/"}
```

## Estructura del proyecto

```
hola-node/
├── server.js     # Servidor HTTP con los 5 verbos
├── package.json  # Metadata del proyecto generado con npm init
└── README.md     # Este archivo
```

