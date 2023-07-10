import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function PUT(
  request: Request,
  { params: { userId } }: { params: { userId: number } }
) {
  try {
    const req = await request.json()

    const userIdFormated = Number(userId)

    const { name, password } = req

    if (!name && !password) {
      return new NextResponse(
        JSON.stringify({
          error: {
            code: 'MISSING_DATA',
          },
        }),
        { status: 400 }
      )
    }

    await prisma.user.update({
      where: {
        id: userIdFormated,
      },
      data: {
        name,
        password,
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
  { params: { userId } }: { params: { userId: number } }
) {
  try {
    const userIdFormated = Number(userId)

    await prisma.userHistoric.deleteMany({
      where: {
        userId: userIdFormated,
      },
    })
    await prisma.userFavorites.deleteMany({
      where: {
        userId: userIdFormated,
      },
    })
    await prisma.user.delete({
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
