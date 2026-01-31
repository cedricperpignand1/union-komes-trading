import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNION KOMES TRADING L.L.C. | Miami, FL",
  description:
    "UNION KOMES TRADING L.L.C. — reliable trading and sourcing. Miami, FL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
