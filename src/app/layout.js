
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";



export const metadata = {
  title: "Webnite",
  description: "Webnite, fullstack web development company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-[100%] mx-auto bg-gray-900" >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
