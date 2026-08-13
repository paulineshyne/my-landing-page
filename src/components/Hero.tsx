function Hero() {
  const images = [
    {
      src: "https://images7.alphacoders.com/506/506085.jpg",
      alt: "Wat Arun Temple at sunrise",
      label: "Temples"
    },
    {
      src: "https://img.freepik.com/premium-photo/colorful-array-thai-street-snacks-including-crispy-spring-rolls-grilled-satay-skewers-spicy-papaya-salad_1229213-16705.jpg?w=2000",
      alt: "Thai street food night market",
      label: "Street Food"
    },
    {
      src: "https://static.independent.co.uk/2023/06/13/14/iStock-1137346273.jpg",
      alt: "Maya Bay clear waters",
      label: "Islands"
    },
    {
      src: "https://thailandawaits.com/wp-content/uploads/2023/11/Floating-Market-in-Bangkok-1200x741.jpg",
      alt: "Bangkok floating market",
      label: "Markets"
    },
    {
      src: "https://therecipecritic.com/wp-content/uploads/2019/08/pad_thai.jpg",
      alt: "Pad Thai being prepared",
      label: "Cuisine"
    },
    {
      src: "https://lh4.googleusercontent.com/OK8ueIMOEe9E7rdIzmd5vzYqje0Bt04jRVwt-quEKD6e-ihHk3g6KKubCvO02yQxTVO26d5H3ZgqUKrm9qTQd3vnrID4_FE7lvAoc0VFMcnwT8ARVHe90ARGqAAui8oKbDTO_r9GhImpWO5idhn4pb8Fdw5qAp-m",
      alt: "Chiang Mai mountains",
      label: "Nature"
    }

  ];

  return (
    <section className="relative bg-stone-50 overflow-hidden">
      {/* Subtle top spacing for sticky nav */}
      <div className="pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Text Content */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <p className="text-stone-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Discover the Land of Smiles
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.1] mb-6">
              Thailand Awaits
              <span className="block text-stone-400 font-light mt-2">Your Next Adventure</span>
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
              From golden temples and limestone cliffs to night markets steaming with pad thai — 
              every corner of Thailand tells a story worth experiencing.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-stone-800 text-stone-50 rounded-lg font-medium hover:bg-stone-700 transition-colors duration-200 shadow-sm tracking-wide">
                Plan Your Trip
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-stone-700 border border-stone-300 rounded-lg font-medium hover:bg-stone-50 hover:border-stone-400 transition-all duration-200 tracking-wide">
                Watch Film
              </button>
            </div>
          </div>

          {/* Photo Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {images.map((img, i) => (
              <div 
                key={i}
                className={`
                  group relative overflow-hidden rounded-xl bg-stone-200
                  ${i === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''}
                  ${i === 2 ? 'md:col-span-1 md:row-span-2' : ''}
                  ${i === 5 ? 'col-span-2 md:col-span-2' : ''}
                  aspect-square
                  ${i === 0 ? 'aspect-[4/3]' : ''}
                  ${i === 2 ? 'md:aspect-auto' : ''}
                `}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay - solid neutral, no gradient */}
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors duration-300" />
                
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-stone-50/95 text-stone-800 text-xs font-semibold rounded-full backdrop-blur-sm">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Bar */}
          <div className="mt-12 pt-8 border-t border-stone-200">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-stone-400 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>77 Provinces</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Top 10 Destination</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Year-Round Warmth</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span>40M+ Visitors</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;