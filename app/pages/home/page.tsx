import Hero from "@/app/pages/home/Hero";
import Features from "@/app/pages/home/Features";
import Statistics from "@/app/pages/home/Statistics";
import Performance from "@/app/pages/home/Performance";
import Transaction from "@/app/pages/home/Transaction";
import Blockchain from "@/app/pages/home/Blockchain";
import Works from "@/app/pages/home/Works";
import Mobile from "@/app/pages/home/Mobile";

export default function LandingPage() {
    return (
        <main className="flex min-h-screen flex-col py-12 bg-background">
            <Hero />
            <Features />
            <Statistics />
            <Performance />
            <Transaction />
            <Blockchain />
            <Works />
            <Mobile />
        </main>
    );
}
