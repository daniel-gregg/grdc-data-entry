/*
  Warnings:

  - Added the required column `resultModuleId` to the `Result` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Result" DROP CONSTRAINT "moduleResults";

-- AlterTable
ALTER TABLE "Result" ADD COLUMN     "resultModuleId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Totp" ALTER COLUMN "expiresAt" SET DEFAULT now() + interval '15 minutes';
