import React from 'react';

const Cuisine: React.FC = () => {
  const regions = [
    {
      name: 'Northern',
      thai: 'Lanna',
      flavor: 'Aromatic, Mild, Herbal',
      desc: 'Mountain comfort food. Coconut milk is rare; broths and herbs dominate. Sticky rice is eaten with grilled meats and smoky chili dips at communal Khantoke tables.',
      dishes: ['Khao Soi', 'Sai Ua', 'Nam Prik Noom', 'Gaeng Hunglay'],
      accent: 'bg-emerald-700',
      light: 'bg-emerald-50',
    },
    {
      name: 'Northeastern',
      thai: 'Isaan',
      flavor: 'Bold, Fiery, Zesty',
      desc: 'Thailand\'s spiciest region. Influenced by Laos, Isaan cuisine relies on fermented fish (pla ra), grilled meats, and raw salads pounded in a mortar. Sticky rice is eaten by hand.',
      dishes: ['Som Tum', 'Larb', 'Gai Yang', 'Tom Saap'],
      accent: 'bg-orange-700',
      light: 'bg-orange-50',
    },
    {
      name: 'Central',
      thai: 'Bangkok',
      flavor: 'Balanced, Refined, Complex',
      desc: 'The heart of royal Thai cuisine. Complex curries, stir-fries, and noodle dishes balance all four flavors in perfect harmony. Jasmine rice is the staple grain.',
      dishes: ['Pad Thai', 'Tom Yum', 'Green Curry', 'Massaman Curry'],
      accent: 'bg-amber-700',
      light: 'bg-amber-50',
    },
    {
      name: 'Southern',
      thai: 'Pak Tai',
      flavor: 'Spicy, Rich, Coastal',
      desc: 'Coconut milk and seafood reign. Influenced by Malay trade, southern curries are thick, intensely spiced, and often blisteringly hot. Turmeric and shrimp paste are essential.',
      dishes: ['Gaeng Som', 'Kua Kling', 'Tom Kha Gai', 'Hor Mok'],
      accent: 'bg-rose-700',
      light: 'bg-rose-50',
    },
  ];

  const signatureDishes = [
    {
      name: 'Pad Thai',
      thai: 'ผัดไทย',
      desc: 'Stir-fried rice noodles with tamarind, egg, tofu, shrimp, and crushed peanuts. The world\'s most famous Thai dish, born from a 1930s nationalist campaign to create a national noodle.',
      tags: ['Central', 'Stir-Fry', 'Street Food'],
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Tom Yum Goong',
      thai: 'ต้มยำกุ้ง',
      desc: 'A fragrant hot-and-sour soup with lemongrass, galangal, kaffir lime leaves, and plump river prawns. The aroma alone is enough to clear the senses.',
      tags: ['Central', 'Soup', 'Spicy'],
      image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Som Tum',
      thai: 'ส้มตำ',
      desc: 'Shredded green papaya pounded with chilies, long beans, tomatoes, peanuts, and a lime-fish-sauce dressing. Refreshing, crunchy, and deceptively fiery.',
      tags: ['Isaan', 'Salad', 'Street Food'],
      image: 'https://images.unsplash.com/photo-1626804475297-411d863b5285?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Green Curry',
      thai: 'แกงเขียวหวาน',
      desc: 'Velvety coconut milk simmered with green chilies, Thai basil, eggplant, and chicken. Creamy, aromatic, and vibrant — the crown jewel of Thai curries.',
      tags: ['Central', 'Curry', 'Coconut'],
      image: 'https://images.unsplash.com/photo-1626804475315-1dfc2a4bda8c?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Khao Soi',
      thai: 'ข้าวซอย',
      desc: 'Northern egg noodles bathed in a rich coconut curry broth, topped with crispy fried noodles. A Chiang Mai legend with Chin Ho (Chinese Muslim) roots.',
      tags: ['Northern', 'Noodles', 'Curry'],
      image: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Mango Sticky Rice',
      thai: 'ข้าวเหนียวมะม่วง',
      desc: 'Sweet glutinous rice steamed in coconut cream, paired with ripe golden mango. Thailand\'s most beloved dessert — simple, seasonal, and unforgettable.',
      tags: ['Dessert', 'Sweet', 'Seasonal'],
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const flavors = [
    { name: 'Sweet', thai: 'Wan', color: 'text-amber-600', desc: 'Palm sugar, coconut milk, ripe fruit' },
    { name: 'Sour', thai: 'Priaw', color: 'text-lime-600', desc: 'Lime, tamarind, bilimbi, vinegar' },
    { name: 'Salty', thai: 'Khem', color: 'text-sky-600', desc: 'Fish sauce, shrimp paste, sea salt' },
    { name: 'Spicy', thai: 'Phet', color: 'text-rose-600', desc: 'Bird\'s eye chilies, pepper, ginger' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-200">
      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2400&auto=format&fit=crop"
            alt="Thai food spread"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/70" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <span className="text-amber-400 text-sm uppercase tracking-[0.3em] font-semibold mb-4">
            Ahan Thai
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight mb-6">
            A Symphony<br />of Flavor
          </h1>
          <p className="text-lg md:text-2xl text-stone-300 font-light max-w-2xl leading-relaxed">
            Thai cuisine is a masterclass in balance — where sweet, sour, salty, and spicy collide in every bite.
          </p>
        </div>
      </section>

      {/* The Four Flavors */}
      <section className="bg-white py-20 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">The Four Pillars</h2>
            <p className="text-stone-500">Every Thai dish seeks harmony between these essential tastes</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {flavors.map((f) => (
              <div
                key={f.name}
                className="text-center p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-300 transition-colors"
              >
                <div className={`text-4xl font-extrabold mb-2 ${f.color}`}>{f.name}</div>
                <div className="text-xs text-stone-400 uppercase tracking-[0.2em] font-semibold mb-3">
                  {f.thai}
                </div>
                <p className="text-sm text-stone-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Breakdown */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Four Regions, Four Identities</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Thailand's geography shapes its palate. From the misty mountains of the north to the tropical coasts of the south, each region cooks with what the land and sea provide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((r) => (
            <div
              key={r.name}
              className={`${r.light} rounded-2xl overflow-hidden border border-stone-100 hover:shadow-lg transition-all duration-300 group`}
            >
              <div className={`h-1.5 ${r.accent}`} />
              <div className="p-8">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-stone-800">{r.name}</h3>
                  <span className="text-xs text-stone-400 uppercase tracking-widest">{r.thai}</span>
                </div>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${r.accent.replace('bg-', 'text-')}`}>
                  {r.flavor}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">{r.desc}</p>
                <div className="space-y-2">
                  <p className="text-xs text-stone-400 uppercase tracking-widest font-semibold">Signature Dishes</p>
                  <div className="flex flex-wrap gap-2">
                    {r.dishes.map((d) => (
                      <span
                        key={d}
                        className="px-3 py-1 bg-white text-stone-700 text-xs font-medium rounded-full border border-stone-200"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="bg-stone-100 py-24 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Signature Dishes</h2>
              <p className="text-stone-500 mt-2">Plates that define a nation</p>
            </div>
            <span className="hidden md:block text-sm text-stone-400 uppercase tracking-widest">
              {signatureDishes.length} Essentials
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureDishes.map((dish) => (
              <article
                key={dish.name}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-amber-300 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-xl font-bold text-stone-800">{dish.name}</h3>
                    <span className="text-sm text-stone-400 font-light">{dish.thai}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dish.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{dish.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Street Food Culture */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-stone-200">
            <img
              src="https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=1000&auto=format&fit=crop"
              alt="Thai street food"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
              The Street is the Kitchen
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              In Thailand, the best food rarely comes from a restaurant with a Michelin star. It comes from a cart on a soi alley, a stall under a fluorescent bulb, or a auntie with a wok she's seasoned for forty years.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Bangkok alone has over 500,000 street food vendors. Pad Thai sizzles over charcoal. Som Tum is pounded to order. Moo Ping skewers smoke over open grills. Eating on the street isn't a budget option — it's the authentic option.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '500K+', label: 'Street Vendors in Bangkok' },
                { stat: '~$1–2', label: 'Average Street Meal Cost' },
                { stat: '24/7', label: 'Food Available Around the Clock' },
                { stat: '4 Regions', label: 'Cuisines on Every Corner' },
              ].map((s) => (
                <div key={s.label} className="bg-stone-100 rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-stone-800">{s.stat}</div>
                  <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dining Wisdom */}
      <section className="bg-stone-900 text-stone-300 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-50 mb-10">The Thai Table</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: 'Gin Khao',
                subtitle: 'Eat Rice',
                desc: 'Meals are built around rice. Curry, stir-fry, and soup are toppings — the rice is the foundation.',
              },
              {
                title: 'Grapao',
                subtitle: 'Sharing',
                desc: 'Dishes arrive all at once, placed in the center. Everyone takes a little of everything, creating their own perfect bite.',
              },
              {
                title: 'Sanuk',
                subtitle: 'Enjoyment',
                desc: 'Food is meant to be fun. Loud slurping, messy fingers, and second helpings are all signs of a meal well enjoyed.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6">
                <h3 className="text-2xl font-bold text-amber-400 mb-1">{item.title}</h3>
                <p className="text-xs text-stone-500 uppercase tracking-[0.2em] font-semibold mb-4">
                  {item.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-stone-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cuisine;