export default function Footer() {

  return (

    <footer className="border-t border-zinc-900 mt-24">

      <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>

          <h3 className="text-lg font-semibold">
            NXTSLN
          </h3>

          <p className="text-zinc-500 text-sm mt-2">
            AI Automation · Enterprise Systems · Operational Intelligence
          </p>

        </div>

        <div className="flex gap-6 text-sm text-zinc-500">

          <a
            href="#projects"
            className="hover:text-white transition"
          >
            Projects
          </a>

          <a
            href="#architecture"
            className="hover:text-white transition"
          >
            Architecture
          </a>

          <a
            href="#contact"
            className="hover:text-white transition"
          >
            Contact
          </a>

        </div>

      </div>

    </footer>

  )
}