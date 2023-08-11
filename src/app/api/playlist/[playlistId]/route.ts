import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function PUT(
  request: Request,
  { params: { playlistId } }: { params: { playlistId: number } }
) {
  try {
    const req = await request.json()

    const playlistIdFormated = Number(playlistId)

    const { coverUrl, description, gender, title } = req

    if (!coverUrl && !description && !gender && !title) {
      return new NextResponse(
        JSON.stringify({
          error: {
            code: 'MISSING_DATA',
          },
        }),
        { status: 400 }
      )
    }

    await prisma.playlist.update({
      where: {
        id: playlistIdFormated,
      },
      data: {
        coverUrl,
        description,
        gender,
        title,
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
  { params: { playlistId } }: { params: { playlistId: number } }
) {
  try {
    const playlistIdFormated = Number(playlistId)

    await prisma.playlist.delete({
      where: {
        id: playlistIdFormated,
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
