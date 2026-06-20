export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="bg-black text-white border-t border-white/15 pt-12 pb-10"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="font-display font-black uppercase tracking-tighter text-2xl flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 bg-[#587187]" />
            Scania<span className="text-[#587187]">/</span>HEAVY
          </div>
          <nav className="flex flex-wrap gap-6 text-xs tracking-[0.25em] uppercase text-white/60">
            <a href="#history" className="link-underline">Heritage</a>
            <a href="#owners" className="link-underline">Ownership</a>
            <a href="#iconic" className="link-underline">Icons</a>
            <a href="#ev" className="link-underline">Electric</a>
            <a href="#future" className="link-underline">2030</a>
          </nav>
        </div>
        <div className="mt-10 pt-6 border-t border-white/15 flex flex-col md:flex-row md:justify-between gap-3 text-xs text-white/50">
          <p>
            Editorial fan project — independent of Scania AB and TRATON SE.
            Heritage imagery used for non-commercial demonstration.
          </p>
          <p className="tabular">© {new Date().getFullYear()} · Södertälje, SE</p>
        </div>
      </div>
    </footer>
  );
}
