import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function run() {
  const projectId = 'c52026f1-c760-4d36-9c8c-5bee689e3388'; // from the user's url
  const sections = await prisma.dedSection.findMany({
    where: { project_id: projectId },
    orderBy: { sort_order: 'asc' },
    include: {
      children: true
    }
  });

  console.log("Total sections fetched:", sections.length);
  if (sections.length > 0) {
    console.log("First section:", sections[0].id, "parent_id:", sections[0].parent_id);
    const roots = sections.filter(s => s.parent_id === null);
    console.log("Roots count:", roots.length);
    if(roots.length > 0) {
      console.log("Root children in DB:", roots[0].children?.length);
    }
  }
}
run();
