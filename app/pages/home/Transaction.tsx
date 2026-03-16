import Image from "next/image";
import TransactionImg from "@/app/assets/transaction.png";
import { useTranslations } from "next-intl";

const Transaction = () => {
    const t = useTranslations("HomePage");

    return (
        <section id="transaction" className="py-15">
            <div className="px-10 md:px-20 lg:px-50 flex flex-col md:flex-row items-center gap-x-20 gap-y-10">
                <div className="w-full sm:w-2/3 lg:w-1/3">
                    <Image
                        src={TransactionImg}
                        alt="Transaction Path"
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-full md:w-1/2 grow">
                    <h1 className="text-5xl text-right lg:text-6xl font-black tracking-tighter uppercase mb-6 leading-tight">
                        {t("transaction.title")}
                    </h1>
                    <p className="text-left text-lg leading-relaxed">
                        {t("transaction.description")}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Transaction;
