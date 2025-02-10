import "./globals.css";
import { Libre_Bodoni } from "next/font/google";
import { Lora } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const libre_bodoni = Libre_Bodoni({ subsets: ["latin"] });
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

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
      <body className={`${libre_bodoni.className} ${lora.variable}`}>
        <NavBar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
