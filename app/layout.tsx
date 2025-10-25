// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Titanium Vietnam",
  description: "Phin xếp bi Titanium Vietnam – Cao cấp • Phổ thông • Thường",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
