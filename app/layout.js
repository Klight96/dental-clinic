import { Inter } from "next/font/google";
import "./globals.css";



import { Nav, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dental clinic",
  description: "We check the health of your teeth by the best specialist in our clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
          {children}
        <Footer />
      </body>
    </html>
  );
}




// mapbox pass: h2$eThNkqW+J?2K 