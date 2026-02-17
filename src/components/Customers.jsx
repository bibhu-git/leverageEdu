import { useEffect, useRef } from "react";

export default function Customers() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const container = scrollRef.current;
        let scrollAmount = 0;

        const autoScroll = () => {
            if (!container) return;

            scrollAmount += 1;
            container.scrollLeft = scrollAmount;

            if (scrollAmount >= container.scrollWidth - container.clientWidth) {
                scrollAmount = 0;
            }
        };

        const interval = setInterval(autoScroll, 20);

        return () => clearInterval(interval);
    }, []);

    const logos = [
        "BMW",
        "TikTok",
        "JPMorgan",
        "ARM",
        "NVIDIA",
        "Google",
        "Dell",
        "Klinikum"
    ];

    return (
        <section className="py-16 bg-white">
            <h2 className="text-center text-2xl md:text-3xl mb-10">
                Our customers are grabbing jobs from the future!
            </h2>

            <div
                ref={scrollRef}
                className="flex gap-20 overflow-x-hidden justify-center whitespace-nowrap px-10"
            >
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="text-gray-400 text-xl font-semibold min-w-max"
                    >
                        {logo}
                    </div>
                ))}
            </div>
        </section>
    );
}