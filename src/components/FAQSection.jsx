import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
    const faqs = [
        {
            question: "What services does LeverageEdu offer?",
            answer:
                "We provide end-to-end study abroad support including university applications, loans, visas, housing, and career services.",
        },
        {
            question: "How do I get started?",
            answer:
                "You can begin by speaking with our AI Coach or scheduling a consultation with our experts.",
        },
        {
            question: "Which countries can I apply to?",
            answer:
                "We support applications across UK, USA, Canada, Germany, Australia, Ireland and more.",
        },
        {
            question: "How does the study abroad process work?",
            answer:
                "From profile evaluation to university shortlisting, documentation, visa and post-admit services — we manage it end-to-end.",
        },
        {
            question:
                "Can you help with scholarships and education loans?",
            answer:
                "Yes, we assist with scholarships and provide loan guidance through our financial partners.",
        },
        {
            question:
                "Do you provide support after I land abroad?",
            answer:
                "Yes, we offer housing support, community onboarding and career guidance.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#f3f1ee] py-20">
            <div className="px-20">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">

                    <div className="flex items-center gap-8 w-full">
                        <h2 className="text-5xl font-serif text-[#163b44] leading-tight">
                            Frequently <br /> Asked Questions
                        </h2>
                        <div className="hidden lg:block flex-1 h-[1px] bg-black/30 mt-6"></div>
                    </div>

                    <p className="text-3xl text-[#163b44] max-w-sm">
                        Find answers to common questions about our programs and services
                    </p>

                </div>

                {/* Accordion */}
                <div className="space-y-4">

                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-[#e7e4e0]">

                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center px-8 py-6 text-left"
                            >
                                <span className="text-lg font-medium text-[#163b44]">
                                    {faq.question}
                                </span>

                                <ChevronDown
                                    size={20}
                                    className={`transition-transform ${activeIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {activeIndex === index && (
                                <div className="px-8 pb-6 text-[#2c2c2c]">
                                    {faq.answer}
                                </div>
                            )}

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}