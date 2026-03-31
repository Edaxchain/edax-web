import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { WalletContextProvider } from "@/app/contexts/WalletContextProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { Anuphan } from 'next/font/google'

const anuphan = Anuphan({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'thai'],
  display: 'swap',
  variable: '--font-anuphan',
});

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {


    const messages = await getMessages();

    return (
        <html lang="en" className={anuphan.variable} suppressHydrationWarning>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <WalletContextProvider>
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                    </WalletContextProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
