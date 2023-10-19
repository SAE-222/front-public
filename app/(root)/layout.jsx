import "../globals.css";
import { Inter } from "next/font/google";
import QueryProvider from "@/lib/providers/query-provider";
import Header from "@/components/header/header";
import Navigation from "@/components/navigation/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/navigation/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nocif - Réinventez la mode en ligne.",
  description: "Nocif est une plateforme de e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={cn("flex", inter.className)}>
        <QueryProvider>
          <MobileMenu />
          <div className="w-full overflow-x-hidden">
            <Header />
            <Navigation />
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
