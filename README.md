# 📦 Sistema de Gestión de Restaurante (Backend)

Este proyecto es un backend para un sistema de gestión de restaurante, desarrollado con **Node.js**, **Express**, **Sequelize** y **MySQL**. Su estructura sigue el patrón de diseño **MVC (Modelo-Vista-Controlador)**.

---

## 📁 Estructura del Proyecto

/restaurante
 │── /src │ 
          ├── /config # Conexión a la base de datos │ 
          ├── /controllers # Lógica de negocio (CRUD) │ 
          ├── /models # Modelos Sequelize (estructura de las tablas) │ 
          ├── /routes # Endpoints HTTP 
  │── server.js # Punto de entrada de la aplicación 
  │── sync.js # Sincronización de la base de datos 
  │── package.json # Dependencias y scripts


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

✅ Estructura del proyecto organizada por capas (MVC)  
✅ Creación del diagrama entidad-relación (MER)  
✅ Implementación de modelos en Sequelize  
✅ Configuración y sincronización de la base de datos (`node sync.js`)
✅ Verificación de base de datos y puerto 3000 (`node server.js`)
✅ Configuración de pruebas
✅ Verificación de pruebas (`npm test`)


Se realizaron todas las tareas del sprint 1

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
   cd restaurante-backend


