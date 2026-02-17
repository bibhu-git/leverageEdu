import { useRef } from "react";
import { MoveRight } from "lucide-react";

export default function CareerPathway() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = 380;

        if (direction === "left") {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const careers = [
        {
            country: "Germany",
            code: "DE",
            title: "Registered Nurse (RN)",
            points: [
                "German Language B1/B2 Mandatory",
                "Salary: €2,800–€3,500/month",
                "Recognition Process (Anerkennung)",
            ],
            image: "https://publicassets.leverageedu.com/homepage/homepageV4/explore-path/9cf63709-3f67-496c-97fe-c092dd298f9c.jpeg",
        },
        {
            country: "Japan",
            code: "JP",
            title: "Caregiver (CG)",
            points: [
                "Japanese Language (N4/N3 Level)",
                "Aging Population = High Demand",
                "Pathway to Long-Term Stay",
            ],
            image: "https://publicassets.leverageedu.com/homepage/homepageV4/explore-path/525a06a0-f60b-4899-bcd7-1df2233a45e9.jpeg",
        },
        {
            country: "Germany",
            code: "DE",
            title: "Ausbildung",
            points: [
                "Earn €1,100–€1,300/month",
                "No University Degree Required",
                "Direct Employment & PR Pathway",
            ],
            image: "https://publicassets.leverageedu.com/homepage/homepageV4/explore-path/19fde637-8e9b-4fa6-a940-2eacb157c005.jpeg",
        },
        {
            country: "USA",
            code: "US",
            title: "Registered Nurse (RN)",
            points: [
                "Nurse Assistant Certification",
                "Earn $2,000–$2,500/month",
                "Direct Employment & PR Pathway",
            ],
            image: "https://publicassets.leverageedu.com/homepage/homepageV4/explore-path/image%20141.png",
        },
    ];

    return (
        <section className="bg-[#f3f1ee]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="relative">

                    {/* Scroll Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 no-scrollbar"
                    >
                        {/* Left Banner */}
                        <div className="min-w-[260px] h-[520px] relative">
                            <img
                                src="https://publicassets.leverageedu.com/homepage/homepageV4/explore-path/504d4ff3-e0a0-4cf9-90ac-055f2d7f8b16.png"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-10 left-8 text-white font-serif text-4xl leading-tight">
                                Focused <br /> Career <br /> Pathway
                            </div>
                        </div>

                        {/* Career Cards */}
                        {careers.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[360px] bg-[#e7e4e0] hover:shadow-md transition duration-300"
                            >
                                {/* Image */}
                                <div className="h-[220px]">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 text-[#163b44]">
                                    <div className="flex justify-between items-center text-sm mb-4">
                                        <span>{item.country}</span>
                                        <span className="font-semibold">{item.code}</span>
                                    </div>

                                    <h3 className="text-xl font-serif mb-6 leading-snug">
                                        {item.title}
                                    </h3>

                                    <div className="text-sm space-y-2 mb-8">
                                        {item.points.map((point, i) => (
                                            <p key={i}>{point}</p>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between text-sm font-medium tracking-wide">
                                        <span>VIEW DETAILS</span>
                                        <MoveRight size={18} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Scroll Buttons */}
                    <div className="flex justify-end gap-16 mt-4 pr-4 text-[#163b44]">

                        <button
                            onClick={() => scroll("left")}
                            className="flex items-center gap-3 group"
                        >
                            <span className="w-16 h-[1px] bg-[#163b44] group-hover:w-20 transition-all"></span>
                            <span className="text-2xl">←</span>
                        </button>

                        <button
                            onClick={() => scroll("right")}
                            className="flex items-center gap-3 group"
                        >
                            <span className="w-16 h-[1px] bg-[#163b44] group-hover:w-20 transition-all"></span>
                            <span className="text-2xl">→</span>
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
}