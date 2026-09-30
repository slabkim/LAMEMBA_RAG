import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding LAMEMBA Instrument Version 2025...');

  // 1. Upsert Instrument Standard
  let standard = await prisma.instrumentStandard.findUnique({
    where: { code: 'LAMEMBA' }
  });

  if (!standard) {
    standard = await prisma.instrumentStandard.create({
      data: {
        code: 'LAMEMBA',
        name: 'Lembaga Akreditasi Mandiri Ekonomi Manajemen Bisnis dan Akuntansi',
        description: 'Standar Akreditasi untuk Program Studi Rumpun Ekonomi, Manajemen, Bisnis, dan Akuntansi'
      }
    });
  }

  // 2. Upsert Instrument Version
  // Try to find if we already have it
  const versionLabel = 'IAU 1.0 — 2025';
  let version = await prisma.instrumentVersion.findFirst({
    where: { 
      standard_id: standard.id,
      version_label: versionLabel 
    }
  });

  if (!version) {
    version = await prisma.instrumentVersion.create({
      data: {
        standard_id: standard.id,
        version_label: versionLabel,
        effective_date: new Date('2025-04-25'),
        regulation_ref: 'PerBAN-PT No.23 Tahun 2024 & Panduan LAMEMBA 2025',
        status: 'ACTIVE',
        notes: 'Template DED 7 Kriteria Khusus LAMEMBA'
      }
    });
  } else {
    // Clean up existing criteria for this version to ensure a fresh seed
    await prisma.instrumentCriterion.deleteMany({
      where: { version_id: version.id }
    });
    await prisma.dedStructureTemplate.deleteMany({
      where: { instrument_version_id: version.id }
    });
  }

  console.log('Creating 7 Main Criteria...');

  // 3. Insert 7 Main Criteria
  const criteriaData = [
    { code: 'B.1', name: 'Orientasi Strategis', desc: 'Misi, Visi, Tujuan dan Sasaran, serta Strategi.' },
    { code: 'B.2', name: 'Tata Pamong dan Tata Kelola', desc: 'Tata Pamong, Tata Kelola, dan Jaminan Mutu.' },
    { code: 'B.3', name: 'Pengelolaan Mahasiswa', desc: 'Penerimaan, Layanan, Kinerja, Kesejahteraan, dan Karir Mahasiswa.' },
    { code: 'B.4', name: 'Pengelolaan Dosen dan Tenaga Kependidikan', desc: 'Kecukupan, Kualifikasi, dan Pengelolaan Dosen & Tendik.' },
    { code: 'B.5', name: 'Keuangan, Sarana, dan Prasarana', desc: 'Pengelolaan Keuangan dan Fasilitas.' },
    { code: 'B.6', name: 'Pendidikan dan Pengajaran', desc: 'Kurikulum, Proses Belajar, dan Jaminan Pembelajaran.' },
    { code: 'B.7', name: 'Penelitian dan Pengabdian kepada Masyarakat', desc: 'Penelitian, PKM, dan Integrasinya.' }
  ];

  const createdCriteria = [];
  
  for (let i = 0; i < criteriaData.length; i++) {
    const crit = criteriaData[i];
    const created = await prisma.instrumentCriterion.create({
      data: {
        version_id: version.id,
        code: crit.code,
        name: crit.name,
        level: 0,
        sort_order: i + 1,
        description: crit.desc,
        rubric_description: 'Pastikan pemenuhan syarat untuk status Unggul (memenuhi Standar LAM dan SN-Dikti).'
      }
    });
    createdCriteria.push(created);
  }

  // 4. Create an example Dimension & Indicator under B.1 (to show hierarchy)
  const b1 = createdCriteria.find(c => c.code === 'B.1');
  if (b1) {
    const dimensiMisi = await prisma.instrumentCriterion.create({
      data: {
        version_id: version.id,
        parent_id: b1.id,
        code: 'B.1.a',
        name: 'Misi',
        level: 1,
        sort_order: 1,
        cluster: 'INPUT',
      }
    });

    await prisma.instrumentCriterion.create({
      data: {
        version_id: version.id,
        parent_id: dimensiMisi.id,
        code: 'B.1.a.1',
        name: 'UPPS/PS menunjukkan bukti bahwa misinya telah mendeskripsikan...',
        level: 2,
        sort_order: 1,
        rubric_description: 'UPPS/PS memenuhi seluruh indikator pada dimensi misi untuk terakreditasi Unggul.',
        ai_instruction: 'Analisis dokumen DKPS. Pastikan narasi mencakup stakeholder, cakupan layanan, dan nilai moral.',
        is_required_unggul: true
      }
    });
  }

  // 5. Create DED Structure Template (Document Skeleton)
  console.log('Building DED Document Skeleton Template...');
  
  // Section: Cover
  await prisma.dedStructureTemplate.create({
    data: {
      instrument_version_id: version.id,
      code: 'A.COVER',
      title: 'Halaman Muka (Cover)',
      section_type: 'COVER',
      display_order: 1,
      is_required: true
    }
  });

  // Section: Identitas
  await prisma.dedStructureTemplate.create({
    data: {
      instrument_version_id: version.id,
      code: 'A.ID',
      title: 'Identitas UPPS dan Program Studi',
      section_type: 'IDENTITY',
      display_order: 2,
      is_required: true
    }
  });

  // Sections: 7 Criteria linked to InstrumentCriterion
  for (let i = 0; i < criteriaData.length; i++) {
    const crit = criteriaData[i];
    await prisma.dedStructureTemplate.create({
      data: {
        instrument_version_id: version.id,
        code: `BAB.II.${crit.code}`,
        title: crit.code + ' ' + crit.name,
        section_type: 'CRITERION',
        criterion_mapping: crit.code,
        display_order: i + 3,
        is_required: true,
        description: `Bagian DED untuk menjabarkan ${crit.name}`
      }
    });
  }

  console.log('Seeding LAMEMBA 2025 Dynamic Template Success!');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
