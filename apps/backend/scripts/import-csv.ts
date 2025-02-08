import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import csvParser from 'csv-parser';

const prisma = new PrismaClient();

function importCSV(filePath: string) {
  const records: any[] = [];

  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on(
      'data',
      (row: {
        // Set interface for CSV columns
        user_id: string;
        text: string;
        tags?: string;
        location?: string;
        created_at: string;
      }) => {
        records.push({
          userId: row.user_id, // Očekáváme sloupec `user_id`
          text: row.text,
          tags: row.tags ? row.tags.split(',') : [],
          location: row.location || null,
          createdAt: new Date(row.created_at),
        });
      },
    )
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    .on('end', async () => {
      try {
        await prisma.moment.createMany({ data: records });
        console.log('✅ CSV data byla úspěšně importována!');
      } catch (error) {
        console.error('❌ Chyba při importu CSV:', error);
      } finally {
        await prisma.$disconnect();
      }
    });
}

// Spuštění skriptu, pokud je volán přímo
if (require.main === module) {
  importCSV('data.csv');
}
