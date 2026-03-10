import Hero from "@/app/pages/main/Hero";
import Features from "@/app/pages/main/Features";
import Statistics from "@/app/pages/main/Statistics";
import Performance from "@/app/pages/main/Performance";
import Transaction from "@/app/pages/main/Transaction";
import Blockchain from "@/app/pages/main/Blockchain";
import Works from "@/app/pages/main/Works";
import Mobile from "@/app/pages/main/Mobile";

export default function LandingPage() {
    return (
        <main className="flex min-h-screen flex-col py-12">
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
