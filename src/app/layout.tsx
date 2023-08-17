import { Providers } from "./providers";
import "../styles/globals.css";

export const metadata = {
  title: "Clase 8 Solidity 101",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
