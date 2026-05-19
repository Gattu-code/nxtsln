const technologies = [
  "React",
  "FastAPI",
  "Python",
  "Docker",
  "n8n",
  "LLMs",
  "OpenRouter",
  "Ollama",
  "APIs",
  "Automation",
  "Prompt Engineering",
  "Context Engineering",
  "Enterprise Workflows",
]

export default function TechStack({ content }) {
  return (

    <section className="max-w-6xl mx-auto px-8 py-24">

      <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
        {content.subtitle}      </p>

      <h2 className="text-5xl font-bold mt-6">
        {content.title} 
      </h2>

      <div className="flex flex-wrap gap-4 mt-16">

        {technologies.map((tech) => (

          <div
            key={tech}
            className="px-5 py-3 rounded-2xl border border-zinc-800 bg-zinc-950/70 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900 transition"
          >
            {tech}
          </div>

        ))}

      </div>

    </section>

  )
}