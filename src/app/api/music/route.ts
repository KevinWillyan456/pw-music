import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const songs = await prisma.music.findMany()

    return new NextResponse(JSON.stringify(songs), { status: 200 })
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

    const { audioUrl, coverUrl, gender, isVideo = false, theme, title } = req

    if (!audioUrl || !coverUrl || !gender || !theme || !title) {
      return new NextResponse(
        JSON.stringify({
          error: {
            code: 'MISSING_DATA',
          },
        }),
        { status: 400 }
      )
    }

    await prisma.music.create({
      data: {
        additionDate: new Date(),
        audioUrl,
        coverUrl,
        gender,
        isVideo,
        theme,
        title,
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
