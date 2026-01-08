import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SidebarProvider from "@/Providers/SidebarProvider";
import CartContextProvider from "@/Providers/CartContextProvider";
import ToggleCartDetailsProvider from "@/Providers/ToggleCartDetailsProvider";

const kumbSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sneaker Product Details",
  description: "Sneaker Product Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kumbSans.variable}  antialiased relative`}>
        <ToggleCartDetailsProvider>
          <CartContextProvider>
            <SidebarProvider>
              <Header></Header>
              {children}
            </SidebarProvider>
          </CartContextProvider>
        </ToggleCartDetailsProvider>
      </body>
    </html>
  );
}
