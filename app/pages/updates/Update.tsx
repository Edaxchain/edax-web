"use client";
import { useState } from "react";
import { LoaderCircle, Newspaper, BookOpen } from "lucide-react";
import { useTranslations } from "next-intl";

const extractImage = (item: any) => {
    let url = item.enclosure?.url;
    if (!url || !url.match(/\.(jpg|jpeg|png|gif|webp)/i)) {
        const content = item.content || "";
        const imgRegExp = /<img[^>]+src="([^">]+)"/;
        const match = imgRegExp.exec(content);
        url = match ? match[1] : null;
    }

    if (url) {
        return url.replace("-150x150", "").replace("-300x200", "");
    }

    if (item.enclosure && item.enclosure.url) {
        return item.enclosure.url;
    }

    return null;
};
const FALLBACK_IMAGE =
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop";

const formatDate = (rawDate: string | undefined) => {
    if (!rawDate) return "Breaking News";

    let dateObj = new Date(rawDate);

    if (isNaN(dateObj.getTime())) {
        try {
            const cleanDate = rawDate.split(", ")[1] || rawDate;
            const parts = cleanDate.split(" ");

            const thaiMonths: { [key: string]: string } = {
                "ม.ค.": "Jan",
                "ก.พ.": "Feb",
                "มี.ค.": "Mar",
                "เม.ย.": "Apr",
                "พ.ค.": "May",
                "มิ.ย.": "Jun",
                "ก.ค.": "Jul",
                "ส.ค.": "Aug",
                "ก.ย.": "Sep",
                "ต.ค.": "Oct",
                "พ.ย.": "Nov",
                "ธ.ค.": "Dec",
            };
            const day = parts[0];
            const month = thaiMonths[parts[1]] || parts[1];
            const year = parts[2];
            const time = parts[3];
            dateObj = new Date(`${day} ${month} ${year} ${time}`);
        } catch (e) {
            return "Breaking News";
        }
    }
    if (isNaN(dateObj.getTime())) return "Breaking News";
    return (
        dateObj.toLocaleDateString("th-TH", {
            day: "numeric",
            month: "short",
            year: "2-digit",
        }) +
        " | " +
        dateObj.toLocaleTimeString("th-TH", {
            hour: "2-digit",
            minute: "2-digit",
        }) +
        " น."
    );
};

export default function UpdatesContent({ news = [], blogs = [] }: any) {
    const t = useTranslations("UpdatePage");
    const [activeTab, setActiveTab] = useState<"news" | "blog">("news");
    const newsItems = news?.items || [];
    const newsSource = news?.source || "News";

    const blogItems = blogs?.items || [];
    const blogSource = blogs?.source || "Blogs";

    const renderCard = (item: any, source: string) => {
        const imageUrl = extractImage(item) || FALLBACK_IMAGE;
        return (
            <a
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row gap-6 bg-white/5 border border-border/10 p-5 rounded-[2.5rem] hover:border-border/40 transition-all duration-300 hover:bg-primary-button/10"
            >
                <div className="w-full md:w-64 h-48 md:h-40 shrink-0 overflow-hidden rounded-[2rem] border border-border/5">
                    <img
                        src={imageUrl}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-center flex-1">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] font-bold text-text-main uppercase tracking-widest bg-primary-button/10 px-3 py-1 rounded-full">
                            {source}
                        </span>
                        <span className="text-text-sub text-xs font-medium">
                            {formatDate(item.pubDate)}
                        </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-main group-hover:text-text-main/70 transition-colors line-clamp-2">
                        {item.title}
                    </h3>
                    <p className="text-text-sub text-sm mt-3 line-clamp-2">
                        {item.contentSnippet || "Read more"}
                    </p>
                </div>
            </a>
        );
    };

    return (
        <>
            {/* Tab */}
            <div className="flex p-1.5 bg-background backdrop-blur-xl border border-border/10 rounded-[2rem] w-fit mb-12">
                <button
                    onClick={() => setActiveTab("news")}
                    className={`flex items-center gap-3 px-8 py-3 rounded-[1.5rem] cursor-pointer transition-all duration-300 ${
                        activeTab === "news"
                            ? "bg-primary-button text-black shadow-lg scale-105"
                            : "text-text-sub hover:bg-white/5"
                    }`}
                >
                    <Newspaper size={18} />
                    <div className="flex flex-col text-left">
                        <span
                            className={`text-sm font-bold uppercase transition-colors ${
                                activeTab === "news" ? "!text-black" : ""
                            }`}
                        >
                            {t("news")}
                        </span>
                    </div>
                </button>
                <button
                    onClick={() => setActiveTab("blog")}
                    className={`flex items-center gap-3 px-8 py-3 rounded-[1.5rem] cursor-pointer transition-all duration-300 ${
                        activeTab === "blog"
                            ? "bg-primary-button text-black shadow-lg scale-105"
                            : "text-text-sub hover:bg-white/5"
                    }`}
                >
                    <BookOpen size={18} />
                    <div className="flex flex-col text-left">
                        <span
                            className={`text-sm font-bold uppercase transition-colors ${
                                activeTab === "blog" ? "!text-black" : ""
                            }`}
                        >
                            {t("blogs")}
                        </span>
                    </div>
                </button>
            </div>

            {/* Content Area */}
            <div className="space-y-6 min-h-[400px]">
                {activeTab === "news" ? (
                    newsItems.length > 0 ? (
                        newsItems.map((item: any) =>
                            renderCard(item, newsSource),
                        )
                    ) : (
                        <div className="flex flex-col items-center justify-center py-24 gap-4">
                            <LoaderCircle
                                className="animate-spin text-primary"
                                size={48}
                            />
                            <p className="text-text-main font-medium animate-pulse tracking-widest text-sm">
                                Fetching News...
                            </p>
                        </div>
                    )
                ) : blogItems.length > 0 ? (
                    blogItems.map((item: any) => renderCard(item, blogSource))
                ) : (
                    <div className="flex flex-col items-center justify-center py-24 gap-4">
                        <LoaderCircle
                            className="animate-spin text-primary"
                            size={48}
                        />
                        <p className="text-text-main font-medium animate-pulse tracking-widest text-sm">
                            Fetching Blogs...
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}
