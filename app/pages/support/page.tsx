import React from 'react';
// Import ไอคอนที่จำเป็น
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Send,
    Linkedin,
    ChevronDown
} from 'lucide-react';

const SupportPage = () => {
    const XIcon = ({ size = 18 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
        </svg>
    );
    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-16 px-4">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                    Support Hub
                </h1>
                <p className="text-muted-foreground">ศูนย์ช่วยเหลือและสนับสนุนผู้ใช้งาน EDAX Network</p>
            </div>

            <div className="max-w-3xl mx-auto flex flex-col gap-10">

                {/* 1. FAQ Section */}
                <section id="faq" className="w-full">
                    <div className="bg-nav-bg border border-nav-border rounded-3xl overflow-hidden shadow-lg">
                        <div className="p-6 border-b border-nav-border bg-nav-border/5">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="divide-y divide-nav-border">
                            {/* ข้อที่ 1 */}
                            <details className="group border-none outline-none">
                                <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium text-foreground hover:bg-nav-border/10 transition-colors list-none">
                                    <span>EDAX Network คืออะไร?</span>
                                    <ChevronDown size={18} className="text-foreground transition-transform group-open:rotate-180" />
                                </summary>
                                <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                                    ระบบบล็อกเชนที่เน้นการประยุกต์ใช้ในอุตสาหกรรมพลังงาน สินค้าเกษตร และธนาคารดิจิทัล มุ่งเน้นความปลอดภัยและต้นทุนที่เหมาะสมสำหรับคนไทย.
                                </div>
                            </details>

                            {/* ข้อที่ 2 */}
                            <details className="group border-none outline-none">
                                <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium text-foreground hover:bg-nav-border/10 transition-colors list-none">
                                    <span>ความปลอดภัยของระบบเป็นอย่างไร?</span>
                                    <ChevronDown size={18} className="text-foreground transition-transform group-open:rotate-180" />
                                </summary>
                                <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                                    เน้นการประยุกต์ใช้เทคโนโลยีบล็อกเชนที่มีความปลอดภัยสูงและรวดเร็ว เพื่อให้ประชาชนเข้าถึงโอกาสการลงทุนได้อย่างมั่นใจ.
                                </div>
                            </details>
                        </div>
                    </div>
                </section>

                {/* 2. Ticket Section */}
                <section id="ticket" className="w-full">
                    <div className="bg-nav-bg border border-nav-border rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold mb-2">Submit a Ticket</h3>
                            <p className="text-sm text-muted-foreground">หากพบปัญหาทางเทคนิค สามารถแจ้งเรื่องให้ทีมงานตรวจสอบได้ทันที</p>
                        </div>
                        <button className="whitespace-nowrap px-8 py-3 bg-foreground text-background font-bold rounded-full hover:opacity-90 transition-opacity">
                            Open Ticket
                        </button>
                    </div>
                </section>

                {/* 3. Contact Section */}
                <section id="contact" className="w-full">
                    <div className="bg-nav-bg border border-nav-border rounded-3xl p-8">
                        <h3 className="text-xl font-bold mb-8">Contact Us</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-foreground/10 rounded-xl text-foreground">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-1">Phone</p>
                                    <p className="text-sm font-medium">+66 02 103 4555</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-foreground/10 rounded-xl text-foreground">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-1">Email</p>
                                    <p className="text-sm font-medium">Support@edaxinnovation.com</p>
                                </div>
                            </div>

                            {/* Office */}
                            <div className="flex items-start gap-4 md:col-span-2">
                                <div className="p-3 bg-foreground/10 rounded-xl text-foreground">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-1">Office</p>
                                    <p className="text-sm font-medium leading-relaxed">
                                        82/11 M.5, Sao Thong Hin Subdistrict, Bang Yai district, Nonthaburi 11140
                                    </p>
                                </div>
                            </div>

                            {/* Social Media Group */}
                            <div className="md:col-span-2 pt-6 border-t border-nav-border">
                                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-4 text-center md:text-left">Community & Social</p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <a href="https://www.facebook.com/edaxofficial/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-nav-border/20 rounded-lg hover:text-foreground transition-all">
                                        <Facebook size={18} />
                                    </a>
                                    <a href="https://x.com/edaxchain/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-nav-border/20 rounded-lg hover:text-foreground transition-all">
                                        <XIcon size={18} />
                                    </a>
                                    <a href="https://t.me/edaxofficial"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-nav-border/20 rounded-lg hover:text-foreground transition-all">
                                        <Send size={18} />
                                    </a>
                                    <a href="/support"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-nav-border/20 rounded-lg hover:text-foreground transition-all">
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