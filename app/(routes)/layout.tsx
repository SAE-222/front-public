import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import CustomSessionProvider from "@/components/providers/session-provider";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plateforme ecommerce",
  description: "Faites vos achats en ligne",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          process.env.HIDE_NEXT_ERROR_OVERLAY === "true" &&
            "hide-nextjs-portal",
          inter.className,
        )}
      >
        <CustomSessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </CustomSessionProvider>
      </body>
    </html>
  );
}
