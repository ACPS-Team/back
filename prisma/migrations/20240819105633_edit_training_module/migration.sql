/*
  Warnings:

  - You are about to drop the column `moduleId` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `courseId` on the `TrainingModule` table. All the data in the column will be lost.
  - Added the required column `trainingCourseId` to the `Attendance` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_moduleId_fkey";

-- DropForeignKey
ALTER TABLE "TrainingModule" DROP CONSTRAINT "TrainingModule_courseId_fkey";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "moduleId",
ADD COLUMN     "trainingCourseId" TEXT NOT NULL,
ALTER COLUMN "status" DROP NOT NULL;

-- AlterTable
ALTER TABLE "TrainingCourse" ADD COLUMN     "finished_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "TrainingModule" DROP COLUMN "courseId";

-- CreateTable
CREATE TABLE "TrainingCourse_Module" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainingCourse_Module_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TrainingCourse_Module" ADD CONSTRAINT "TrainingCourse_Module_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "TrainingCourse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingCourse_Module" ADD CONSTRAINT "TrainingCourse_Module_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "TrainingModule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_trainingCourseId_fkey" FOREIGN KEY ("trainingCourseId") REFERENCES "TrainingCourse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
