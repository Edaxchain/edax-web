"use client";

import Image from "next/image";
import Partners from "./Partners";
import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations("AboutPage");

    const teamMembers = [
        { name: "Person1", role: "Founder", image: "" },
        { name: "Person2", role: "CEO", image: "" },
        { name: "Person3", role: "CEO", image: "" },
        { name: "Person4", role: "CEO", image: "" },
    ];

    return (
        <main className="min-h-screen w-full bg-background text-text-main pt-24 pb-12">
            <div className="max-w-6xl mx-auto w-full px-4 space-y-24">
                {/* 1. Header Section */}
                <section className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {t.rich("title", {
                            primary: (chunks) => (
                                <span className="text-primary">{chunks}</span>
                            ),
                        })}
                    </h1>
                    <p className="text-text-main text-base md:text-lg leading-relaxed">
                        {t("description")}
                    </p>
                </section>

                {/* 2. Mission & Vision Section  */}

                <section
                    id="missionvision"
                    className="max-w-4xl mx-auto space-y-16 md:space-y-24"
                >
                    {/* Mission */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            {t("mission.title")}
                        </h2>
                        <p className="text-text-main text-xl md:text-2xl leading-relaxed font-medium">
                            {t("mission.description")}
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            {t("vision.title")}
                        </h2>
                        <p className="text-text-main text-xl md:text-2xl leading-relaxed font-medium">
                            {t("vision.description")}
                        </p>
                    </div>
                </section>

                {/* 3. Our Team Section */}
                <section id="team">
                    <div className="text-center mb-4">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            {t("team.title")}
                        </h2>
                        <p className="text-text-main">
                            {t("team.description")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {teamMembers.map((member, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-background rounded-3xl p-6 md:p-8 transition-all duration-500 overflow-hidden flex flex-col h-full border border-border/50 shadow-border [@media(hover:hover)]:border-border/10 [@media(hover:hover)]:shadow-none [@media(hover:hover)]:hover:border-border/50 [@media(hover:hover)]:hover:shadow-border"
                            >
                                <div className="w-24 h-24 mx-auto bg-background border border-border/50 [@media(hover:hover)]:border-border/10 rounded-full mb-4 overflow-hidden group-hover:border-border/50 transition-colors duration-300 flex items-center justify-center">
                                    {member.image ? (
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={96}
                                            height={96}
                                            className="w-full h-full object-cover grayscale-0 [@media(hover:hover)]:grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    ) : (
                                        <span className="text-2xl font-bold text-text-main [@media(hover:hover)]:text-text-sub group-hover:text-primary transition-colors">
                                            {member.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-lg font-bold text-text-main [@media(hover:hover)]:text-gray-200 group-hover:text-primary transition-colors">
                                    {member.name}
                                </h3>

                                <p className="text-sm text-text-main mt-1">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Partners Section */}
                <div>
                    <Partners />
                </div>
            </div>
        </main>
    );
}
