import { StaticImageData } from "next/image";
import Feature1 from "@/app/assets/features/feature 1.png";
import Feature2 from "@/app/assets/features/feature 2.png";
import Feature3 from "@/app/assets/features/feature 3.png";
import Feature4 from "@/app/assets/features/feature 4.png";

const Card = ({
    title,
    path,
    img,
}: {
    title?: string;
    path: string;
    img: string | StaticImageData;
}) => {
    const bgUrl = typeof img === "string" ? img : img.src;

    return (
        <div
            className="relative p-8 rounded-3xl shadow-2xl cursor-pointer overflow-hidden group min-h-[300px] flex flex-col justify-end transition-all duration-500"
            style={{
                backgroundImage: `url("${bgUrl}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* 3. Content - Positioned on top of the background */}
            <div className="relative z-10 flex items-center justify-between gap-4">
                {/* Title - 'flex-1' ensures it takes up available space but doesn't crush the arrow */}
                <h2 className="text-left text-xl lg:text-2xl font-bold text-white group-hover:text-primary transition-colors flex-1 line-clamp-2">
                    {title}
                </h2>

                {/* Arrow Icon - No 'mt-4' needed anymore since they are in the same row */}
                <div className="shrink-0 w-10 h-10 rounded-full border flex items-center justify-center text-white group-hover:border-primary group-hover:text-primary transition-all">
                    →
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    const cards = [
        {
            title: "EVM (Arbitrum Orbit / Nitro)",
            path: "/",
            img: Feature1,
        },
        {
            title: "Espresso Shared Sequencer (HotShot BFT)",
            path: "/",
            img: Feature2,
        },
        {
            title: "Solana Proof-of-History (PoH) anchoring",
            path: "/",
            img: Feature3,
        },
        {
            title: "Modular Data Availability (DA)",
            path: "/",
            img: Feature4,
        },
    ];

    return (
        <section id="features" className="py-15 overflow-hidden">
            <div className="px-10 md:px-20 lg:px-40">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-5 md:px-0 gap-15 mb-16">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            path={card.path}
                            img={card.img}
                        />
                    ))}
                </div>
            </div>
            <div className="text-left px-10 md:px-20 lg:px-50">
                <h1 className="text-5xl font-black tracking-tighter uppercase mb-4">
                    Espresso Shared Sequencer (HotShot BFT)
                </h1>
                <p className="mb-6 text-lg">
                    Sequencer ทำหน้าที่กำหนดลำดับธุรกรรม Espresso ให้บริการ
                    sequencer แบบกลางและกระจายศูนย์แก่หลายเชน พร้อมออก
                    confirmation certificate (ลายเซ็นรวม)
                    เพื่อพิสูจน์ว่าจัดลำดับ batch อย่างยุติธรรมและรวดเร็ว
                    ผู้ใช้จึงได้ fast confirmations ก่อนการชำระบัญชีจริงบน
                    Ethereum
                </p>
            </div>
        </section>
    );
};

export default Features;
