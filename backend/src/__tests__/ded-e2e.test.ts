import request from 'supertest';
import { app } from '../app';
import { prisma } from '../config/database';

jest.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: jest.fn().mockImplementation(() => ({
      getGenerativeModel: jest.fn().mockReturnValue({
        generateContent: jest.fn().mockResolvedValue({
          response: { text: () => 'Simulasi hasil generasi AI' }
        })
      })
    }))
  };
});

describe('E2E DED Generation Workspace', () => {
  let sessionCookie: string;
  let testProjectId: string;
  let testInstrumentId: string;
  let testSectionId: string;
  let adminUserId: string;

  beforeAll(async () => {
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@lamemba.com', password: 'admin123' });
    sessionCookie = loginRes.header['set-cookie'][0];
    adminUserId = loginRes.body.user.id;

    const insVersion = await prisma.instrumentVersion.findFirst();

    const project = await prisma.project.create({
      data: { 
        name: 'E2E RAG Project', 
        code: 'E2E-001',
        description: 'Test', 
        status: 'DRAFT',
        program_studi: 'Manajemen',
        jenjang: 'S1',
        instrument_version_id: insVersion!.id,
        created_by: adminUserId
      }
    });
    testProjectId = project.id;

    const instrument = await prisma.instrumentCriterion.findFirst();
    if (instrument) {
      testInstrumentId = instrument.id;
      const section = await prisma.dedSection.create({
        data: {
          project_id: testProjectId,
          instrument_id: testInstrumentId,
          code: '1.1.1.TEST',
          title: 'Test Section',
          status: 'EMPTY',
        }
      });
      testSectionId = section.id;
    }
  });

  afterAll(async () => {
    if (testProjectId) {
      await prisma.dedSection.deleteMany({ where: { project_id: testProjectId } });
      await prisma.project.delete({ where: { id: testProjectId } });
    }
    await prisma.$disconnect();
  });

  it('Langkah 1: Harus dapat memanggil endpoint AI Generation', async () => {
    if (!testSectionId) return;
    
    const res = await request(app)
      .post(`/api/ded/sections/${testSectionId}/generate`)
      .set('Cookie', sessionCookie)
      .send({ prompt: 'Buatkan narasi untuk Visi Misi' });
      
    // Assert against internal server error
    expect(res.status).not.toBe(500);
  });
});
