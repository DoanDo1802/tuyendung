import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ionQ | Tuyển dụng nhân sự tài năng",
  description: "Chúng tôi đang tìm kiếm những nhân sự tài năng như bạn — ứng tuyển ngay để bứt phá và chinh phục thu nhập không giới hạn.",
  icons: {
    icon: "/logo2.png", // Next.js sẽ load file public/logo2.png này làm icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
