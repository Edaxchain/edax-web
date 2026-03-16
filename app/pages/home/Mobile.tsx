import Image from "next/image";
import AppstoreImg from "@/app/assets/mobile/appstore.png";
import PlaystoreImg from "@/app/assets/mobile/playstore.png";
import App from "@/app/assets/app.png";
import { useTranslations } from "next-intl";

const Mobile = () => {
    const t = useTranslations("HomePage");

    return (
        <section id="mobile" className="py-15 lg:py-40 overflow-hidden">
            <div className="px-6 md:px-20 lg:px-50 pt-[45vw] md:pt-[30vw] lg:pt-0">
                {/* Main Card Container */}
                <div className="relative rounded-[2.5rem] border border-border grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-12 items-center p-8 lg:p-16">
                    {/* Left Side: The Phone Mockup */}
                    <div className="relative h-[15vh] lg:h-full min-h-[120px] lg:min-h-0">
                        <div
                            className="
                        /* Positioning: Flows above and below the card */
                        absolute bottom-0 lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 
                        
                        /* Sizing */
                        w-[40vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw] lg:min-w-[220px] 
                        aspect-[720/1440] 
                        
                        /* Visuals: Sophisticated Phone Frame */
                        bg-[#1a1a1a] rounded-[2.5rem] lg:rounded-[3.5rem] 
                        shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20
                        border-8 border-[#222] ring-1 ring-white/10
                        flex items-center justify-center overflow-hidden"
                        >
                            {/* Content inside phone */}
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-white/40 text-xs font-mono uppercase tracking-widest">
                                    Preview Mode
                                </span>
                            </div>
                            <Image
                                src={App}
                                alt="app"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side: Content Area */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                                {t("mobile.pre_title")}
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-tight">
                                {t.rich("mobile.title", {
                                    primary: (chunks) => (
                                        <span className="text-primary">
                                            {chunks}
                                        </span>
                                    ),
                                })}
                            </h1>
                            <p className="max-w-md mx-auto lg:mx-0 text-lg">
                                {t("mobile.description")}
                            </p>
                        </div>

                        {/* Store Buttons Container */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                            <div className="h-14 w-44 relative cursor-pointer hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={AppstoreImg}
                                    alt="Appstore"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="h-14 w-44 relative cursor-pointer hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={PlaystoreImg}
                                    alt="Playstore"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mobile;
