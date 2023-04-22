import NavBar from "@/components/NavBar"
import '../styles/globals.css'

export const metadata = {
  title: 'Curious',
  description: 'A Blogging Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  )
}
