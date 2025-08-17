# 📌 API de Usuarios – Backend con Node.js + MySQL

Este proyecto es una **API RESTful** desarrollada con **Node.js, Express y MySQL**.  
Permite gestionar usuarios mediante operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

👉 Repositorio: [junito02/Backed-mysql-v1](https://github.com/junito02/Backed-mysql-v1)  
🌐 API en producción: [https://backed-mysql-v1-production.up.railway.app](https://backed-mysql-v1-production.up.railway.app)

---

## 🚀 Tecnologías usadas
- **Node.js** con Express
- **MySQL** (mysql2 con conexión vía Pool)
- **dotenv** para manejo de variables de entorno
- **Railway** para despliegue en producción

---

## 📂 Endpoints principales

### 🔹 Obtener todos los usuarios
```http
GET https://backed-mysql-v1-production.up.railway.app/api/users
GET https://backed-mysql-v1-production.up.railway.app/api/users/:id
