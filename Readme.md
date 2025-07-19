# 🛍️ API de Productos - Express + Node.js

Esta es una API desarrollada con **Express** para gestionar productos y autenticación de usuarios.

---

## 🚀 Características

- Autenticación de usuarios mediante rutas protegidas
- Gestión de productos a través de endpoints REST
- Middleware personalizado de autenticación
- Configuración de **CORS**
- Manejo de errores 404
- Respuesta base en la raíz de la API

---

## 📦 Tecnologías

- Node.js
- Express
- CORS
- JavaScript ESModules

---

## 📁 Estructura principal


.
├── index.js                     # Configuración del servidor Express
├── routes/
│   ├── auth.route.js            # Rutas relacionadas con autenticación
│   └── product.route.js         # Rutas para gestión de productos
├── middlewares/
│   └── authentication.js        # Middleware para proteger rutas
├── package.json                 # Dependencias y scripts del proyecto
├── .gitignore                   # Archivos y carpetas ignoradas por Git

## Estructura de documentos en firebase
 
doc : EAN,descripcion,precio
dentro de la coleccion Productos.

## Estructura de la respuesta json

mensaje, payload

## Keys de las variables de entorno usadas en el proyecto: 
APIKEY
AUTHDOMAIN
PROJECTID
STORAGEBUCKET
MESSAGINGSENDERID
APPID
JWT_SECRET_KEY
MAIL
PASS