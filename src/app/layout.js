import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  applicationName: 'ChatForAll',
  title: "ChatForAll",
  description:
    "A simple realtime chat application without authentication created using Next.js and Firebase",
  generator: "Next.js",
  manifest: "/manifest.json",
  authors: [
    { name: "Sameemul Haque" },
    {
      name: "Sameemul Haque",
      url: "https://sameem.dev/",
    },
  ],
};

export const viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
