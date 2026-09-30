import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.$executeRawUnsafe(`ALTER TABLE "document_chunks" ALTER COLUMN "embedding" TYPE vector(3072);`);
  console.log("Column altered successfully");
}

main().catch(console.error).finally(() => prisma.$disconnect());
