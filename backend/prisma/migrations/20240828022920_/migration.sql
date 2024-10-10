/*
  Warnings:

  - You are about to drop the `shortlinks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "shortlinks";

-- CreateTable
CREATE TABLE "Shortlinks" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "longUrl" TEXT NOT NULL,
    "shortUrl" TEXT,
    "clicks" INTEGER NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Shortlinks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "npm" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_npm_key" ON "User"("npm");

-- AddForeignKey
ALTER TABLE "Shortlinks" ADD CONSTRAINT "Shortlinks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
