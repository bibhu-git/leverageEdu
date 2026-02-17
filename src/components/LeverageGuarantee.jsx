export default function LeverageGuarantee() {
    return (
        <>
            <section className="w-full bg-[#f3f1ee] py-20">
                <div className="w-full px-20">

                    {/* Logo + Title */}
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src="https://publicassets.leverageedu.com/homepage/homepageV4/misc/LeverageGroup.webp"
                            alt="Leverage"
                            className="h-10"
                        />
                        <h3 className="text-3xl font-serif text-[#163b44]">
                            Guarantee
                        </h3>
                    </div>

                    {/* Heading + Description */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">

                        <div className="flex items-center gap-8 w-full">
                            <h2 className="text-6xl font-serif text-[#2c2c2c] leading-tight">
                                Seamless process
                            </h2>

                            <div className="hidden lg:block flex-1 h-[1px] bg-black/40 mt-6"></div>
                        </div>

                        <p className="text-3xl text-[#2c2c2c] max-w-md">
                            Fast applications, quick offers, timely payouts with assured
                            process compliance.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Step 1 */}
                        <div className="bg-[#e7e4e0] p-10 flex items-center gap-6">
                            <span className="text-7xl font-bold text-blue-500">1</span>
                            <p className="text-lg text-[#2c2c2c]">
                                <strong>One-Day</strong> Application Submission
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-[#e7e4e0] p-10 flex items-center gap-6">
                            <span className="text-7xl font-bold text-green-500">1</span>
                            <p className="text-lg text-[#2c2c2c]">
                                <strong>One-Week</strong> Offer
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-[#e7e4e0] p-10 flex items-center gap-6">
                            <span className="text-7xl font-bold text-blue-900">1</span>
                            <p className="text-lg text-[#2c2c2c]">
                                <strong>One-Month</strong> Payout
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* ===== BLUE CTA SECTION ===== */}
            <section className="w-full bg-[#4f7fb3] py-24 text-center text-white">

                <h2 className="text-6xl font-serif mb-12">
                    Still exploring your options?
                </h2>

                <button className="border border-white px-10 py-4 tracking-wide hover:bg-white hover:text-[#4f7fb3] transition">
                    TALK TO YOUR AI COACH
                </button>

            </section>
        </>
    );
}