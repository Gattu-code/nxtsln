export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-8 py-24">
      <div className="border border-zinc-800 bg-zinc-950/70 rounded-3xl p-10 text-center">
        <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
          Contact
        </p>

        <h2 className="text-5xl font-bold mt-6">
          Let’s build practical AI systems
        </h2>

        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-relaxed">
          Open to AI automation, workflow design, conversational agents and enterprise technology consulting opportunities.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <a className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
            LinkedIn
          </a>

          <a className="border border-zinc-700 px-6 py-3 rounded-xl hover:bg-zinc-900 transition">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}