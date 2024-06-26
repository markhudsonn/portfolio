import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import Head from "next/head";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Mark Hudson",
  description:
    "Computer Science undergraduate at Newcastle University with a passion for coding.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
      <script async src="https://eu.umami.is/script.js" data-website-id="060ac987-f2d7-4d0f-b5f0-d7e911a7b1f9"></script>
      </Head>
      <body
        className={clsx(
          inter.className,
          "antialiased bg-primary text-primary width-full"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navigation />
          <div
            className={
              "px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto"
            }
          >
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
      
    </html>
  );
}
