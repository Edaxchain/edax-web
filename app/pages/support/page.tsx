import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Send,
    Linkedin,
    ChevronDown,
} from "lucide-react";
import { useTranslations } from "next-intl";

const SupportPage = () => {
    const t = useTranslations("SupportPage");

    const XIcon = ({ size = 18 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
        </svg>
    );
    return (
        <div className="min-h-screen bg-background text-text-main pt-24 pb-16 px-4">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-main">
                    {t("title")}
                </h1>
                <p className="text-text-sub">{t("description")}</p>
            </div>

            <div className="max-w-3xl mx-auto flex flex-col gap-10">
                {/* 1. FAQ Section */}
                <section id="faq" className="w-full">
                    <div className="bg-background border border-border/5 rounded-3xl overflow-hidden shadow-lg">
                        <div className="p-6 border-b border-border/5 bg-gackground">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                {t("faq.title")}
                            </h2>
                        </div>

                        <div className="divide-y divide-border/5">
                            <details className="group border-none outline-none">
                                <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium text-text-main hover:bg-primary-button/5 transition-colors list-none">
                                    <span>{t("faq.question_1")}</span>
                                    <ChevronDown
                                        size={18}
                                        className="text-text-main transition-transform group-open:rotate-180"
                                    />
                                </summary>
                                <div className="px-6 pb-6 text-sm text-text-sub leading-relaxed">
                                    {t("faq.answer_1")}
                                </div>
                            </details>

                            <details className="group border-none outline-none">
                                <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium text-foreground hover:bg-primary-button/5 transition-colors list-none">
                                    <span>{t("faq.question_2")}</span>
                                    <ChevronDown
                                        size={18}
                                        className="text-text-main transition-transform group-open:rotate-180"
                                    />
                                </summary>
                                <div className="px-6 pb-6 text-sm text-text-sub leading-relaxed">
                                    {t("faq.answer_2")}
                                </div>
                            </details>
                        </div>
                    </div>
                </section>

                {/* 2. Ticket Section */}
                <section id="ticket" className="w-full">
                    <div className="bg-background border border-border/5 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold mb-2">
                                {t("ticket.title")}
                            </h3>
                            <p className="text-sm text-text-main">
                                {t("ticket.description")}
                            </p>
                        </div>
                        <button className="whitespace-nowrap px-8 py-3 bg-background text-text-main font-bold rounded-full hover:opacity-90 transition-opacity">
                            {t("ticket.button")}
                        </button>
                    </div>
                </section>

                {/* 3. Contact Section */}
                <section id="contact" className="w-full">
                    <div className="bg-background border border-border/5 rounded-3xl p-8">
                        <h3 className="text-xl font-bold mb-8">{t("contact.title")}</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-foreground/10 rounded-xl text-text-main">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-text-main uppercase tracking-widest font-semibold mb-1">
                                        {t("contact.phone")}
                                    </p>
                                    <p className="text-sm font-medium">
                                        +66 02 103 4555
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-foreground/10 rounded-xl text-foreground">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-text-main uppercase tracking-widest font-semibold mb-1">
                                        {t("contact.email")}
                                    </p>
                                    <p className="text-sm font-medium">
                                        Support@edaxinnovation.com
                                    </p>
                                </div>
                            </div>

                            {/* Office */}
                            <div className="flex items-start gap-4 md:col-span-2">
                                <div className="p-3 bg-foreground/10 rounded-xl text-text-main">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-text-main uppercase tracking-widest font-semibold mb-1">
                                        {t("contact.address")}
                                    </p>
                                    <p className="text-sm font-medium leading-relaxed">
                                        {t("contact.address-info")}
                                    </p>
                                </div>
                            </div>

                            {/* Social Media Group */}
                            <div className="md:col-span-2 pt-6">
                                <p className="text-xs text-text-main uppercase tracking-widest font-semibold mb-4 text-center md:text-left">
                                    {t("community_social")}
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <a
                                        href="https://www.facebook.com/edaxofficial/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-border/10 rounded-lg hover:text-text-main transition-all"
                                    >
                                        <Facebook size={18} />
                                    </a>
                                    <a
                                        href="https://x.com/edaxchain/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-border/10 rounded-lg hover:text-text-main transition-all"
                                    >
                                        <XIcon size={18} />
                                    </a>
                                    <a
                                        href="https://t.me/edaxofficial"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-border/10 rounded-lg hover:text-text-main transition-all"
                                    >
                                        <Send size={18} />
                                    </a>
                                    <a
                                        href="/support"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-border/10 rounded-lg hover:text-text-main transition-all"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SupportPage;
