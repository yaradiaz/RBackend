const request = require('supertest');
const app = require('../src/app'); 
const db = require('../src/config/db');

describe('Pruebas de rutas de Cliente', () => {
  test('GET /api/clientes debe responder con 200', async () => {
    const res = await request(app).get('/api/clientes');
    expect(res.statusCode).toBe(200);
  });

  afterAll(async () => {
    await db.close(); // Cierra conexión a la base de datos
  });
});

