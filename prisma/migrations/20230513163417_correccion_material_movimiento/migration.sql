/*
  Warnings:

  - You are about to drop the column `movementId` on the `Material` table. All the data in the column will be lost.
  - You are about to drop the column `inPrice` on the `Movement` table. All the data in the column will be lost.
  - You are about to drop the column `outPrice` on the `Movement` table. All the data in the column will be lost.
  - Added the required column `materialId` to the `Movement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Movement` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Enum_MovementType" AS ENUM ('IN', 'OUT');

-- DropForeignKey
ALTER TABLE "Material" DROP CONSTRAINT "Material_movementId_fkey";

-- AlterTable
ALTER TABLE "Material" DROP COLUMN "movementId";

-- AlterTable
ALTER TABLE "Movement" DROP COLUMN "inPrice",
DROP COLUMN "outPrice",
ADD COLUMN     "materialId" TEXT NOT NULL,
ADD COLUMN     "type" "Enum_MovementType" NOT NULL;

-- AddForeignKey
ALTER TABLE "Movement" ADD CONSTRAINT "Movement_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE CASCADE ON UPDATE CASCADE;
