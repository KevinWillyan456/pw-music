import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function PUT(
  request: Request,
  { params: { musicId } }: { params: { musicId: number } }
) {
  try {
    const req = await request.json()

    const musicIdFormated = Number(musicId)

    const { audioUrl, coverUrl, title, gender, isVideo, theme } = req

    if (!audioUrl && !coverUrl && !title && !gender && !isVideo && !theme) {
      return new NextResponse(
        JSON.stringify({
          error: {
            code: 'MISSING_DATA',
          },
        }),
        { status: 400 }
      )
    }

    await prisma.music.update({
      where: {
        id: musicIdFormated,
      },
      data: {
        audioUrl,
        coverUrl,
        title,
        gender,
        isVideo,
        theme,
      },
    })

    return new NextResponse(
      JSON.stringify({
        success: true,
      }),
      { status: 200 }
    )
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error,
      }),
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params: { musicId } }: { params: { musicId: number } }
) {
  try {
    const musicIdFormated = Number(musicId)

    await prisma.userHistoric.deleteMany({
      where: {
        musicId: musicIdFormated,
      },
    })
    await prisma.userFavorites.deleteMany({
      where: {
        musicId: musicIdFormated,
      },
    })
    await prisma.music.delete({
      where: {
        id: musicIdFormated,
      },
    })

    return new NextResponse(
      JSON.stringify({
        success: true,
      }),
      { status: 200 }
    )
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error,
      }),
      { status: 500 }
    )
  }
}
