import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { FloatingConsultationDock } from "@/components/layout/floating-consultation-dock";

import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-kr",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sisochild.com"),
  title: {
    default: "시소 아동발달·감각통합센터 (SISO)",
    template: "%s · 시소 아동발달센터",
  },
  description:
    "아이를 문제로 나누지 않고, 감각·행동·학교와 일상의 참여를 함께 이해합니다. 초기상담과 카카오 상담으로 바로 연결됩니다.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    locale: "ko_KR",
    title: "시소 · 보호자 중심 소아 발달 지원",
    description:
      "따뜻한 공감과 전문성으로 보호자의 불안에서 행동까지 이어지는 참여 중심 케어.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#67C5B8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="min-h-full bg-[var(--siso-bg)] pb-[5.75rem] text-[var(--siso-text)] md:pb-24">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <FloatingConsultationDock />
      </body>
    </html>
  );
}
