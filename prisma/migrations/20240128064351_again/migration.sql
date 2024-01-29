-- AlterTable
ALTER TABLE "Result" ALTER COLUMN "resultJSON" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Totp" ALTER COLUMN "expiresAt" SET DEFAULT now() + interval '15 minutes';
