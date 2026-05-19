export default function Architecture({ content }) {
  return (

    <section
      id="architecture"
      className="max-w-6xl mx-auto px-8 py-24"
    >

      <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
        {content.subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-6 max-w-4xl">
        {content.title} 
      </h2>

      <div className="grid md:grid-cols-5 gap-6 mt-16">

        {content.steps.map((step, index) => (

          <div
            key={step.title}
            className="bg-zinc-950/70 border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 transition duration-300"
          >

            <p className="text-zinc-500 text-sm mb-5">
              {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="text-xl font-semibold leading-tight">
              {step.title}
            </h3>

            <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
              {step.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  )
}