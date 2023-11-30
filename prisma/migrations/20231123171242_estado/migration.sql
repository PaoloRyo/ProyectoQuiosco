/*
  Warnings:

  - You are about to drop the column `stado` on the `orden` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `orden` DROP COLUMN `stado`,
    ADD COLUMN `estado` BOOLEAN NOT NULL DEFAULT false;
