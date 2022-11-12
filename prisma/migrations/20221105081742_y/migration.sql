/*
  Warnings:

  - You are about to alter the column `createTime` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updateTime` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `createTime` DATETIME NULL,
    MODIFY `updateTime` DATETIME NULL;
