export default function Features() {
  const featuresList = [
    { title: "Fast Performance", desc: "Powered by Vite for near-instantaneous build and load times." },
    { title: "Responsive Layout", desc: "Designed to look crisp on mobile, tablet, and desktop screens." },
    { title: "Utility-First CSS", desc: "Styled entirely using Tailwind CSS utility classes without raw CSS." }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400">Core Features</h2>
        <p className="text-slate-400 mt-2 max-w-xl mx-auto">Everything you need to deliver high-quality web projects.</p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((item, index) => (
            <div key={index} className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition text-left">
              <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg flex items-center justify-center font-bold mb-4">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}