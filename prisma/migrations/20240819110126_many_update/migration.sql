/*
  Warnings:

  - You are about to drop the column `trainingCourseId` on the `Attendance` table. All the data in the column will be lost.
  - Added the required column `courseId` to the `Attendance` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_trainingCourseId_fkey";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "trainingCourseId",
ADD COLUMN     "courseId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "TrainingCourse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
