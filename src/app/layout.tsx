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
  description: "Tham gia cùng đội ngũ ionQ để thỏa sức sáng tạo và phát triển bản thân. Môi trường làm việc năng động, chuyên nghiệp với cơ hội thăng tiến không giới hạn. Nộp CV ngay hôm nay!",
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
