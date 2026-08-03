export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 px-6 flex flex-col justify-center items-center text-center bg-slate-900 text-white">
      <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase mb-3 bg-cyan-950/60 border border-cyan-800/50 px-3 py-1 rounded-full">
        React + Vite + Tailwind
      </span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold max-w-3xl leading-tight">
        Build Fast, Modern Web Applications Effortlessly
      </h1>
      <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl">
        A streamlined landing page built to showcase components, responsive layouts, and clean Tailwind styling.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a href="#features" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-lg transition shadow-lg">
          Explore Features
        </a>
        <a href="#contact" className="border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-3 rounded-lg transition">
          Get in Touch
        </a>
      </div>
    </section>
  );
}