/*
  Warnings:

  - You are about to drop the column `finished_at` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `finished_at` on the `TrainingCourse` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "finished_at",
ADD COLUMN     "finishedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "TrainingCourse" DROP COLUMN "finished_at",
ADD COLUMN     "finishedAt" TIMESTAMP(3);
