/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Organisation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Totp" ALTER COLUMN "expiresAt" SET DEFAULT now() + interval '15 minutes';

-- CreateIndex
CREATE UNIQUE INDEX "Organisation_name_key" ON "Organisation"("name");
