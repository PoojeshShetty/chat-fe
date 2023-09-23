import { Plus_Jakarta_Sans } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={plusJakarta.className} lang='en'>
      <body>{children}</body>
    </html>
  );
}
