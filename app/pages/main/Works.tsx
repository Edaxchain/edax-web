import Card from "@/app/components/layout/Card";
import icon1 from "@/app/assets/icons/Icon 1.png";
import icon2 from "@/app/assets/icons/Icon 2.png";
import icon3 from "@/app/assets/icons/Icon 3.png";
import icon4 from "@/app/assets/icons/Icon 4.png";

const Works = () => {
    const cards = [
        {
            title: "1. Connect Wallet",
            description: "Securely connect your blockchain wallet.",
            bullet: [],
            img: icon1,
        },
        {
            title: "2. Select Product",
            description: "Choose smart solutions you want to use.",
            bullet: [],
            img: icon2,
        },
        {
            title: "3. Confirm Transaction",
            description: "All actions are verified on-chain.",
            bullet: [],
            img: icon3,
        },
        {
            title: "4. Access Smart Services",
            description: "Use real-world smart systems with transparency.",
            bullet: [],
            img: icon4,
        },
    ];

    return (
        <section
            id="works"
            className="py-15 bg-background overflow-hidden border-t border-nav-border"
        >
            <div className="container mx-auto px-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
                        How EDAX Works
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-15 md:px-0 gap-15 mb-16">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            bullet={card.bullet}
                            img={card.img}
                        />
                    ))}
                </div>
                <p className="text-gray-400 text-center mb-6 text-lg">
                    EDAX is designed as a modular blockchain platform that
                    supports real-world smart infrastructure and digital
                    services through a single ecosystem.
                </p>
            </div>
        </section>
    );
};

export default Works;
