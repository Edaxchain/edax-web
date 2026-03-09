const Performance = () => {
    return (
        <section
            id="performance"
            className="py-15 bg-background overflow-hidden border-t border-nav-border"
        >
            <div className="text-center px-20">
                <h1 className="text-5xl font-black tracking-tighter uppercase mb-4">
                    EDAX รวดเร็วและเป็นกลาง
                </h1>
                <p className="mb-6">
                    EDAX ให้ประสบการณ์
                    “เร็วแบบรู้สึกได้”—กดส่งแล้วได้การตอบรับจาก Espresso
                    ภายในเสี้ยววินาที (เป้าหมาย p95 &lt; 1s)
                </p>
                <p className="text-left">
                    การจัดลำดับธุรกรรมก็โปร่งใสเพราะใช้ shared sequencer
                    แบบเป็นกลาง ลดโอกาสการสลับลำดับเพื่อเอาเปรียบ
                    และยังเพิ่มความออดิทได้ของ “เวลา/ลำดับ” ด้วยการอ้างอิง PoH
                    บน Solana ที่ตรวจสอบอิสระได้ เมื่อทราฟฟิกเติบโต
                    ต้นทุนค่าธรรมเนียมก็ลดลงด้วยสถาปัตยกรรม Modular DA
                    ที่เริ่มจาก Ethereum calldata (แข็งแรง เรียบง่าย)
                    และยืดหยุ่นไปยัง EigenDA/Celestia ได้ในภายหลัง
                    ทั้งหมดนี้ทำงานภายใต้ “ตาข่ายนิรภัย” ของ Ethereum
                    ซึ่งทำหน้าที่ชำระบัญชีขั้นสุดท้ายและเปิดหน้าต่าง fraud proof
                    สำหรับการโต้แย้งหากเกิดความผิดปกติ
                </p>
            </div>
        </section>
    );
};

export default Performance;
