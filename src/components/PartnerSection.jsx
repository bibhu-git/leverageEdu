export default function PartnerSection() {
    return (
        <section className="w-full bg-[#f3f1ee] py-24">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between px-20">

                {/* Left Content */}
                <div className="max-w-xl">

                    <h2 className="text-6xl font-serif text-[#2c2c2c] leading-tight mb-16">
                        Partner with <br />
                        us to impact <br />
                        100x more <br />
                        students
                    </h2>

                    <div className="space-y-6 text-[#2c2c2c] text-lg">

                        <div className="pb-4 border-b border-black/30">
                            10K+ Education Consultants
                        </div>

                        <div className="pb-4 border-b border-black/30">
                            White-labeled Agentic AI
                        </div>

                        <div className="pb-4 border-b border-black/30">
                            24/7 Support
                        </div>

                    </div>

                    <button className="mt-12 px-10 py-4 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition duration-300">
                        Join Us
                    </button>

                </div>

                {/* Right Image */}
                <div className="mt-20 lg:mt-0">
                    <img
                        src="https://publicassets.leverageedu.com/homepage/homepageV4/misc/tabletWeb.webp"
                        alt="Partner Dashboard"
                        className="w-[900px] max-w-full object-contain"
                    />
                </div>

            </div>
        </section>
    );
}