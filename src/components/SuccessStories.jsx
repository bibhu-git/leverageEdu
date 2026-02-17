import { useRef } from "react";
import { MoveRight } from "lucide-react";

export default function SuccessStories() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = 360;

        if (direction === "left") {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const stories = [
        {
            tag: "Got into his Dream University!",
            name: "Shrey Talan",
            course: "MSc in Computer Science",
            university: "University of Glasgow | UK",
            image: "https://images.leverageedu.com/assets/img/home/testimonials/Shrey.jpeg",
            review:
                "I decided to pursue an MS, and got recommended Leverage Edu by a friend. The course curric...",
        },
        {
            tag: "Saved ₹3L with the Right Loan!",
            name: "Palak Bhatt",
            course: "MSc in Strategic Marketing",
            university: "Cranfield University | UK",
            image: "https://lepublicassets.leverageedu.com/palakProfile.png",
            review:
                "I am really grateful that I chose Leverage Edu and I'll forever be grateful to them for th...",
        },
        {
            tag: "Earned a Global Degree from Home!",
            name: "Rohan Mehta",
            course: "Master of Business Administration",
            university: "Amity University Online",
            image: "https://lepublicassets.leverageedu.com/le-online/testimonials/RohanMehta.webp",
            review:
                "Choosing my MBA through Leverage Online and enrolling at Amity University Online was an ea...",
        },
        {
            tag: "Landed a Job in Germany in Just 60 Days!",
            name: "Gayathri Paulraj",
            course: "Nursing Candidate",
            university: "Germany",
            image: "https://publicassets.leverageedu.com/leverage-careers/testimonials/gayathri.png",
            review:
                "The Leverage Careers training made German feel less intimidating. The role plays and every...",
        },
    ];

    return (
        <section className="bg-[#f3f1ee] py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">

                    <div className="flex items-center gap-8 w-full">
                        <h2 className="text-5xl md:text-6xl font-serif text-[#163b44] leading-tight">
                            Real Students. <br />
                            Real Results. <br />
                            Real Dreams Achieved.
                        </h2>
                        <div className="hidden lg:block flex-1 h-[1px] bg-[#163b44]/60 mt-6"></div>
                    </div>

                    <p className="text-lg text-[#163b44] max-w-xs">
                        Explore Success Stories
                    </p>
                </div>

                {/* Slider */}
                <div className="relative">

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 no-scrollbar"
                    >
                        {stories.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[360px] bg-[#e7e4e0] p-6 transition hover:shadow-md"
                            >
                                <p className="text-sm text-green-600 italic mb-4">
                                    {item.tag}
                                </p>

                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-14 h-14 rounded-full object-cover"
                                    />
                                    <div className="text-yellow-500 text-lg">
                                        ★★★★★
                                    </div>
                                </div>

                                <h3 className="text-xl font-serif text-[#163b44] mb-2">
                                    {item.name}
                                </h3>

                                <p className="text-sm font-medium text-[#163b44]">
                                    {item.course}
                                </p>
                                <p className="text-sm text-[#163b44] mb-4">
                                    {item.university}
                                </p>

                                <p className="text-sm text-[#163b44] italic mb-8">
                                    {item.review}
                                </p>

                                <div className="flex items-center justify-between text-sm font-medium tracking-wide text-[#163b44]">
                                    <span>READ FULL STORY</span>
                                    <MoveRight size={18} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Controls */}
                    <div className="flex justify-between items-center mt-8">

                        {/* Left CTA */}
                        <button className="border border-[#163b44] px-8 py-3 text-[#163b44] tracking-wide hover:bg-[#163b44] hover:text-white transition">
                            VIEW MORE STORIES
                        </button>

                        {/* Right Arrows */}
                        <div className="flex gap-16 text-[#163b44]">

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

            </div>
        </section>
    );
}