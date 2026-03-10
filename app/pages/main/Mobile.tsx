import Image from "next/image";
import AppstoreImg from "@/app/assets/mobile/appstore.png";
import PlaystoreImg from "@/app/assets/mobile/playstore.png";

const Mobile = () => {
    return (
        <section id="mobile" className="py-15 2xl:py-40 bg-background">
            <div className="px-[20vw] pt-[20vh] sm:pt-[30vh] md:pt-[40vh] lg:pt-0">
                <div className="bg-[#14F195] rounded-2xl px-0 md:px-10 grid grid-cols-1 lg:grid-cols-3 gap-x-8 items-center shadow-lg py-10">
                    <div className="lg:row-span-2 relative h-[10vh] lg:h-0 mb-10 lg:mb-0">
                        <div
                            className="
                            /* Small */
                            absolute bottom-1 left-1/2 -translate-x-1/2 
                            
                            /* Lg */
                            lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
                            
                            /* Sizing */
                            w-[35vw] sm:w-[30vw] lg:w-[15vw] lg:min-w-[180px] 
                            aspect-[720/1280] 
                            
                            /* Styling */
                            bg-yellow-400 rounded-4xl lg:rounded-[3rem] shadow-2xl z-20 border-6 border-white 
                            flex items-center justify-center overflow-hidden"
                        >
                            <span className="text-yellow-900 font-bold text-center p-4">
                                Centered Phone Mockup
                            </span>

                            {/* <Image src={PhoneImg} fill className="object-cover" /> */}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h1 className="text-center text-[4vw] lg:text-[2.5vw] font-black tracking-tighter uppercase text-black mb-10">
                            Get Mobile App Version
                        </h1>

                        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                            <Image
                                src={AppstoreImg}
                                alt="Appstore"
                                className="w-3/5 md:w-1/2 cursor-pointer object-contain grow"
                            />
                            <Image
                                src={PlaystoreImg}
                                alt="Playstore"
                                className="w-3/5 md:w-1/2 cursor-pointer object-contain grow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mobile;
