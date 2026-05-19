import { motion } from "framer-motion"
export default function Hero({ content }) {

  return (

    <section className="relative overflow-hidden">

      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="absolute top-[100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/10 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto px-8 py-32"
        >
        <p className="text-zinc-400 uppercase tracking-[0.3em] text-sm">
          {content.subtitle}
        </p>

        <h1 className="text-7xl md:text-8xl font-bold mt-6 leading-none">
          {content.title}
        </h1>

        <p className="text-zinc-400 text-xl mt-8 max-w-2xl leading-relaxed">
          {content.description}
        </p>

        <div className="flex gap-4 mt-10">

          <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
            {content.primaryButton}
          </button>

          <button className="border border-zinc-700 px-6 py-3 rounded-xl hover:bg-zinc-900 transition">
            {content.secondaryButton}
          </button>

        </div>

      </motion.div>

    </section>

  )
}