import "@/styles/globals.css";
import { Metadata } from 'next';
import { Syne } from 'next/font/google';
import { Provider } from "./provider";

const syne = Syne({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "ChakraUI V3",
  description: "Starter Template using Next.js 15 and ChakraUI V3",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html className={syne.className} suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
