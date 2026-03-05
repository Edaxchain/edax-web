
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {/* Navbar */}
        <Navbar /> 

        {/* เนื้อหาจาก app/page.tsx */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}