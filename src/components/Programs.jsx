import { useState } from "react";

export default function Programs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: "Study Global",
      desc: "UK, Europe, Dubai, US, Canada and more.",
      button: "EXPLORE COURSES",
    },
    {
      title: "Work Global",
      desc: "Healthcare, Hospitality, Teaching and more.",
      button: "KNOW MORE",
    },
    {
      title: "Learn Online",
      desc: "Industry integrated online programs and certifications.",
      button: "KNOW MORE",
    },
    {
      title: "Study Local",
      desc: "For UK & Canada residents only.",
      button: "KNOW MORE",
    },
  ];

  return (
    <section className="bg-[#f3f1ee] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex gap-6">
          {cards.map((card, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(0)}
                className={`
                  relative
                  transition-all duration-500 ease-in-out
                  cursor-pointer
                  min-h-100
                  flex flex-col justify-between
                  p-12
                  ${
                    isActive
                      ? "bg-[#4f7fb3] text-white flex-[1.3]"
                      : "bg-[#e7e4e0] text-gray-800 flex-1 hover:bg-[#4f7fb3] hover:text-white hover:flex-[1.3]"
                  }
                `}
              >
                <div>
                  <h3 className="text-4xl font-serif mb-8 leading-tight">
                    {card.title}
                  </h3>

                  <p className="text-base leading-relaxed max-w-xs">
                    {card.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-12 text-sm tracking-wide font-medium">
                  <span>{card.button}</span>
                  <span className="text-xl">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
