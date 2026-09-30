import request from 'supertest';
import { app } from '../app';
import { prisma } from '../config/database';

describe('Auth Module API', () => {
  // Setup: memastikan koneksi Prisma diputuskan setelah semua tes selesai
  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('POST /api/auth/login', () => {
    it('harus mengembalikan error 401 jika kredensial salah', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'wrong@lamemba.com',
          password: 'wrongpassword'
        })
        .expect('Content-Type', /json/);
        
      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error');
    });

    it('harus berhasil login dengan kredensial admin dan mengembalikan token serta set-cookie', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'admin@lamemba.com',
          password: 'admin123'
        });
        
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('user');
      expect(response.body.user).toHaveProperty('email', 'admin@lamemba.com');
      
      // Memastikan cookie ter-set dengan benar
      const cookies = response.header['set-cookie'];
      expect(cookies).toBeDefined();
      expect(cookies[0]).toMatch(/ded_session=/);
    });
  });
});
