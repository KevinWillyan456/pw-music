-- CreateTable
CREATE TABLE "Music" (
    "id" SERIAL NOT NULL,
    "audioUrl" TEXT NOT NULL,
    "coverUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "isVideo" BOOLEAN NOT NULL,
    "additionDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Music_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Playlist" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "coverUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "totalSongs" INTEGER NOT NULL,
    "additionDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "additionDate" TIMESTAMP(3) NOT NULL,
    "lastAccessedPlaylist" TEXT NOT NULL DEFAULT 'Nightcore',
    "lastAccessedPlaylistName" TEXT NOT NULL DEFAULT 'Nightcores',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFavorites" (
    "id" SERIAL NOT NULL,
    "musicId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserFavorites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserHistoric" (
    "id" SERIAL NOT NULL,
    "musicId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserHistoric_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserFavorites" ADD CONSTRAINT "UserFavorites_musicId_fkey" FOREIGN KEY ("musicId") REFERENCES "Music"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFavorites" ADD CONSTRAINT "UserFavorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHistoric" ADD CONSTRAINT "UserHistoric_musicId_fkey" FOREIGN KEY ("musicId") REFERENCES "Music"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHistoric" ADD CONSTRAINT "UserHistoric_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
