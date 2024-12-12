import type { Metadata } from "next";
import { Acme, Great_Vibes } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

export const acme = Acme({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ahmed Kamal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${acme.className} tracking-widest antialiased bg-black`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
