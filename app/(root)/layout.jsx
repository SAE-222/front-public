import Header from "@/components/header/header";
import "../globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation/navigation";
import QueryProvider from "@/lib/providers/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nocif - Réinventez la mode en ligne.",
  description: "Nocif est une plateforme de e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <QueryProvider>
          <div className="w-full h-full flex flex-col">
            <Header />
            <Navigation />
            <div className="p-4 grow">{children}</div>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
