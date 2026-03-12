import Card from "@/app/components/layout/Card";
import Feature1 from "@/app/assets/features/feature 1.png";
import Feature2 from "@/app/assets/features/feature 2.png";
import Feature3 from "@/app/assets/features/feature 3.png";
import Feature4 from "@/app/assets/features/feature 4.png";

const Blockchain = () => {
    const cards = [
        {
            title: "Smart City",
            description: "Blockchain infrastructure for smart urban systems.",
            bullet: [
                "City data interoperability",
                "Smart transportation & utilities",
                "Decentralized city governance",
            ],
            img: Feature1,
        },
        {
            title: "Smart Energy",
            description:
                "Tokenized energy and decentralized energy management.",
            bullet: [
                "Renewable energy tracking",
                "Peer-to-peer energy trading",
                "Transparent energy data",
            ],
            img: Feature2,
        },
        {
            title: "Smart Health",
            description: "Secure and privacy-focused healthcare data.",
            bullet: [
                "Patient-owned medical records",
                "Secure data sharing",
                "Healthcare identity on blockchain",
            ],
            img: Feature3,
        },
        {
            title: "Smart Education",
            description: "Trusted digital education credentials.",
            bullet: [
                "Blockchain certificates",
                "Lifelong learning records",
                "Verifiable academic history",
            ],
            img: Feature4,
        },
    ];

    return (
        <section
            id="blockchain"
            className="py-15 overflow-hidden"
        >
            <div className="px-10 md:px-20 lg:px-40">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
                        One Blockchain{" "}
                        <span className="text-primary">Multiple Smart Solutions</span>
                    </h1>
                    <p className="mb-6 text-lg">
                        EDAX ENERGY BLOCKCHAIN
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-5 md:px-0 gap-15 mb-16">
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
                <p className="text-center mb-6 text-lg">
                    EDAX is designed as a modular blockchain platform that
                    supports real-world smart infrastructure and digital
                    services through a single ecosystem.
                </p>
            </div>
        </section>
    );
};

export default Blockchain;
