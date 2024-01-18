-- CreateTable
CREATE TABLE `Stock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` ENUM('Stock', 'Crypto', 'Forex', 'Futures') NOT NULL DEFAULT 'Stock',
    `stockName` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NULL,
    `price` DOUBLE NOT NULL,
    `growth` DOUBLE NULL,
    `all_FFCEId` INTEGER NULL,

    UNIQUE INDEX `Stock_stockName_key`(`stockName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Crypto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` ENUM('Stock', 'Crypto', 'Forex', 'Futures') NOT NULL DEFAULT 'Crypto',
    `logo` VARCHAR(191) NULL,
    `cryptoName` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `growth` DOUBLE NULL,
    `all_FFCEId` INTEGER NULL,

    UNIQUE INDEX `Crypto_cryptoName_key`(`cryptoName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Forex` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` ENUM('Stock', 'Crypto', 'Forex', 'Futures') NOT NULL DEFAULT 'Forex',
    `logo` VARCHAR(191) NULL,
    `forexName` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `growth` DOUBLE NULL,
    `all_FFCEId` INTEGER NULL,

    UNIQUE INDEX `Forex_forexName_key`(`forexName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Futures` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` ENUM('Stock', 'Crypto', 'Forex', 'Futures') NOT NULL DEFAULT 'Futures',
    `logo` VARCHAR(191) NULL,
    `futuresName` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `growth` DOUBLE NULL,
    `all_FFCEId` INTEGER NULL,

    UNIQUE INDEX `Futures_futuresName_key`(`futuresName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `All_FFCE` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `gmail` VARCHAR(191) NOT NULL,
    `userName` VARCHAR(191) NULL,
    `firstName` VARCHAR(191) NULL,
    `lastname` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('User', 'Admin') NOT NULL DEFAULT 'User',

    UNIQUE INDEX `User_gmail_key`(`gmail`),
    UNIQUE INDEX `User_userName_key`(`userName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activity` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id` VARCHAR(191) NOT NULL,
    `message` LONGTEXT NOT NULL,
    `cratedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `ideaId` VARCHAR(191) NULL,
    `activityId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `News` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `publisher` VARCHAR(191) NOT NULL,
    `title` TEXT NOT NULL,
    `body` LONGTEXT NOT NULL,
    `icon` VARCHAR(191) NOT NULL,
    `activityId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Idea` (
    `id` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `subject` TEXT NOT NULL,
    `body` LONGTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `likes` BIGINT NOT NULL DEFAULT 0,
    `activityId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_all_FFCEId_fkey` FOREIGN KEY (`all_FFCEId`) REFERENCES `All_FFCE`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Crypto` ADD CONSTRAINT `Crypto_all_FFCEId_fkey` FOREIGN KEY (`all_FFCEId`) REFERENCES `All_FFCE`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Forex` ADD CONSTRAINT `Forex_all_FFCEId_fkey` FOREIGN KEY (`all_FFCEId`) REFERENCES `All_FFCE`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Futures` ADD CONSTRAINT `Futures_all_FFCEId_fkey` FOREIGN KEY (`all_FFCEId`) REFERENCES `All_FFCE`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activity` ADD CONSTRAINT `Activity_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_ideaId_fkey` FOREIGN KEY (`ideaId`) REFERENCES `Idea`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activity`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `News` ADD CONSTRAINT `News_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activity`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Idea` ADD CONSTRAINT `Idea_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activity`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
