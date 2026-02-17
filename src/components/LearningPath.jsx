import { useRef } from "react";
import { MoveRight } from "lucide-react";

export default function LearningPath() {
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

    const programs = [
        {
            university: "Trinity College Dublin, Ireland",
            country: "IE",
            title: "MSc in Quantum Fields, Strings and Gravity",
            duration: "12 MONTHS",
            mode: "ON CAMPUS",
            image: "https://assets.leverageedu.com/school-cover-image/ireland/2020-10-09_04_istock_000064290473_medium.jpg",
        },
        {
            university: "Cranfield University, UK",
            country: "GB",
            title: "MSc in Aerospace Computational Engineering",
            duration: "12 MONTHS",
            mode: "ON CAMPUS",
            image: "https://assets.leverageedu.com/school-cover-image/uk/2019-11-29_31_6d4e94663913f676f1ee27d7a36130d3.jpg",
        },
        {
            university: "Harvard Business Impact",
            country: "US",
            title: "Master of Business Administration",
            duration: "2 YEARS",
            mode: "ONLINE",
            image: "https://assets.leverageedu.com/school-cover-image/us/harvarduniversity.png",
        },
        {
            university: "Coventry University, UK",
            country: "GB",
            title: "MSc in Nursing",
            duration: "12 MONTHS",
            mode: "ON CAMPUS",
            image: "https://assets.leverageedu.com/school-cover-image/uk/2019-10-18_03_coventryuniversity.jpg",
        },
    ];

    return (
        <section className="bg-[#f3f1ee] py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">

                    <div className="flex items-center gap-8 w-full">
                        <h2 className="text-5xl font-serif text-[#163b44] leading-tight">
                            Explore Your <br /> Learning Path
                        </h2>
                        <div className="hidden lg:block flex-1 h-[1px] bg-[#163b44] mt-6"></div>
                    </div>

                    <p className="text-3xl text-[#163b44] max-w-md">
                        Find the perfect programs to fast-track your career.
                    </p>
                </div>

                {/* Cards Row */}
                <div className="relative">

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 no-scrollbar"
                    >
                        {/* Left Banner */}
                        <div className="min-w-[260px] h-[520px] relative">
                            <img
                                src="https://publicassets.leverageedu.com/homepage/homepageV4/explore-path/0c199f02-af2d-445a-ad9e-ec38b27ef045.jpeg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-10 left-8 text-white font-serif text-4xl leading-tight">
                                Future <br /> Ready <br /> Programs
                            </div>
                        </div>

                        {/* Program Cards */}
                        {programs.map((item, index) => (
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
                                        <span>{item.university}</span>
                                        <span className="font-semibold">{item.country}</span>
                                    </div>

                                    <h3 className="text-xl font-serif mb-6 leading-snug">
                                        {item.title}
                                    </h3>

                                    <div className="text-sm space-y-1 mb-8">
                                        <p>{item.duration}</p>
                                        <p>{item.mode}</p>
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