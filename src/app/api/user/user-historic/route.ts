import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const users = await prisma.userHistoric.findMany()

    return new NextResponse(JSON.stringify(users), { status: 200 })
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

export async function POST(request: Request) {
  try {
    const req = await request.json()

    const { musicId, userId } = req

    if (!musicId || !userId) {
      return new NextResponse(
        JSON.stringify({
          error: {
            code: 'MISSING_DATA',
          },
        }),
        { status: 400 }
      )
    }

    await prisma.userHistoric.create({
      data: {
        musicId,
        userId,
      },
    })

    return new NextResponse(
      JSON.stringify({
        success: true,
      }),
      { status: 201 }
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
