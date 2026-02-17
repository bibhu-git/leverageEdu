import { useRef } from "react";
import { MoveRight } from "lucide-react";

export default function OurPlatform() {
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

    const services = [
        {
            title: "Financial Services",
            image: "https://publicassets.leverageedu.com/homepage/homepageV4/our-platform/cover1.webp",
            points: [
                "$1B+ Money Remitted",
                "$500M+ Loans Processed",
                "15K+ Students Funded",
            ],
        },
        {
            title: "Affordable & Safe Housing",
            image: "https://publicassets.leverageedu.com/homepage/homepageV4/our-platform/cover2.webp",
            points: [
                "25K+ Listed Properties",
                "50+ Countries",
                "4.8/5 Avg Rating",
            ],
        },
        {
            title: "Visa, Consular & Citizen Services",
            image: "https://publicassets.leverageedu.com/homepage/homepageV4/our-platform/Cover5.png",
            points: [
                "50K+ VISAs Processed",
                "60+ Countries Supported",
                "98% Approval Rate",
            ],
        },
        {
            title: "Continuous Career Support",
            image: "https://publicassets.leverageedu.com/homepage/homepageV4/our-platform/cover3.webp",
            points: [
                "10K+ Jobs Placement",
                "500+ Partner Companies",
                "92% Employment Rate",
            ],
        },
    ];

    return (
        <section className="bg-[#f3f1ee] py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">

                    <div className="flex items-center gap-8 w-full">
                        <h2 className="text-5xl font-serif text-[#163b44] leading-tight">
                            + Our Platform
                        </h2>
                        <div className="hidden lg:block flex-1 h-[1px] bg-[#163b44] mt-6"></div>
                    </div>

                    <p className="text-lg text-[#163b44] max-w-sm">
                        One stop for everything you need.
                    </p>
                </div>

                {/* Cards Wrapper */}
                <div className="relative">

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 no-scrollbar"
                    >
                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[360px] bg-[#e7e4e0] hover:shadow-md transition duration-300"
                            >
                                {/* Image Section with Overlay */}
                                <div className="relative h-[260px]">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30"></div>
                                    <div className="absolute bottom-6 left-6 text-white font-serif text-2xl leading-snug">
                                        {item.title}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 text-[#163b44]">
                                    <div className="text-sm space-y-3 mb-8">
                                        {item.points.map((point, i) => (
                                            <p key={i}>{point}</p>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between text-sm font-medium tracking-wide">
                                        <span>EXPLORE NOW</span>
                                        <MoveRight size={18} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Navigation Arrows */}
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