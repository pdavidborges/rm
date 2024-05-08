import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "React Movies",
  description: "Projeto desenvolvido em NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">      
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
