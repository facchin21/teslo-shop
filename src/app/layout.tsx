
import { inter } from "@/config/fonts";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Teslo | Shop",
  description: "Tienda de Teslo | Tienda virtual de productos",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
