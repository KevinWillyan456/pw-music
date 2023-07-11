import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const playlists = await prisma.playlist.findMany()

    return new NextResponse(JSON.stringify(playlists), { status: 200 })
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

    const { coverUrl, description, gender, title } = req

    const totalSongs = 0 // Teste

    if (!coverUrl || !description || !gender || !title) {
      return new NextResponse(
        JSON.stringify({
          error: {
            code: 'MISSING_DATA',
          },
        }),
        { status: 400 }
      )
    }

    await prisma.playlist.create({
      data: {
        additionDate: new Date(),
        coverUrl,
        description,
        gender,
        title,
        totalSongs,
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
