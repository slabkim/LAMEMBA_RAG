import request from 'supertest';
import { app } from '../app';
import { prisma } from '../config/database';

describe('Projects Module API', () => {
  let sessionCookie: string;

  beforeAll(async () => {
    // 1. Dapatkan token auth sebelum menjalankan test module
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@lamemba.com', password: 'admin123' });
    
    sessionCookie = response.header['set-cookie'][0];
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('GET /api/projects', () => {
    it('harus menolak akses jika tidak ada session (401)', async () => {
      const response = await request(app).get('/api/projects');
      expect(response.status).toBe(401);
    });

    it('harus mengembalikan daftar project jika menggunakan session valid', async () => {
      const response = await request(app)
        .get('/api/projects')
        .set('Cookie', sessionCookie);
        
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('data');
      expect(Array.isArray(response.body.data)).toBe(true);
    });
  });
});
