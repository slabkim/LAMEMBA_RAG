import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function run() {
  const projectId = 'c52026f1-c760-4d36-9c8c-5bee689e3388';
  
  const sections = await prisma.dedSection.findMany({
    where: { project_id: projectId },
    orderBy: { sort_order: 'asc' },
    include: {
      children: {
        orderBy: { sort_order: 'asc' },
        include: {
          children: {
            orderBy: { sort_order: 'asc' },
            include: {
              responses: {
                orderBy: { version: 'desc' },
                take: 1,
                select: { id: true, status: true, version: true, is_ai_generated: true }
              }
            }
          },
          responses: {
            orderBy: { version: 'desc' },
            take: 1,
            select: { id: true, status: true, version: true }
          }
        }
      }
    }
  });

  const buildTree = (items: any[], parentId: string | null = null): any[] => {
    return items
      .filter(item => item.parent_id === parentId)
      .map(item => ({
        ...item,
        children: buildTree(items, item.id)
      }));
  };
  
  const hierarchicalSections = buildTree(sections);
  console.log("hierarchicalSections count:", hierarchicalSections.length);
  if(hierarchicalSections.length > 0) {
    console.log("First element:", hierarchicalSections[0].code, hierarchicalSections[0].children?.length);
  }
}
run();
