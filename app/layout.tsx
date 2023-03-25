// These styles apply to every route in the application
import './globals.css'

export const metadata = {
  title: 'NameGPT',
  description: 'Generate project names on the fly with GPT-3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
