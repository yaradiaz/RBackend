const request = require('supertest');
const app = require('../src/app'); 
const db = require('../src/config/db');

describe('Pruebas de rutas de Pedido', () => {
  test('GET /api/pedidos debe responder con 200', async () => {
    const res = await request(app).get('/api/pedidos');
    expect(res.statusCode).toBe(200);
  });
});

describe('Pruebas protegidas de pedidos con JWT', () => {
  let token;

  beforeAll(async () => {
    const login = await request(app)
      .post('/api/login')
      .send({
        correo: 'yara@gmail.com',
        contrasena: '123456'
      });

    token = login.body.token;
  });

  test('No debe permitir crear pedido sin token', async () => {
    const res = await request(app)
      .post('/api/pedidos')
      .send({ total: 15000, cliente_id_cliente: 1 });

    expect(res.statusCode).toBe(403);
    expect(res.body.mensaje).toBe('Token no proporcionado');
  });

  test('Debe permitir crear pedido con token válido', async () => {
    const res = await request(app)
      .post('/api/pedidos')
      .set('Authorization', `Bearer ${token}`)

      .send({ total: 15000, cliente_id_cliente: 1 });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id_pedido');
  });

  afterAll(async () => {
    await db.close(); // Cierra conexión solo una vez
  });
});
