import { motion } from "framer-motion"

import {
  Bot,
  Workflow,
  Truck,
} from "lucide-react"

import premiumCarImage from "../assets/premium-car-agent.png"
// import businessAnalyzerImage from "../assets/projects/business-case-analyzer.png"
import fleetImage from "../assets/fleet-operations.png"

export default function Projects({ content }) {

  const icons = {
    0: Bot,
    1: Workflow,
    2: Truck,
  }

 const images = {
  0: premiumCarImage,
  //2: businessAnalyzerImage,
  1: fleetImage,
}

  return (

    <section
      id="projects"
      className="max-w-6xl mx-auto px-8 py-24"
    >

      <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
        Selected Work
      </p>

      <h2 className="text-5xl font-bold mt-6">
        {content.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mt-16">

        {content.items.map((project, index) => {

          const Icon = icons[index]

          const image = images[index]

          return (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden bg-zinc-950/70 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition duration-300"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative">

                {image && (
                <div className="mb-8 overflow-hidden rounded-2xl border border-zinc-800">
                    <img
                    src={image}
                    alt={project.title}
                    className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                    />
                </div>
                )}
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">

                  {Icon && (
                    <Icon className="w-6 h-6 text-zinc-300" />
                  )}

                </div>

                <div className="flex items-center justify-between gap-4">

                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <span className="text-xs text-zinc-500 uppercase tracking-widest">
                    AI System
                  </span>

                </div>

                <p className="text-zinc-400 mt-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.stack.map((tech, techIndex) => (

                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {project.frontendDemos && (
                <div className="mt-8">
                    <p className="text-zinc-300 text-sm mb-3">
                    Demos Frontend
                    </p>

                    <div className="flex flex-wrap gap-4">
                    {project.frontendDemos.map((demo, demoIndex) => (
                        <a
                        key={demoIndex}
                        href={demo.url}
                        target="_blank"
                        className="border border-zinc-700 px-5 py-2 rounded-xl text-sm hover:bg-zinc-900 transition"
                        >
                        {demo.label}
                        </a>
                    ))}
                    </div>
                </div>
                )}

                    {project.backendDemos && (
                    <div className="mt-8">
                        <p className="text-zinc-300 text-sm mb-3">
                        Demos Backend
                        </p>

                        <div className="flex flex-wrap gap-4">
                        {project.backendDemos.map((demo, demoIndex) => (
                            <a
                            key={demoIndex}
                            href={demo.url}
                            target="_blank"
                            className="border border-zinc-700 px-5 py-2 rounded-xl text-sm hover:bg-zinc-900 transition"
                            >
                            {demo.label}
                            </a>
                        ))}
                        </div>
                    </div>
                    )}

                    <div className="flex gap-4 mt-8">
                    <a
                        href={project.demo}
                        target="_blank"
                        className="bg-white text-black px-5 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition"
                    >
                        Live Demo
                    </a>

                    <a
                        href={project.github}
                        target="_blank"
                        className="border border-zinc-700 px-5 py-2 rounded-xl text-sm hover:bg-zinc-900 transition"
                    >
                        GitHub
                    </a>
                    </div>

              </div>

            </motion.div>

          )

        })}

      </div>

    </section>

  )
}