import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

const matter = localFont({
  src: [
    {
      path: "./matter-font/Matter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./matter-font/Matter-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./matter-font/Matter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./matter-font/Matter-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Sinc Partners",
    default: "Sinc Partners | Service Incubation & Startup Studio",
  },
  description: "Generated by create next app",

  keywords: ["SINC"],
  // openGraph: {
  //   images: "/opengraph-image.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={matter.className}>{children}</body>
    </html>
  );
}
