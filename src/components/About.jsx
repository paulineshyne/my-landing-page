export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4">About the Activity</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            This project was developed for CCIT-06 Activity 1. It demonstrates practical knowledge of single-page React architecture, Vite scaffolding, and Tailwind CSS utility classes.
          </p>
          <p className="text-slate-400 leading-relaxed">
            By separating content into modular components, the layout stays organized and maintainable across future updates.
          </p>
        </div>
        <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl flex flex-col space-y-4">
          <div className="flex justify-between border-b border-slate-700 pb-3">
            <span className="text-slate-400">Framework</span>
            <span className="font-semibold text-cyan-300">React + Vite</span>
          </div>
          <div className="flex justify-between border-b border-slate-700 pb-3">
            <span className="text-slate-400">Styling</span>
            <span className="font-semibold text-cyan-300">Tailwind CSS</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Responsiveness</span>
            <span className="font-semibold text-cyan-300">Mobile, Tablet, Desktop</span>
          </div>
        </div>
      </div>
    </section>
  );
}