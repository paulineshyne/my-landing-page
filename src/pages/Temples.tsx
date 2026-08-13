import React from 'react';

const Temples: React.FC = () => {
  const temples = [
    {
      name: 'Wat Phra Kaew',
      subtitle: 'Temple of the Emerald Buddha',
      location: 'Bangkok',
      description: 'Thailand\'s most sacred temple, nestled within the Grand Palace complex. The 66cm jade Emerald Buddha sits atop a mountain-like pedestal in the principal worship hall, surrounded by mirror-mosaic walls and a city\'s worth of gilded spires.',
      image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=800&auto=format&fit=crop',
      tag: 'Royal',
    },
    {
      name: 'Wat Arun',
      subtitle: 'Temple of Dawn',
      location: 'Bangkok',
      description: 'Rising 70 metres above the Chao Phraya River, its central prang is encrusted with colourful porcelain mosaics that catch the first light of sunrise. Named after Aruna, charioteer of the sun, it is one of Bangkok\'s most photographed silhouettes.',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800&auto=format&fit=crop',
      tag: 'Iconic',
    },
    {
      name: 'Wat Pho',
      subtitle: 'Temple of the Reclining Buddha',
      location: 'Bangkok',
      description: 'Home to a 46-metre golden Reclining Buddha and the largest collection of Buddha images in Thailand — over 1,000 statues. The complex is also considered the birthplace of traditional Thai massage, with an active massage school on site.',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop',
      tag: 'Historic',
    },
    {
      name: 'Wat Rong Khun',
      subtitle: 'The White Temple',
      location: 'Chiang Rai',
      description: 'A surreal modern masterpiece designed by artist Chalermchai Kositpipat in 1997. Dazzling white walls embedded with mirror-glass mosaics create an otherworldly glow. The bridge across the "cycle of rebirth" leads to the main ubosot.',
      image: 'https://cdn.pixabay.com/photo/2016/03/21/12/58/church-1270475_1280.jpg',
      tag: 'Modern',
    },
    {
      name: 'Wat Phra That Doi Suthep',
      subtitle: 'Mountain Sanctuary',
      location: 'Chiang Mai',
      description: 'Perched 1,073 metres above Chiang Mai, reached by 306 naga-flanked steps. The golden chedi is said to enshrine a relic of the Buddha himself. Lanna-style architecture and sweeping valley views make this northern Thailand\'s spiritual crown.',
      image: 'https://tse2.mm.bing.net/th/id/OIP.8f3eGsnoRJ4zpViEdwXRCAHaFj?r=0&w=600&h=450&rs=1&pid=ImgDetMain&o=7&rm=3',
      tag: 'Sacred',
    },
    {
      name: 'Wat Mahathat',
      subtitle: 'Ayutthaya Historical Park',
      location: 'Ayutthaya',
      description: 'A UNESCO World Heritage ruin where a sandstone Buddha head has been silently embraced by the roots of a bodhi tree for centuries. The image has become a profound symbol of nature reclaiming history after the Burmese sack of 1767.',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800&auto=format&fit=crop',
      tag: 'Ancient',
    },
  ];

  const architecture = [
    {
      term: 'Wat',
      meaning: 'Temple Complex',
      desc: 'A compound of religious buildings enclosed by walls, containing multiple structures for worship, ordination, and living quarters for monks.',
    },
    {
      term: 'Chedi',
      meaning: 'Stupa / Reliquary',
      desc: 'A bell-shaped monument housing sacred relics — fragments of the Buddha, royal ashes, or engraved scriptures. The most iconic shape in Thai temple skylines.',
    },
    {
      term: 'Prang',
      meaning: 'Khmer Tower',
      desc: 'A conical tower with a broad base narrowing toward the top, adapted from Angkor architecture. Wat Arun\'s 70m prang is the most famous example.',
    },
    {
      term: 'Ubosot',
      meaning: 'Ordination Hall',
      desc: 'The most sacred building in a wat, where monks take their vows. Marked by eight boundary stones (sima) and usually facing east.',
    },
    {
      term: 'Viharn',
      meaning: 'Assembly Hall',
      desc: 'The main hall for ceremonies and public worship. Similar in appearance to the ubosot, but without the sacred sima boundary stones.',
    },
    {
      term: 'Mondop',
      meaning: 'Square Pavilion',
      desc: 'A cubical structure with a spired roof, often housing scriptures, Buddha footprints, or ceremonial objects.',
    },
  ];

  const etiquette = [
    { icon: '👕', title: 'Dress Modestly', desc: 'Shoulders and knees must be covered. No tank tops, shorts, or revealing clothing.' },
    { icon: '🥿', title: 'Remove Shoes', desc: 'Always leave footwear outside before entering any hall, ubosot, or viharn.' },
    { icon: '🙏', title: 'Show Respect', desc: 'Never point your feet toward a Buddha image. Sit with feet tucked behind you.' },
    { icon: '📸', title: 'Photography', desc: 'Ask before photographing monks. Do not climb on structures for photos.' },
    { icon: '🔇', title: 'Keep Quiet', desc: 'Speak softly. These are active places of worship, not just tourist attractions.' },
    { icon: '💰', title: 'Donations', desc: 'Making merit through small donations is welcomed and supports temple upkeep.' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-200">
      {/* Hero */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://as2.ftcdn.net/v2/jpg/05/61/70/99/1000_F_561709904_O2eiPsBY2SYNRt61yOn1RqeQbVyCUfwc.jpg"
            alt="Thai temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/75" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <span className="text-amber-400 text-sm uppercase tracking-[0.3em] font-semibold mb-4">
            Phuttha-Wat
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight mb-6">
            Sacred Spaces
          </h1>
          <p className="text-lg md:text-2xl text-stone-300 font-light max-w-2xl leading-relaxed">
            Over 44,000 Buddhist temples dot the Thai landscape — from ancient ruins swallowed by jungle roots to gleaming riverside prangs that pierce the sky.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
          The Soul of the Kingdom
        </h2>
        <p className="text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
          In Thailand, the temple — or <em className="font-semibold text-stone-800">wat</em> — is far more than a place of worship. It is a community center, a school, a meditation retreat, and a repository of art spanning eight centuries. From the Khmer-inspired prangs of Ayutthaya to the Lanna-style chedis of Chiang Mai, each region tells its own architectural story.
        </p>
      </section>

      {/* Featured Temples Grid */}
      <section className="bg-white py-24 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Notable Temples</h2>
              <p className="text-stone-500 mt-2">Six landmarks across three kingdoms of Thai history</p>
            </div>
            <span className="hidden md:block text-sm text-stone-400 uppercase tracking-widest">
              {temples.length} Featured
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temples.map((temple) => (
              <article
                key={temple.name}
                className="group bg-stone-50 rounded-2xl overflow-hidden border border-stone-100 hover:border-amber-300 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-stone-900/80 text-stone-50 text-xs font-semibold uppercase tracking-wider rounded-full backdrop-blur-sm">
                    {temple.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-amber-700 font-semibold uppercase tracking-widest mb-1">
                    {temple.location}
                  </p>
                  <h3 className="text-xl font-bold text-stone-800 mb-1">{temple.name}</h3>
                  <p className="text-sm text-stone-500 italic mb-3">{temple.subtitle}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{temple.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Glossary */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Temple Architecture</h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Understanding the vocabulary of a Thai wat helps decode the layers of meaning built into every structure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {architecture.map((item) => (
            <div
              key={item.term}
              className="bg-white p-8 rounded-2xl border border-stone-100 hover:border-stone-300 transition-colors"
            >
              <h3 className="text-2xl font-bold text-stone-800 mb-1">{item.term}</h3>
              <p className="text-sm text-amber-700 font-semibold uppercase tracking-widest mb-3">
                {item.meaning}
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Etiquette Section */}
      <section className="bg-stone-100 py-24 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
                Temple Etiquette
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                Thai temples are active places of worship, not museums. Observing proper etiquette shows respect for the monks, devotees, and centuries of tradition that these walls hold.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {etiquette.map((rule) => (
                  <div key={rule.title} className="flex items-start gap-4">
                    <span className="text-2xl shrink-0">{rule.icon}</span>
                    <div>
                      <h4 className="font-bold text-stone-800 text-sm">{rule.title}</h4>
                      <p className="text-stone-500 text-sm mt-1 leading-relaxed">{rule.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-stone-200">
              <img
                src="https://as2.ftcdn.net/jpg/11/35/16/45/1000_F_1135164551_1LlpaoSSz7Pc0JW4mXNbOaLovNpbQgli.jpg"
                alt="Temple detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <blockquote className="text-2xl md:text-3xl font-light text-stone-700 italic leading-relaxed">
          "A temple is not just a building of bricks and gold. It is the heart of the community, the keeper of stories, and the mirror of a nation's soul."
        </blockquote>
        <p className="mt-6 text-sm text-stone-500 uppercase tracking-widest font-semibold">
          — Thai Proverb
        </p>
      </section>
    </div>
  );
};

export default Temples;