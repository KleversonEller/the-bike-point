-- CreateTable
CREATE TABLE "event" (
    "id" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "eventLocation" TEXT NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "eventCost" BIGINT NOT NULL,
    "moreInfos" TEXT NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "event_eventName_key" ON "event"("eventName");
