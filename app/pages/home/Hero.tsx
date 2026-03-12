import { useTranslations } from "next-intl";


const Hero = () => {

    const t = useTranslations("HomePage");
    
    return (
        <div className="relative w-full min-h-[500px] rounded-3xl overflow-hidden flex items-center">
            <img
                src="/hero-bg.jpg"
                alt="Edax Background"
                className="absolute right-0 top-0 h-full w-2/3 object-cover"
                style={{
                    maskImage:
                        "linear-gradient(to left, black 50%, transparent)",
                }}
            />

            <div className="relative z-10 w-full max-w-4xl px-12 py-16">
                <h1 className="text-6xl font-bold mb-6 tracking-tight">
                    {t("hero.title")}
                </h1>

                <p className="text-lg leading-relaxed max-w-2xl mb-10">
                    {t("hero.description")}
                </p>

                {/* ส่วนปุ่มกด */}
                <div className="flex gap-4">
                    {/* ปุ่ม EXPLORE */}
                    <button className="bg-primary-button text-black rounded-full cursor-pointer px-10 py-3 text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-[#14F195]/30">
                        {t("hero.button-1")}
                    </button>

                    {/* ปุ่ม JOURNEY */}
                    <button className="bg-secondary-button text-white border border-edax-border rounded-full cursor-pointer px-10 py-3 text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-black/30">
                        {t("hero.button-2")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
