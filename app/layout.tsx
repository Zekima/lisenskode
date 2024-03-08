import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import FooterLinks from '@/components/footer-links'

export const metadata: Metadata = {
  title: "LisensKode",
  description: "Oppdag markedets beste priser på programvarelisenser " +
    " med LisensKode. Vi tilbyr en enkel og sikker måte å kjøpe lisenskoder " +
    " for en rekke programvarer. " +
    "Vårt mål er å gjøre teknologi tilgjengelig for alle ved å tilby rimelige løsninger" +
    " uten å kompromisse med kvaliteten. Med øyeblikkelig digital levering, enkel aktiveringsguide og dedikert kundestøtte, " +
    " sikrer vi at du får mest mulig ut av dine kjøp. Velg LisensKode for pålitelige," +
    " økonomiske og umiddelbare programvarelisenser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex min-h-screen flex-col items-center p-24">
      <body className={inter.className}>
        {children}
        <FooterLinks/>
      
      </body>
    </html>
  );
}
