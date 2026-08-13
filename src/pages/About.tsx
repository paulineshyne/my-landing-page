import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-200">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2400&auto=format&fit=crop"
            alt="Thailand golden temple"
            className="w-full h-full object-cover"
          />
          {/* Solid color overlay — no gradients */}
          <div className="absolute inset-0 bg-stone-950/70" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <span className="text-amber-400 text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-4">
            Prathet Thai
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight mb-6">
            Kingdom of<br />Thailand
          </h1>
          <p className="text-lg md:text-2xl text-stone-300 font-light max-w-2xl leading-relaxed">
            The Land of Smiles. Ancient temples, tropical coastlines, and a spirit that has never been colonized.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-stone-800 leading-tight">
              The Only Southeast Asian Nation Never Colonized
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Nestled in the heart of mainland Southeast Asia, Thailand spans mountains, fertile plains, and over 2,600 kilometers of coastline. Formerly known as Siam, it stands as a constitutional monarchy with a population of roughly 71.7 million.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              From the golden spires of Bangkok to the misty highlands of Chiang Mai, Thailand harmoniously blends centuries-old Buddhist tradition with cutting-edge modernity.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-stone-200">
            <img
              src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1000&auto=format&fit=crop"
              alt="Grand Palace Bangkok"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Quick Facts Grid */}
      <section className="bg-white py-20 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Population', value: '~71.7M' },
              { label: 'Capital', value: 'Bangkok' },
              { label: 'Currency', value: 'Thai Baht' },
              { label: 'Official Language', value: 'Thai' },
              { label: 'Area', value: '513,120 km²' },
              { label: 'Government', value: 'Constitutional Monarchy' },
              { label: 'Major Religion', value: 'Buddhism (~95%)' },
              { label: 'Time Zone', value: 'UTC+7' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-stone-500 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Regions */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Four Regions, One Kingdom</h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Thailand's geography is divided into four distinct areas, each with unique culture, climate, and character.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: 'North',
              desc: 'Mountainous terrain, colorful hill tribes, and ancient temples like Wat Phra That Doi Suthep in Chiang Mai.',
              accent: 'bg-emerald-600',
              bg: 'bg-emerald-50',
            },
            {
              name: 'Central',
              desc: 'The fertile Chao Phraya River basin. Home to Bangkok, the Grand Palace, and the nation’s political heart.',
              accent: 'bg-amber-600',
              bg: 'bg-amber-50',
            },
            {
              name: 'Northeast',
              desc: 'The semi-arid Khorat Plateau. Rich in Khmer heritage, Isan culture, and historic parks like Phimai.',
              accent: 'bg-orange-600',
              bg: 'bg-orange-50',
            },
            {
              name: 'South',
              desc: 'Tropical beaches, dramatic limestone karsts, and paradise islands including Phuket, Krabi, and Koh Samui.',
              accent: 'bg-sky-600',
              bg: 'bg-sky-50',
            },
          ].map((region) => (
            <div
              key={region.name}
              className={`relative ${region.bg} rounded-2xl p-8 overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${region.accent}`} />
              <h3 className="text-2xl font-bold text-stone-800 mb-4">{region.name}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">{region.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Iconic Landmarks */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-stone-800">
            Iconic Landmarks
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'The Grand Palace',
                loc: 'Bangkok',
                img: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=800&auto=format&fit=crop',
              },
              {
                name: 'Wat Arun',
                loc: 'Bangkok',
                img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800&auto=format&fit=crop',
              },
              {
                name: 'Ayutthaya Historical Park',
                loc: 'Phra Nakhon Si Ayutthaya',
                img: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800&auto=format&fit=crop',
              },
              {
                name: 'Wat Rong Khun',
                loc: 'Chiang Rai',
                img: 'https://tse1.mm.bing.net/th/id/OIP.1wjimRWkVpeTYdXxLulyFAHaFJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
              },
              {
                name: 'Phuket',
                loc: 'Andaman Sea',
                img: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=800&auto=format&fit=crop',
              },
              {
                name: 'Sukhothai Historical Park',
                loc: 'Sukhothai',
                img: 'https://tse4.mm.bing.net/th/id/OIP.dEnrJffvz8GJG0k-8ICC3QHaDr?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
              },
            ].map((item) => (
              <div
                key={item.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-800">{item.name}</h3>
                  <p className="text-stone-500 text-sm mt-1">{item.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-stone-800">Culture & Spirit</h2>
        <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-10">
          Theravada Buddhism permeates every aspect of Thai life — from the ornate temple architecture to the philosophy of <em className="text-amber-700 font-semibold">sanuk</em> (fun and enjoyment). Festivals like <strong>Songkran</strong> (Thai New Year) and <strong>Loy Krathong</strong> (Festival of Lights) illuminate the country's deep connection to spirituality, nature, and community.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Theravada Buddhism',
            'Thai Cuisine',
            'Muay Thai',
            'Khon Dance',
            'Floating Markets',
            'Silk Weaving',
            'Traditional Massage',
          ].map((tag) => (
            <span
              key={tag}
              className="px-5 py-2.5 bg-stone-200 text-stone-700 rounded-full text-sm font-semibold hover:bg-amber-200 hover:text-amber-900 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-500 py-12 text-center">
        <p className="text-sm tracking-wide">
          About Thailand · Crafted with modern simplicity
        </p>
      </footer>
    </div>
  );
};

export default About;