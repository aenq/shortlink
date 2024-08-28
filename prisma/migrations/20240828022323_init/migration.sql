-- CreateTable
CREATE TABLE "shortlinks" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "longUrl" TEXT NOT NULL,
    "shortUrl" TEXT,
    "clicks" INTEGER NOT NULL,

    CONSTRAINT "shortlinks_pkey" PRIMARY KEY ("id")
);
