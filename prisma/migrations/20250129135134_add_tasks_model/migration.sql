-- CreateTable
CREATE TABLE "tasks" (
    "task_id" TEXT NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("task_id")
);
