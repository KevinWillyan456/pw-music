import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const users = await prisma.userFavorites.findMany()

  return new NextResponse(JSON.stringify(users), { status: 200 })
}

export async function POST(request: Request) {
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

  await prisma.userFavorites.create({
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
}
