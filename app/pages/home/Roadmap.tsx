import { useState } from "react";
import {
    motion,
    useTransform,
    useAnimationFrame,
    useMotionValue,
} from "framer-motion";
import { useTranslations } from "next-intl";

const Roadmap = () => {
    const [isPaused, setIsPaused] = useState(false);

    const baseX = useMotionValue(0);

    useAnimationFrame((t, delta) => {
        if (!isPaused) {
            // delta คือเวลาที่ผ่านไปในแต่ละเฟรม (ประมาณ 16ms)
            // ปรับน้อยลง = ช้าลง
            let moveBy = -0.001 * delta;
            let newValue = baseX.get() + moveBy;
            //ถ้าจบให้เริ่มใหม่
            if (newValue <= -33.33) {
                newValue = 0;
            }
            baseX.set(newValue);
        }
    });

    const x = useTransform(baseX, (v) => `${v}%`);

    const phases = [
        {
            phase: "Phase 1",
            title: "MVP Launch",
            items: ["1", "2", "3"],
            status: "Done",
        },
        {
            phase: "Phase 2",
            title: "Product Rollout",
            items: ["Smart City", "Health Care"],
            status: "In Progress",
        },
        {
            phase: "Phase 3",
            title: "Ecosystem",
            items: ["Mainnet", "Wallet", "DApps"],
            status: "Upcoming",
        },
        {
            phase: "Phase 4",
            title: "Global Expansion",
            items: [
                "Metaverse Integration",
                "Carbon Credit Exchange",
                "DAO Governance",
            ],
            status: "Upcoming",
        },
    ];
    const duplicatedPhases = [...phases, ...phases, ...phases];

    return (
        <section
            id="roadmap"
            className="py-24 bg-background overflow-hidden"
        >
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
                    Project{" "}
                    <span className="text-[#14F195] drop-shadow-[0_0_15px_rgba(20,241,149,0.3)]">
                        Roadmap
                    </span>
                </h2>
            </div>

            <div className="relative flex overflow-hidden py-10">
                <motion.div
                    className="flex gap-6 items-stretch"
                    style={{ x }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {duplicatedPhases.map((item, index) => (
                        <div
                            key={index}
                            className="w-[300px] md:w-[400px] shrink-0 flex"
                        >
                            {/* Outer Card */}
                            <div
                                className={`
                group relative w-full rounded-4xl p-px transition-all duration-500
                ${item.status === "In Progress" ? "bg-[#14F195]/50 shadow-[0_0_20px_rgba(20,241,149,0.1)]" : "bg-nav-border/50"}
                hover:bg-[#14F195] hover:shadow-[0_0_30px_rgba(20,241,149,0.4)] hover:-translate-y-2
              `}
                            >
                                {/* Inner Content: ตัวเนื้องาน Glassmorphism */}
                                <div className="bg-[#0A0A0A] h-full w-full rounded-4xl p-8 md:p-10 flex flex-col relative z-10 overflow-hidden">
                                    {/* Phase Number */}
                                    <span className="absolute -top-4 -right-2 text-8xl font-black italic opacity-[0.02] group-hover:opacity-[0.07] transition-opacity pointer-events-none select-none">
                                        {(index % phases.length) + 1}
                                    </span>

                                    {/* Status Tag */}
                                    <div className="mb-6">
                                        <span
                                            className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md border ${
                                                item.status === "Done"
                                                    ? "border-emerald-500/50 text-emerald-500 bg-emerald-500/5"
                                                    : item.status ===
                                                        "In Progress"
                                                      ? "border-[#14F195] text-[#14F195] bg-[#14F195]/10 animate-pulse"
                                                      : "border-white/10 text-white/40 bg-white/5"
                                            }`}
                                        >
                                            {item.status}
                                        </span>
                                    </div>

                                    {/* Header */}
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">
                                            {item.phase}
                                        </h3>
                                        <h4 className="text-[#14F195] text-xs font-black uppercase tracking-[0.15em] opacity-80">
                                            {item.title}
                                        </h4>
                                    </div>

                                    {/* List Items */}
                                    <ul className="space-y-4 grow">
                                        {item.items.map((point, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 text-sm text-white/60 group-hover:text-white/90 transition-colors"
                                            >
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#14F195] shrink-0 shadow-[0_0_5px_#14F195]" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Decorative Footer Line */}
                                    <div className="mt-8 h-px w-full bg-gradient-to-r from-[#14F195]/0 via-[#14F195]/40 to-[#14F195]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};

export default Roadmap;
