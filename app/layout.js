import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "DigiHealth",
  description: "DigiHealth for a better health advice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="mt-12">
          <p className="bg-black text-white text-center py-6">
            © 2024 DigiHealth
          </p>
        </footer>
      </body>
    </html>
  );
}
