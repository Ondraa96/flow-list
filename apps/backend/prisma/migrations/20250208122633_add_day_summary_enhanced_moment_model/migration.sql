/*
  Warnings:

  - Added the required column `date` to the `Moment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Moment" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isStarred" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "time" TEXT;

-- CreateTable
CREATE TABLE "DaySummary" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DaySummary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DaySummary_date_key" ON "DaySummary"("date");

-- AddForeignKey
ALTER TABLE "DaySummary" ADD CONSTRAINT "DaySummary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
