/*
  Warnings:

  - The primary key for the `TrainingCourse_Module` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `TrainingCourse_Module` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TrainingCourse_Module" DROP CONSTRAINT "TrainingCourse_Module_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "TrainingCourse_Module_pkey" PRIMARY KEY ("courseId", "moduleId");
