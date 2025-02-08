import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import csvParser = require('csv-parser');

const prisma = new PrismaClient();

async function importCSV(filePath: string) {
  const records: any[] = [];
  console.log('📂 Importuji data z CSV souboru...', __dirname);

  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (row) => {
      const date = new Date(row['Datum']);
      const dayRating = parseInt(row['Hodnocení dne'], 10);

      // Zpracování jednotlivých záznamů dne (1-3)
      const moments = [1, 2, 3]
        .map((i) => {
          if (row[`Záznam ${i}`]) {
            return {
              text: row[`Záznam ${i}`],
              location: row[`Lokace ${i}`] || null,
              time: row[`Čas ${i}`] || null,
              isStarred: row[`Hvězdička ${i}`] === 'True',
              date,
            };
          }
          return null;
        })
        .filter((moment) => moment !== null);

      records.push({
        daySummary: {
          date,
          rating: dayRating,
        },
        moments,
      });
    })
    .on('end', async () => {
      try {
        for (const record of records) {
          // // Uložení shrnutí dne
          // await prisma.daySummary.upsert({
          //   where: {
          //     userId_date: {
          //       userId: record.daySummary.userId,
          //       date: record.daySummary.date,
          //     },
          //   },
          //   update: { rating: record.daySummary.rating },
          //   create: record.daySummary,
          // });

          // Uložení jednotlivých momentů
          for (const moment of record.moments) {
            await prisma.moment.create({
              data: moment,
            });
          }
        }

        console.log('✅ Data byla úspěšně importována!');
      } catch (error) {
        console.error('❌ Chyba při importu CSV:', error);
      } finally {
        await prisma.$disconnect();
      }
    });
}

// Spuštění skriptu
importCSV(`${__dirname}/Flowlist_Cleaned_Corrected.csv`);
