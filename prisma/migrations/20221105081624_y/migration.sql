/*
  Warnings:

  - You are about to drop the column `is_locked` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `createTime` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updateTime` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `is_locked`,
    MODIFY `createTime` DATETIME NOT NULL,
    MODIFY `updateTime` DATETIME NOT NULL;
