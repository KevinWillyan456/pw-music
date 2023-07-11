import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function PUT(
  request: Request,
  { params: { userHistoryId } }: { params: { userHistoryId: number } }
) {
  try {
    const req = await request.json()

    const userIdFormated = Number(userHistoryId)

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

    await prisma.userHistoric.update({
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
  { params: { userHistoryId } }: { params: { userHistoryId: number } }
) {
  try {
    const userIdFormated = Number(userHistoryId)

    await prisma.userHistoric.delete({
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
