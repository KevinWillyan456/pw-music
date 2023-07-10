import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function PUT(
  request: Request,
  { params: { userFavoriteId } }: { params: { userFavoriteId: number } }
) {
  try {
    const req = await request.json()

    const userIdFormated = Number(userFavoriteId)

    const { musicId, userId } = req

    if (!musicId && !userId) {
      return new NextResponse(
        JSON.stringify({
          error: {
            code: 'MISSING_DATA',
          },
        }),
        { status: 400 }
      )
    }

    await prisma.userFavorites.update({
      where: {
        id: userIdFormated,
      },
      data: {
        musicId,
        userId,
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
  { params: { userFavoriteId } }: { params: { userFavoriteId: number } }
) {
  try {
    const userIdFormated = Number(userFavoriteId)

    await prisma.userFavorites.delete({
      where: {
        id: userIdFormated,
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
