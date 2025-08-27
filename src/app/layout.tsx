import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "~/components/Footer";
import { ThemeProvider } from "~/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "GSAP Demo",
  description: "GSAP Demo w/ Next.js",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
