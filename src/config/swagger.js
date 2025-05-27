const swaggerAutogen = require('swagger-autogen');

const outputFile = './swagger.json';
const endPointsFiles = ['./src/app.js'];

const doc = {
  info: {
    title: 'API Restaurante',
    description: 'API para la gestión de clientes, menús, pedidos y autenticación.',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  tags: [
    { name: 'Clientes', description: 'Operaciones relacionadas con clientes' },
    { name: 'Menú', description: 'Gestión de productos del menú' },
    { name: 'Pedidos', description: 'Registro de pedidos' },
    { name: 'Detalles de Pedido', description: 'Detalle de productos por pedido' },
    { name: 'Autenticación', description: 'Login y seguridad con JWT' },
  ],
  securityDefinitions: {  //para el token
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    }
  }
};

swaggerAutogen(outputFile, endPointsFiles, doc);

//nuevo