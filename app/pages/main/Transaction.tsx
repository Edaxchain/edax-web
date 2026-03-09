import Image from "next/image";
import TransactionImg from "@/app/assets/transaction.png";

const Transaction = () => {
    return (
        <section
            id="transaction"
            className="py-15 bg-background border-t border-nav-border"
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 px-20 sm:px-0">
                    <div className="w-full sm:w-2/3">
                        <Image
                            src={TransactionImg}
                            alt="Transaction Path"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <h1 className="text-4xl text-right md:text-6xl font-black tracking-tighter uppercase mb-6 leading-tight">
                            เส้นทางของธุรกรรม
                        </h1>
                        <p className="text-gray-400 text-left text-lg leading-relaxed">
                            เมื่อผู้ใช้ส่งธุรกรรมไปยัง EDAX RPC
                            ระบบจะรวบรวมธุรกรรมเป็นแบตช์ แล้วส่งไปให้ Espresso
                            (HotShot BFT) จัดลำดับและออกใบรับรองยืนยัน
                            การจัดลำดับ จากนั้น EDAX จะเผยแพร่
                            ข้อมูลแบตช์ไปยังเลเยอร์ Data Availability (เริ่มจาก
                            Ethereum calldata) พร้อมทั้งบันทึกหลักฐาน
                            เวลาโดยอ้างอิง Solana Proof-of-History (slot และ
                            blockhash) แล้วจึงนำแบตช์นั้นไปประมวลผลบน Nitro EVM;
                            หากผลลัพธ์ถูกต้อง ระบบจะ “ยอมรับ”
                            แบตช์และต่อมาจะทำการชำระบัญชีบน Ethereum L1
                            พร้อมเปิดช่วงเวลาให้โต้แย้ง (fraud-proof window)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Transaction;
