import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export default function GlobalPresenceSection() {
    return (
        <section className="w-full bg-[#f3f1ee]">

            <div className="text-center py-24 border-b border-black/10">

                <img
                    src="https://publicassets.leverageedu.com/landing-pages-new/logo-dark.svg"
                    alt="Leverage Edu"
                    className="mx-auto h-14 mb-8"
                />

                <h2 className="text-4xl md:text-5xl font-serif text-[#163b44] mb-6">
                    Global Careers for Global Citizens
                </h2>

                <p className="text-sm text-[#163b44] mb-8">
                    1800-572-000 &nbsp; / &nbsp; hello@leverageedu.com &nbsp; / &nbsp;
                    press@leverageedu.com
                </p>

                <div className="flex justify-center gap-6 text-[#163b44]">
                    <Instagram size={18} className="hover:opacity-70 cursor-pointer" />
                    <Facebook size={18} className="hover:opacity-70 cursor-pointer" />
                    <Linkedin size={18} className="hover:opacity-70 cursor-pointer" />
                    <Youtube size={18} className="hover:opacity-70 cursor-pointer" />
                </div>
            </div>

            <div className="px-20 py-16">

                {/* Tabs */}
                <div className="flex gap-6 text-sm mb-10 text-[#163b44]">
                    <span className="font-semibold border-b border-black pb-1 cursor-pointer">
                        GLOBAL HQ
                    </span>
                    <span className="opacity-60 hover:opacity-100 cursor-pointer">
                        CORPORATE OFFICES
                    </span>
                    <span className="opacity-60 hover:opacity-100 cursor-pointer">
                        EXPERIENCE CENTRES
                    </span>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

                    {/* Address Card */}
                    <div className="border border-black p-6 text-sm text-[#163b44] bg-white self-start">
                        <strong className="block mb-3">
                            Vasudhaiva Kutumbakam Limited
                        </strong>
                        <p>
                            Suite 15, 1st Floor, 213 Kingsbury Road,
                            Jubilee Business Centre, London,
                            United Kingdom, NW9 8AQ
                        </p>
                    </div>

                    {/* Google Map */}
                    <div className="lg:col-span-2 h-[350px] w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4559353016616!2d-0.10027282387146438!3d51.52319680954984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b571b592347%3A0xe4ee6909388e1284!2sVasudhaiva%20Kutumbakam%20Limited!5e0!3m2!1sen!2sin!4v1771350995564!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-md"
                        ></iframe>
                    </div>

                    {/* QR + Store Buttons */}
                    <div className="text-center self-start">
                        <p className="text-sm text-[#163b44] mb-4">
                            Download Leverage Edu App
                        </p>

                        <img
                            src="https://publicassets.leverageedu.com/homepage/homepageV4/footer/LE%20App%20QR%20Code.png"
                            alt="QR Code"
                            className="mx-auto w-32 mb-6"
                        />

                        <div className="space-y-3">
                            <img
                                src="https://publicassets.leverageedu.com/homepage/homepageV4/footer/Link.png"
                                alt="App Store"
                                className="mx-auto h-10 cursor-pointer hover:opacity-80"
                            />
                            <img
                                src="https://publicassets.leverageedu.com/homepage/homepageV4/footer/Link%20%281%29.png"
                                alt="Google Play"
                                className="mx-auto h-10 cursor-pointer hover:opacity-80"
                            />
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}