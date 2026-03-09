import Image from "next/image";

const Card = ({
    title,
    description,
    bullet,
    img,
}: {
    title: string;
    description: string;
    bullet: string[];
    img: string;
}) => {
    return (
        <div className="bg-background p-6 rounded-lg shadow-lg border hover:border-[#14F195] transition-colors group">
            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-md bg-nav-border/20">
                {img ? (
                    <Image
                        src={img}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20">
                        No Image
                    </div>
                )}
            </div>
            <h2 className="text-left text-2xl font-bold mb-4 group-hover:text-[#14F195] transition-colors">
                {title}
            </h2>
            <p className="text-left mb-4 text-gray-400">{description}</p>
            <ul className="text-left list-disc list-inside mb-4 space-y-1 text-gray-300">
                {bullet.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Card;
