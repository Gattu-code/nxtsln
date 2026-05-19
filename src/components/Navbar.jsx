export default function Navbar({ language, setLanguage }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] border-b border-zinc-800 bg-black/90 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <span className="text-lg font-semibold tracking-wide">NXTSLN</span>
        </div>

        <nav className="flex items-center gap-8 text-sm text-zinc-400">
          <a href="#projects" className="hover:text-white transition">Proyectos</a>
          <a href="#architecture" className="hover:text-white transition">Arquitectura</a>
          <a href="#contact" className="hover:text-white transition">Contacto</a>
        </nav>

        <div className="flex gap-2">
          <button
            onClick={() => setLanguage("es")}
            className={`px-3 py-1 rounded-lg border text-sm transition ${
              language === "es"
                ? "bg-white text-black"
                : "border-zinc-700 text-zinc-400"
            }`}
          >
            ES
          </button>

          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded-lg border text-sm transition ${
              language === "en"
                ? "bg-white text-black"
                : "border-zinc-700 text-zinc-400"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  )
}