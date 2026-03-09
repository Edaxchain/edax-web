const Hero = () => {
    return (
        <div className="relative w-full min-h-[500px] bg-background rounded-3xl overflow-hidden flex items-center">
            {/* 1. ส่วนภาพพื้นหลัง */}
            <img
                src="/hero-bg.jpg"
                alt="Edax Background"
                className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-60 z-0 pointer-events-none"
                style={{
                    maskImage:
                        "linear-gradient(to left, black 50%, transparent)",
                }} // ไล่เฉดให้กลืนกับพื้นหลังทางซ้าย
            />

            {/* 2. ส่วนเนื้อหาตัวอักษร (Content over background) */}
            <div className="relative z-10 w-full max-w-4xl px-12 py-16 text-white">
                {/* หัวข้อใหญ่ */}
                <h1 className="text-6xl font-bold mb-6 tracking-tight">
                    EDAX Network Chain
                </h1>

                {/* คำอธิบายภาษาไทย */}
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
                    มุ่งเน้นการพัฒนาระบบการเงินดิจิทัลที่มีประสิทธิภาพและเข้าถึงได้ง่าย
                    สำหรับประชาชนไทยทุกระดับ เน้นการประยุกต์ใช้เทคโนโลยีบล็อกเชน
                    ที่มีความปลอดภัยสูง มีความรวดเร็ว
                    และมีต้นทุนการดำเนินงานที่เหมาะสม
                    มีจุดเด่นเพื่อให้ประชาชนสามารถเข้าถึงโอกาสการลงทุนในสินทรัพย์บน
                    อุตสาหกรรมพลังงาน สินค้าเกษตร และธนาคารดิจิทัล ผ่านระบบแอป
                    พลิเคชันที่พัฒนาเป็นภาษาไทย
                </p>

                {/* ส่วนปุ่มกด */}
                <div className="flex gap-4">
                    {/* ปุ่ม EXPLORE */}
                    <button className="bg-[#14F195] text-black rounded-full cursor-pointer px-10 py-3 text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-[#14F195]/30">
                        EXPLORE
                    </button>

                    {/* ปุ่ม JOURNEY */}
                    <button className="bg-black text-white border border-edax-border rounded-full cursor-pointer px-10 py-3 text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-black/30">
                        JOURNEY
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
