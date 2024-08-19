import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";

import "../public/globals.css";

export const metadata: Metadata = {
  title: "Cats & Dogs",
  description: "Breeds of cats and dogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header />
        <main>
          <section className="container py-4 md:py-8 lg:py-12">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
