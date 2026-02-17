export default function FeaturedPublications() {
    return (
        <section className="w-full bg-[#f3f1ee]">

            {/* Heading */}
            <div className="px-16 py-20">
                <h2 className="text-5xl md:text-6xl font-serif text-[#163b44] leading-tight max-w-6xl">
                    Featured in global publications and recognised across academia,
                    technologists and policy makers worldwide.
                </h2>
            </div>

            {/* Full Width Image — No Space */}
            <div className="w-full">
                <img
                    src="https://publicassets.leverageedu.com/homepage/homepageV4/featuredAcross/CollageWeb3.webp"
                    alt="Featured Publications"
                    className="w-full h-auto object-cover block"
                />
            </div>

        </section>
    );
}