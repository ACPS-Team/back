/*
  Warnings:

  - You are about to drop the column `duration` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Incident` table without a default value. This is not possible if the table is not empty.
  - Added the required column `durationEst` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `durationReal` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Incident" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "duration",
ADD COLUMN     "durationEst" INTEGER NOT NULL,
ADD COLUMN     "durationReal" INTEGER NOT NULL;
