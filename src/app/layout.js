
import "./globals.css";
import Header from "./components/Header";



export const metadata = {
  title: "Webnite",
  description: "Webnite, fullstack web development company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000]">
        <Header/>
        {children}
      </body>
    </html>
  );
}
