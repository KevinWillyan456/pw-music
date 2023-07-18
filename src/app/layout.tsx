import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pw Music',
  description: 'Plataforma para ouvir músicas e vídeos TOP!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="shortcut icon"
          href="https://pw-music-database.kevinsouza456.repl.co/pw-music-icon.png"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
