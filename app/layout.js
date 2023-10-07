import './globals.css'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'All Countries',
  description: 'All countries in the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='mymain'>
      <body className={openSans.className}>
        <main className="flex min-h-screen flex-col bg-slate-100">
          <div className='container mx-auto p-3 sm:p-7'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
