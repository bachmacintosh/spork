-- CreateTable
CREATE TABLE `spork_guilds` (
    `id` VARCHAR(20) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `randomizationMode` ENUM('Pseudorandom', 'Random') NOT NULL DEFAULT 'Pseudorandom',
    `randomApiKey` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
