/*
  Warnings:

  - You are about to drop the column `date` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `durationEst` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `durationReal` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `duration` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `TrainingCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `TrainingCourse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "date";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "durationEst",
DROP COLUMN "durationReal",
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "finished_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "TrainingCourse" ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;
