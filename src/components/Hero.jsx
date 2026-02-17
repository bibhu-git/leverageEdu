export default function Hero() {
    return (
        <section
            className="relative w-full h-[90vh] bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://publicassets.leverageedu.com/homepage/homepageV4/hero/people-friendship-communication-international-concept-group-happy-friends-walking-along-autumn-park-drinking-coffee%202.webp')"  // place your image inside public folder
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col items-center justify-center text-center px-6 text-white">

                <h1 className="text-4xl md:text-8xl leading-tight mb-6">
                    Global Careers for <br /> Global Citizens
                </h1>

                <p className="text-lg md:text-3xl tracking-wide mb-8">
                    ADMISSIONS, FINANCING, <br />
                    HOUSING & CAREER OUTCOMES
                </p>

                <button className="border border-white px-8 py-3 text-sm md:text-base tracking-wide hover:bg-white hover:text-black transition duration-300">
                    TALK TO YOUR AI COACH
                </button>
            </div>
        </section>
    );
}