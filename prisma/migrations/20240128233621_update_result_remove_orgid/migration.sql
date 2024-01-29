-- DropForeignKey
ALTER TABLE "Result" DROP CONSTRAINT "orgModules";

-- AlterTable
ALTER TABLE "Totp" ALTER COLUMN "expiresAt" SET DEFAULT now() + interval '15 minutes';
