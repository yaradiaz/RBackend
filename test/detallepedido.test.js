const request = require('supertest');
const app = require('../src/app');
const db = require('../src/config/db');

describe('Pruebas de rutas de DetallePedido', () => {
  test('GET /api/detalles debe responder con 200', async () => {
    const res = await request(app).get('/api/detalles');
    expect(res.statusCode).toBe(200);
  });

  afterAll(async () => {
    await db.close();
  });
});
