/*
  Warnings:

  - Made the column `shortUrl` on table `Shortlinks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Shortlinks" ALTER COLUMN "shortUrl" SET NOT NULL;
