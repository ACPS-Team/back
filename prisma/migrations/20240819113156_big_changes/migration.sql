/*
  Warnings:

  - You are about to drop the column `justification` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the `TrainingCourse_Module` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `flightDuration` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instructorId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moduleId` to the `TrainingCourse` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TrainingCourse_Module" DROP CONSTRAINT "TrainingCourse_Module_courseId_fkey";

-- DropForeignKey
ALTER TABLE "TrainingCourse_Module" DROP CONSTRAINT "TrainingCourse_Module_moduleId_fkey";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "justification";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "startTime",
DROP COLUMN "status",
ADD COLUMN     "flightDuration" INTEGER NOT NULL,
ADD COLUMN     "instructorId" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "TrainingCourse" ADD COLUMN     "moduleId" TEXT NOT NULL;

-- DropTable
DROP TABLE "TrainingCourse_Module";

-- DropEnum
DROP TYPE "ReservationStatus";

-- AddForeignKey
ALTER TABLE "TrainingCourse" ADD CONSTRAINT "TrainingCourse_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "TrainingModule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
