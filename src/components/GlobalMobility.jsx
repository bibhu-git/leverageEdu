export default function GlobalMobility() {
    return (
        <section className="bg-[#f3f1ee] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">

                    {/* Left Content */}
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-serif text-[#163b44] leading-tight mb-4">
                            A Truly Global <br />
                            Talent Mobility Platform
                        </h2>

                        <p className="text-[#163b44] text-base leading-relaxed">
                            Opening doors to a <span className="text-green-600">global network</span>
                            through trusted expertise, innovative solutions, and a proven legacy of success.
                        </p>
                    </div>

                    {/* Divider + Right Stat */}
                    <div className="flex items-center gap-10">
                        <div className="hidden lg:block w-[1px] h-28 bg-[#163b44]/40"></div>

                        <div>
                            <h3 className="text-6xl font-light text-green-600 leading-none">
                                60+
                            </h3>
                            <p className="text-sm text-[#163b44] mt-2">
                                Offices Worldwide in <span className="text-green-600">27 Countries</span>
                            </p>
                        </div>
                    </div>

                </div>

                {/* World Map */}
                <div className="mt-12 flex justify-center">
                    <img
                        src="https://publicassets.leverageedu.com/homepage/homepageV4/global-presence/worldMap.webp"
                        alt="World Map"
                        className="w-full max-h-[75vh] object-contain"
                    />
                </div>

                {/* Bottom Stat */}
                <div className="mt-6 flex justify-center items-center gap-4">
                    <h3 className="text-6xl md:text-7xl font-light text-[#3f6fa5]">
                        155,000+
                    </h3>
                    <p className="text-[#163b44] text-lg mt-4">
                        Lives Changed
                    </p>
                </div>

            </div>
        </section>
    );
}