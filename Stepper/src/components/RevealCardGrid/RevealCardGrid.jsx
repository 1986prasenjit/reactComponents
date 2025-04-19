import React from "react";
import chai1 from "../../images/chai1.jpg";
import chai2 from "../../images/chai2.jpg";
import chai3 from "../../images/chai3.jpg";

function RevealCardGrid() {
  const cardContent = [
    { id: 1, title: "Lazy", subtitle: "UI", image: chai1, description: 'Sipping chai while coding', },
    { id: 2, title: "Lazy", subtitle: "Dev", image: chai2, description: 'Debugging over chai', },
    { id: 3, title: "Lazy", subtitle: "Kit", image: chai3, description: 'Building components with style', },
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-100 py-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {cardContent.map((card) => (
          <div
            key={card.id}
            className="relative group w-72 h-98 bg-gray-900 text-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl"
          >
            {/* Animated Gradient Layer */}
            <div className="absolute inset-0 z-0 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
              <div className="w-full h-full bg-[length:200%_200%] bg-gradient-to-l from-black via-white to-black opacity-30 animate-shimmer" />
            </div>

            {/* Title and Subtitle */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-95">
              <span className="font-serif text-8xl font-bold bg-gradient-to-tr from-amber-500 to-slate-700 bg-clip-text text-transparent">
                {card.title}
              </span>
              <span className="font-serif text-4xl font-semibold bg-gradient-to-tr from-amber-500 to-slate-500 bg-clip-text text-transparent">
                {card.subtitle}
              </span>
            </div>

            {/* Hover Reveal */}
            <div className="absolute inset-0 bg-orange-400 flex flex-col items-center justify-center gap-4 px-4 text-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-95 transition-all duration-700 ease-in-out z-20">
              <img
                src={card.image}
                alt="Revealed"
                className="w-full rounded-md aspect-square object-cover shadow-md"
              />
              <p className="text-white font-semibold text-lg">{card.description}✨</p>
              <button className="px-3 py-2 bg-green-500 hover:bg-green-700 transition-colors duration-700 ease-in-out text-neutral-100 text-sm font-semibold rounded-md">
                Subscribe Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { RevealCardGrid };
