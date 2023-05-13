/*
  Warnings:

  - Added the required column `movementTypeId` to the `Movement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movement" ADD COLUMN     "movementTypeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "MovementType" (
    "id" TEXT NOT NULL,
    "name" "Enum_MovementType",
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "MovementType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MovementType_id_key" ON "MovementType"("id");

-- AddForeignKey
ALTER TABLE "Movement" ADD CONSTRAINT "Movement_movementTypeId_fkey" FOREIGN KEY ("movementTypeId") REFERENCES "MovementType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
