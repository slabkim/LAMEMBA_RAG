import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../lib/password';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // 1. Create Roles
  const adminRole = await prisma.role.upsert({
    where: { code: 'ADMIN' },
    update: {},
    create: {
      code: 'ADMIN',
      name: 'Administrator',
      description: 'System Administrator',
      is_system_role: true,
    },
  });

  const penyusunRole = await prisma.role.upsert({
    where: { code: 'PENYUSUN' },
    update: {},
    create: {
      code: 'PENYUSUN',
      name: 'Penyusun DED',
      description: 'Tim Penyusun Akreditasi',
      is_system_role: true,
    },
  });

  const reviewerRole = await prisma.role.upsert({
    where: { code: 'REVIEWER' },
    update: {},
    create: {
      code: 'REVIEWER',
      name: 'Reviewer / Asesor',
      description: 'Reviewer Internal',
      is_system_role: true,
    },
  });

  const researcherRole = await prisma.role.upsert({
    where: { code: 'RESEARCHER' },
    update: {},
    create: {
      code: 'RESEARCHER',
      name: 'Peneliti',
      description: 'Peneliti untuk RAGAS Evaluation',
      is_system_role: true,
    },
  });

  // 2. Create Admin User
  const adminEmail = 'admin@lamemba.com';
  const hashedPassword = await hashPassword('admin123'); // Default password
  
  const adminUser = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      full_name: 'Admin LAMEMBA',
      password_hash: hashedPassword,
      status: 'ACTIVE',
      must_change_password: true,
      userRoles: {
        create: {
          role_id: adminRole.id,
        }
      }
    }
  });

  console.log('Seeding finished.');
  console.log('Admin Email:', adminEmail);
  console.log('Admin Password:', 'admin123');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
