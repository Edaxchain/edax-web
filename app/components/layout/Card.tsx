import Image, { StaticImageData } from "next/image";

const Card = ({
    title,
    description,
    bullet,
    img,
}: {
    title: string;
    description?: string;
    bullet?: string[];
    img: string | StaticImageData;
}) => {
    return (
        <div className="bg-background p-6 rounded-lg shadow-lg border hover:border-[#14F195] transition-colors hover:scale-105 transition-transform duration-300 group">
            <div className="relative mb-6 overflow-hidden rounded-md flex justify-center">
                {img ? (
                    <Image src={img} alt={title} className="object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20">
                        No Image
                    </div>
                )}
            </div>
            <h2 className="text-left text-2xl font-bold mb-4 group-hover:text-[#14F195] transition-colors">
                {title}
            </h2>
            {description && (
                <p className="text-left mb-4 text-gray-400">{description}</p>
            )}
            {bullet && bullet.length > 0 && (
                <ul className="text-left list-disc list-inside mb-4 space-y-1 text-gray-300">
                    {bullet.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Card;
