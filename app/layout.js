import "./globals.css";

export const metadata = {
  title: "Lumina Tours | Ba miền đất – Một hành trình",
  description: "Khám phá Đà Nẵng, Hội An, Huế và Quảng Trị trong hành trình di sản miền Trung 6 ngày.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
