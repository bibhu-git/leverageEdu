import { MoveRight } from "lucide-react";

export default function MediaCoverage() {
    const articles = [
        {
            logo: "https://lepublicassets.leverageedu.com/inTheNews/logo4.png",
            title:
                "Study abroad platform Leverage announces foray into financial services...",
        },
        {
            logo: "https://lepublicassets.leverageedu.com/inTheNews/logo17.png",
            title:
                "How LeverageEdu's Akshay Chaturvedi weathered the pandemic storm...",
        },
        {
            logo: "https://lepublicassets.leverageedu.com/inTheNews/logo12.png",
            title:
                "Leverage Edu introduces Fly Homes, a student accommodation platform in UK...",
        },
        {
            logo: "https://lepublicassets.leverageedu.com/inTheNews/restOfWorld.png",
            title:
                "3 minutes with Akshay Chaturvedi, Leverage Edu...",
        },
    ];

    return (
        <section className="w-full bg-[#f3f1ee] py-20">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                {articles.map((item, index) => (
                    <div
                        key={index}
                        className={`px-12 py-16 flex flex-col items-center text-center justify-between
            ${index !== articles.length - 1 ? "border-r border-[#163b44]/20" : ""}
            `}
                    >
                        {/* Logo */}
                        <img
                            src={item.logo}
                            alt=""
                            className="h-12 object-contain mb-10"
                        />

                        {/* Title */}
                        <h3 className="text-xl font-serif text-[#163b44] leading-relaxed mb-12">
                            {item.title}
                        </h3>

                        {/* Read More */}
                        <div className="flex items-center gap-3 text-blue-600 font-medium">
                            <span>Read More</span>
                            <MoveRight size={18} />
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}