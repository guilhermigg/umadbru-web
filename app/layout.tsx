import "./global.css";

export const metadata = {
  title: 'UMADBRU',
  description: 'UMADBRU Website',
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
