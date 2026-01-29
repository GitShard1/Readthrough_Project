import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Readthrough App",
  description: "Enhance your reading comprehension with visual formatting, notes, and bookmarks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 p-5">{children}</body>
    </html>
  );
}
