export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4">Get In Touch</h2>
        <p className="text-slate-400 mb-8">Have questions or want to collaborate? Send a message below.</p>
        
        <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1">Message</label>
            <textarea rows="4" className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400" placeholder="Write your message here..."></textarea>
          </div>
          <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-lg transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}