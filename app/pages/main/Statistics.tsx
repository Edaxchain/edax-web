const StatItem = ({ value, label }: { value: string; label: string }) => (
    <div className="text-center">
        <h2 className="text-6xl text-[#14F195] font-black tracking-tighter uppercase mb-4 drop-shadow-[0_0_15px_rgba(20,241,149,0.3)]">
            {value}
        </h2>
        <p className="text-xl">{label}</p>
    </div>
);

const Statistics = () => {
    const stats = [
        { value: "2,459", label: "Total users" },
        { value: "20", label: "Total Partners" },
        { value: "35.0", label: "Floor Price" },
        { value: "2M", label: "Volume Trades" },
    ];

    return (
        <section
            id="statistics"
            className="py-15 bg-background overflow-hidden"
        >
            <div className="px-10 lg:px-40 mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-20">
                {stats.map((stat, index) => (
                    <StatItem
                        key={index}
                        value={stat.value}
                        label={stat.label}
                    />
                ))}
            </div>
        </section>
    );
};

export default Statistics;
