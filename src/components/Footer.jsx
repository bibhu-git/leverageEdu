export default function Footer() {
    return (
        <footer className="relative w-full bg-[#2f2f2f] text-white pt-20 pb-40 overflow-hidden">

            {/* ===== Background Image ===== */}
            <div
                className="absolute inset-0 bg-no-repeat bg-bottom bg-cover"
                style={{
                    backgroundImage:
                        "url('https://publicassets.leverageedu.com/homepage/homepageV4/footer/footerBgWeb.webp')",
                }}
            />

            <div className="absolute inset-0 bg-black/75" />

            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-black via-black/80 to-transparent" />

            <div className="relative z-20 px-20">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

                    <div>
                        <h3 className="text-lg font-semibold mb-6 tracking-wide">
                            STUDY GLOBAL
                        </h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="hover:text-white transition cursor-pointer">Study in UK</li>
                            <li className="hover:text-white transition cursor-pointer">Study in USA</li>
                            <li className="hover:text-white transition cursor-pointer">Study in Ireland</li>
                            <li className="hover:text-white transition cursor-pointer">Study in Canada</li>
                            <li className="hover:text-white transition cursor-pointer">Study in Germany</li>
                            <li className="hover:text-white transition cursor-pointer">Study in Dubai</li>
                            <li className="hover:text-white transition cursor-pointer">Study in France</li>
                            <li className="hover:text-white transition cursor-pointer">Study in Europe</li>
                            <li className="hover:text-white transition cursor-pointer">Study in Italy</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 tracking-wide">
                            WORK GLOBAL
                        </h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="hover:text-white transition cursor-pointer">Registered Nurse, Germany</li>
                            <li className="hover:text-white transition cursor-pointer">Caregiver, Japan</li>
                            <li className="hover:text-white transition cursor-pointer">Ausbildung, Germany</li>
                            <li className="hover:text-white transition cursor-pointer">Registered Nurse, USA</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 tracking-wide">
                            STUDY LOCAL
                        </h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="hover:text-white transition cursor-pointer">MSc Supply Chain Management</li>
                            <li className="hover:text-white transition cursor-pointer">BSc (Hons) Health and Social Care</li>
                            <li className="hover:text-white transition cursor-pointer">HND in Construction Management</li>
                            <li className="hover:text-white transition cursor-pointer">MSc Data Analytics</li>
                            <li className="hover:text-white transition cursor-pointer">Master of Computer Science (Applied AI)</li>
                            <li className="hover:text-white transition cursor-pointer">BSc Nursing (Bilingual)</li>
                            <li className="hover:text-white transition cursor-pointer">Master of Business Administration</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 tracking-wide">
                            OFFERINGS
                        </h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="hover:text-white transition cursor-pointer">Study Global</li>
                            <li className="hover:text-white transition cursor-pointer">Work Global</li>
                            <li className="hover:text-white transition cursor-pointer">Learn Online</li>
                            <li className="hover:text-white transition cursor-pointer">Study Local</li>
                        </ul>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-20">

                    <div>
                        <h3 className="text-lg font-semibold mb-6 tracking-wide">
                            PLATFORM
                        </h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="hover:text-white transition cursor-pointer">Financial Services</li>
                            <li className="hover:text-white transition cursor-pointer">Affordable & Safe Housing</li>
                            <li className="hover:text-white transition cursor-pointer">Visa, Consular & Citizen Services</li>
                            <li className="hover:text-white transition cursor-pointer">Continuous Career Support</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 tracking-wide">
                            RESOURCES
                        </h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="hover:text-white transition cursor-pointer">LOR</li>
                            <li className="hover:text-white transition cursor-pointer">SOP</li>
                            <li className="hover:text-white transition cursor-pointer">IELTS</li>
                            <li className="hover:text-white transition cursor-pointer">GMAT</li>
                            <li className="hover:text-white transition cursor-pointer">GRE</li>
                            <li className="hover:text-white transition cursor-pointer">SAT</li>
                            <li className="hover:text-white transition cursor-pointer">TOEFL</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 tracking-wide">
                            COMPANY
                        </h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="hover:text-white transition cursor-pointer">About Us</li>
                            <li className="hover:text-white transition cursor-pointer">Our Virtues</li>
                            <li className="hover:text-white transition cursor-pointer">Work with Us</li>
                            <li className="hover:text-white transition cursor-pointer">Success Stories</li>
                            <li className="hover:text-white transition cursor-pointer">Experience Centres</li>
                            <li className="hover:text-white transition cursor-pointer">For Universities</li>
                            <li className="hover:text-white transition cursor-pointer">For Education Consultants</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 tracking-wide">
                            OTHER LINKS
                        </h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white transition cursor-pointer">Terms & Conditions</li>
                            <li className="hover:text-white transition cursor-pointer">Responsible Disclosure Policy</li>
                            <li className="hover:text-white transition cursor-pointer">EEO Policy</li>
                            <li className="hover:text-white transition cursor-pointer">Agent Selection Guide</li>
                            <li className="hover:text-white transition cursor-pointer">National Code UK</li>
                            <li className="hover:text-white transition cursor-pointer">AIRC Certificate</li>
                        </ul>
                    </div>

                </div>
            </div>

        </footer>
    );
}