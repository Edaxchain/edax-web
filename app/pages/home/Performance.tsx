import { useTranslations } from "next-intl";

const Performance = () => {
    const t = useTranslations("HomePage");

    return (
        <section
            id="performance"
            className="py-15 overflow-hidden"
        >
            <div className="text-center px-10 md:px-20 lg:px-50">
                <h1 className="text-5xl font-black tracking-tighter uppercase mb-4">
                    {t("performance.title")}
                </h1>
                <p className="mb-6 text-lg">
                    {t("performance.description_1")}
                </p>
                <p className="text-left text-lg">
                    {t("performance.description_2")}
                </p>
            </div>
        </section>
    );
};

export default Performance;
