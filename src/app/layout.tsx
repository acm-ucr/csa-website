import "./globals.css";
import { Inter } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UCR Chinese Student Association",
  description:
    "Social, cultural, and service orientated organization that strives to promote the Chinese American culture throughout the UCR and Riverside communities",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
