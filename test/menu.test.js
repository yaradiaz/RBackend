const request = require('supertest');
const app = require('../src/app');
const db = require('../src/config/db');

describe('Pruebas de rutas de Menú', () => {
  test('GET /api/menu debe responder con 200', async () => {
    const res = await request(app).get('/api/menu');
    expect(res.statusCode).toBe(200);
  });

  afterAll(async () => {
    await db.close();
  });
});
