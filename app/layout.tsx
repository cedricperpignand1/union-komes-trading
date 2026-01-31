import "./globals.css";

export const metadata = {
  title: "UNION KOMES TRADING L.L.C. | Miami, FL",
  description: "UNION KOMES TRADING L.L.C. — trading & sourcing. Miami, FL.",
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
