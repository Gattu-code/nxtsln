export default function ProjectCard({
  title,
  description,
  stack,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition">

      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <span className="text-xs text-zinc-500 uppercase tracking-widest">
          AI Project
        </span>
      </div>

      <p className="text-zinc-400 mt-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-8">
        {stack.map((item) => (
          <span
            key={item}
            className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>

    </div>
  )
}