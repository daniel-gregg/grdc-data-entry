/*
  Warnings:

  - Changed the type of `resultJSON` on the `Result` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Result" DROP COLUMN "resultJSON",
ADD COLUMN     "resultJSON" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Totp" ALTER COLUMN "expiresAt" SET DEFAULT now() + interval '15 minutes';
