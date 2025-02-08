/*
  Warnings:

  - You are about to drop the column `userId` on the `Moment` table. All the data in the column will be lost.
  - You are about to drop the `DaySummary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DaySummary" DROP CONSTRAINT "DaySummary_userId_fkey";

-- DropForeignKey
ALTER TABLE "Moment" DROP CONSTRAINT "Moment_userId_fkey";

-- AlterTable
ALTER TABLE "Moment" DROP COLUMN "userId";

-- DropTable
DROP TABLE "DaySummary";

-- DropTable
DROP TABLE "User";
