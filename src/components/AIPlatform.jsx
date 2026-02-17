import { MoveRight } from "lucide-react";

export default function AIPlatform() {
    return (
        <section className="w-full h-[180vh] bg-black text-white">

            <div className="h-[100vh] w-full flex flex-col justify-between relative overflow-hidden">

                {/* Background pattern image */}
                <img
                    src="https://publicassets.leverageedu.com/homepage/homepageV4/leai/illTopWeb.webp"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-10 px-16 pt-20">

                    {/* Heading */}
                    <div className="flex justify-between items-start">

                        <div className="max-w-3xl">
                            <h2 className="text-5xl font-serif leading-tight mb-6">
                                Where Human expertise <br />
                                meets AI Intelligence
                            </h2>

                            <p className="text-gray-300 max-w-xl">
                                From dreaming to achieving. AI powers every touchpoint.
                                Automating the grid so human experts can focus on empathy
                                and mentorship.
                            </p>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="w-32 h-[1px] bg-white/40"></div>
                            <h3 className="text-2xl tracking-widest">LE AI</h3>
                        </div>

                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-4 gap-8 mt-16">

                        {/* Card 1 */}
                        <div className="bg-white text-black p-6">
                            <p className="text-xs font-semibold mb-4">
                                DECISION ENGINE
                            </p>
                            <h4 className="text-lg font-semibold mb-2">VASU AI</h4>
                            <p className="text-sm text-gray-700">
                                AI-driven academic coach that evaluates your profile
                                and delivers personalised guidance.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white text-black p-6">
                            <p className="text-xs font-semibold mb-4">
                                DOCUMENT INTELLIGENCE
                            </p>
                            <h4 className="text-lg font-semibold mb-2">LEAI</h4>
                            <p className="text-sm text-gray-700">
                                Automated eligibility checks and document validation
                                that reduce review time.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white text-black p-6">
                            <p className="text-xs font-semibold mb-4">
                                SMART DISCOVERY
                            </p>
                            <h4 className="text-lg font-semibold mb-2">
                                Program Finder
                            </h4>
                            <p className="text-sm text-gray-700 mb-6">
                                Real-time profile evaluation delivering precision-matched
                                university shortlists.
                            </p>
                            <div className="flex justify-between items-center text-sm font-medium">
                                <span>FIND COURSES</span>
                                <MoveRight size={18} />
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white text-black p-6">
                            <p className="text-xs font-semibold mb-4">
                                SMART ASSESSMENT
                            </p>
                            <h4 className="text-lg font-semibold mb-2">
                                Interview
                            </h4>
                            <p className="text-sm text-gray-700">
                                AI-led credibility scoring that accelerates admission
                                and saves interview hours.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="h-[80vh] w-full relative">

                <img
                    src="https://publicassets.leverageedu.com/homepage/homepageV4/misc/05b1aa0e-edf4-4127-be64-3c3cc9351256.jpeg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">

                    <h2 className="text-5xl font-semibold text-cyan-400 mb-8">
                        a team obsessed with <br />
                        customer success
                    </h2>

                    <button className="border border-white px-8 py-3 hover:bg-white hover:text-black transition">
                        TALK TO YOUR AI COACH
                    </button>

                </div>
            </div>

        </section>
    );
}