# 📦 Sistema de Gestión de Restaurante (Backend)

Este proyecto es un backend para un sistema de gestión de restaurante, desarrollado con **Node.js**, **Express**, **Sequelize** y **MySQL**. Su estructura sigue el patrón de diseño **MVC (Modelo-Vista-Controlador)**.

---

## 📁 Estructura del Proyecto

/restaurante
│── /src
│   ├── /config         # Configuración de base de datos (Sequelize)
│   ├── /controllers    # Lógica de negocio (CRUD)
│   ├── /models         # Definición de modelos Sequelize
│   ├── /routes         # Endpoints HTTP
│   ├── /middleware     # Autenticación con JWT
│
├── /test               # Pruebas unitarias e integración
├── server.js           # Punto de entrada del servidor
├── swagger.js          # Generación automática de documentación
├── swagger.json        # Archivo Swagger generado
├── sync.js             # Sincronización de la base de datos
├── package.json        # Dependencias y scripts


---

## 🗃️ Base de Datos

La base de datos fue diseñada a partir de un diagrama **Entidad-Relación (MER)** creado en **MySQL Workbench**. El modelo fue implementado con Sequelize y contiene las siguientes tablas:

### 📌 Tablas

- **Cliente**
  - id_cliente *(PK)*
  - nombre
  - correo
  - password

- **Menu**
  - id_menu *(PK)*
  - nombre
  - descripcion
  - categoria
  - precio

- **Pedido**
  - id_pedido *(PK)*
  - total
  - cliente_id_cliente *(FK → Cliente)*

- **DetallePedido**
  - id_detalle_pedido *(PK)*
  - cantidad
  - subtotal
  - pedido_id_pedido *(FK → Pedido)*
  - menu_id_menu *(FK → Menu)*

---

## 🔗 Relaciones

- **Un cliente puede tener muchos pedidos**
- **Un pedido puede tener muchos detalles**
- **Cada detalle de pedido pertenece a un menú**

---

## 🚀 Funcionalidades Implementadas

Funcionalidades Implementadas
✅ Arquitectura MVC
✅ CRUD para Cliente, Menú, Pedido y DetallePedido
✅ JWT Authentication (Login y rutas protegidas)
✅ Swagger UI para documentación automática (/document)
✅ Pruebas unitarias y de integración con Jest y Supertest
✅ Mejora de seguridad OWASP API2:2023 (Autenticación rota)

---

## 🔧 Requisitos

- Node.js >= 18
- MySQL Server
- Sequelize ORM

---

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/restaurante-backend.git
   cd restaurante-backen

2. Limpiar la base de datos:
   ```bash
   node sync.js

3. Iniciar el servidor
   ```bash
   node server

4. Probar cada ruta
   ```bash
   http://localhost:3000/api/nombre_ruta
   
5. Probar test
   ```bash
   npm test

   



   


