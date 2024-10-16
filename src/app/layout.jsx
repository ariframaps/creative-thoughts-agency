import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col justify-between bg-blue-950 sm:bg-red-950 md:bg-green-950 lg:bg-purple-950 xl:bg-black 2xl:bg-slate-900">
          <Navbar />
          <main className="h-full w-full px-7 xl:px-20 2xl:mx-auto 2xl:max-w-screen-2xl">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
