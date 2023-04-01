-- CreateTable
CREATE TABLE "group" (
    "id" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "groupName" TEXT NOT NULL,
    "phone" INTEGER,
    "whatsapp" TEXT,
    "website" TEXT,
    "discord" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "group_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "group_idUser_key" ON "group"("idUser");

-- CreateIndex
CREATE UNIQUE INDEX "group_groupName_key" ON "group"("groupName");
