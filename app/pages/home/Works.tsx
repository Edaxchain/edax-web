import Card from "@/app/components/layout/Card";
import icon1 from "@/app/assets/icons/Icon 1.png";
import icon2 from "@/app/assets/icons/Icon 2.png";
import icon3 from "@/app/assets/icons/Icon 3.png";
import icon4 from "@/app/assets/icons/Icon 4.png";
import { useTranslations } from "next-intl";

const Works = () => {
    const t = useTranslations("HomePage");

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
        <section id="works" className="py-15 overflow-hidden">
            <div className="px-10 md:px-20 lg:px-40">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
                        {t.rich("works.title", {
                            primary: (chunks) => (
                                <span className="text-primary">{chunks}</span>
                            ),
                        })}
                    </h1>
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
                    {t("works.description")}
                </p>
            </div>
        </section>
    );
};

export default Works;
