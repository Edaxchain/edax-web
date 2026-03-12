'use client';



export default function Partners() {
    const partnerCategories = [
        {
            id: 'education',
            title: 'Education & Research',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>,
            partners: [
                { name: 'มหาวิทยาลัยมหิดล ศาลายา', logo: '/logo/Mahidol_U.png' },
                { name: 'มหาวิทยาลัยราชภัฏเชียงใหม่ ศูนย์แม่ริม', logo: '/logo/CMRU.png' }
            ]
        },
        {
            id: 'energy',
            title: 'Green Energy',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>,
            partners: [
                { name: 'Energytrutol (EGT)', logo: '/logo/EGT.png' },
                { name: 'EEE Green Solar', logo: '/logo/EEE.png' }
            ]
        },
        {
            id: 'agriculture',
            title: 'Food & Agriculture',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg>,
            partners: [
                { name: 'ศูนย์รวมสวนเห็ดบ้านอรัญญิก', logo: '/logo/Aranyik.png' },
                { name: 'Thai Global Food', logo: '/logo/Global_Food.png' }
            ]
        },
        {
            id: 'hospitality',
            title: 'Hospitality',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.75M5.25 9h.008v.008H5.25V9Zm4.5 0h.008v.008H9.75V9Zm4.5 0h.008v.008h-.008V9Zm4.5 0h.008v.008h-.008V9Zm-13.5 3h.008v.008H5.25V12Zm4.5 0h.008v.008H9.75V12Zm4.5 0h.008v.008h-.008V12Zm4.5 0h.008v.008h-.008V12Zm-13.5 3h.008v.008H5.25V15Zm4.5 0h.008v.008H9.75V15Zm4.5 0h.008v.008h-.008V15Zm4.5 0h.008v.008h-.008V15Zm-13.5 3h.008v.008H5.25V18Zm4.5 0h.008v.008H9.75V18Zm4.5 0h.008v.008h-.008V18Zm4.5 0h.008v.008h-.008V18Z" /></svg>,
            partners: [
                { name: 'DNA Resort', logo: '/logo/DNA.png' }
            ]
        }
    ];

    return (
        <section id="partners" className="w-full bg-background text-text-main py-4 md:py-4">
            <div className="max-w-6xl mx-auto w-full">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Our Partners
                    </h2>
                    <p className="text-text-main max-w-2xl mx-auto text-sm md:text-base">
                        ขับเคลื่อนนวัตกรรมและเติบโตไปพร้อมกับพันธมิตรที่แข็งแกร่งของเราจากหลากหลายอุตสาหกรรม
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                    {partnerCategories.map((category) => (

                        <div
                            key={category.id}
                            className="group relative bg-background rounded-3xl p-6 md:p-8 transition-all duration-500 overflow-hidden flex flex-col h-full border border-border/50 shadow-border [@media(hover:hover)]:border-border/10 [@media(hover:hover)]:shadow-none [@media(hover:hover)]:hover:border-border/50 [@media(hover:hover)]:hover:shadow-border"
                        >
                            {/* Category */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-xl transition-colors bg-background/10 text-text-main [@media(hover:hover)]:bg-background/5 [@media(hover:hover)]:text-text-sub group-hover:bg-foreground/10 group-hover:text-primary">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold transition-colors text-text-main [@media(hover:hover)]:text-text-sub group-hover:text-text-main">
                                    {category.title}
                                </h3>
                            </div>


                            <div className="flex-1 flex flex-col sm:flex-row flex-wrap gap-4 items-stretch justify-start">
                                {category.partners.map((partner, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-background border border-border/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 flex-1 min-w-[150px] [@media(hover:hover)]:grayscale [@media(hover:hover)]:opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                    >
                                        {/* Logo */}
                                        {partner.logo && (
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="max-h-12 w-auto object-contain drop-shadow-md"
                                            />
                                        )}
                                        {/* Text */}
                                        <span className="font-semibold text-center text-sm md:text-base text-text-sub break-words text-balance">
                                            {partner.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}