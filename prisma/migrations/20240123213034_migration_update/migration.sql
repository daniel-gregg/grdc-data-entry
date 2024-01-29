-- CreateEnum
CREATE TYPE "OrgType" AS ENUM ('SUPPLIER', 'SUPERMARKET', 'WHOLESALE', 'FINANCE', 'INSURANCE', 'ASSURANCE_AND_CERTIFICATION');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organisation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "OrgType"[],

    CONSTRAINT "Organisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Module" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "model" JSONB NOT NULL,
    "moduleName" TEXT NOT NULL,
    "moduleDescription" TEXT NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "collectionName" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Result" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "resultJSON" JSONB NOT NULL,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Totp" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "hash" TEXT NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "expiresAt" TIMESTAMP(3) DEFAULT now() + interval '15 minutes',

    CONSTRAINT "Totp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_orgAdminId" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_orgUserId" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ModuleToOrganisation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CollectionToModule" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_reportsViewer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Organisation_id_key" ON "Organisation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Module_moduleName_key" ON "Module"("moduleName");

-- CreateIndex
CREATE UNIQUE INDEX "Totp_hash_key" ON "Totp"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "_orgAdminId_AB_unique" ON "_orgAdminId"("A", "B");

-- CreateIndex
CREATE INDEX "_orgAdminId_B_index" ON "_orgAdminId"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_orgUserId_AB_unique" ON "_orgUserId"("A", "B");

-- CreateIndex
CREATE INDEX "_orgUserId_B_index" ON "_orgUserId"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ModuleToOrganisation_AB_unique" ON "_ModuleToOrganisation"("A", "B");

-- CreateIndex
CREATE INDEX "_ModuleToOrganisation_B_index" ON "_ModuleToOrganisation"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CollectionToModule_AB_unique" ON "_CollectionToModule"("A", "B");

-- CreateIndex
CREATE INDEX "_CollectionToModule_B_index" ON "_CollectionToModule"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_reportsViewer_AB_unique" ON "_reportsViewer"("A", "B");

-- CreateIndex
CREATE INDEX "_reportsViewer_B_index" ON "_reportsViewer"("B");

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "moduleResults" FOREIGN KEY ("id") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "orgModules" FOREIGN KEY ("id") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "orgReportId" FOREIGN KEY ("id") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_orgAdminId" ADD CONSTRAINT "_orgAdminId_A_fkey" FOREIGN KEY ("A") REFERENCES "Organisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_orgAdminId" ADD CONSTRAINT "_orgAdminId_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_orgUserId" ADD CONSTRAINT "_orgUserId_A_fkey" FOREIGN KEY ("A") REFERENCES "Organisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_orgUserId" ADD CONSTRAINT "_orgUserId_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuleToOrganisation" ADD CONSTRAINT "_ModuleToOrganisation_A_fkey" FOREIGN KEY ("A") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuleToOrganisation" ADD CONSTRAINT "_ModuleToOrganisation_B_fkey" FOREIGN KEY ("B") REFERENCES "Organisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToModule" ADD CONSTRAINT "_CollectionToModule_A_fkey" FOREIGN KEY ("A") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToModule" ADD CONSTRAINT "_CollectionToModule_B_fkey" FOREIGN KEY ("B") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_reportsViewer" ADD CONSTRAINT "_reportsViewer_A_fkey" FOREIGN KEY ("A") REFERENCES "Report"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_reportsViewer" ADD CONSTRAINT "_reportsViewer_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
