import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBlog UI",
  description: "A modern personal blog and editorial homepage built with Next.js.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#f7f3ee] text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}
