import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "history", label: "Heritage" },
  { id: "owners", label: "Ownership" },
  { id: "iconic", label: "Icons" },
  { id: "ev", label: "Electric" },
  { id: "future", label: "2030 Vision" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F2F5F8]/85 backdrop-blur-xl border-b border-black"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="font-display font-black tracking-tighter text-xl md:text-2xl uppercase flex items-center gap-3"
        >
          <span className="inline-block w-2.5 h-2.5 bg-[#587187]" />
          Scania<span className="text-[#587187]">/</span>HEAVY
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              data-testid={`nav-${l.id}-link`}
              className="text-sm font-medium tracking-wide uppercase link-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-testid="nav-cta"
          className="hidden md:inline-flex btn-slide items-center gap-2 bg-black text-white px-5 py-3 text-xs font-semibold tracking-[0.2em] uppercase border border-black"
        >
          Talk Heavy Metal
        </a>

        <button
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 border border-black"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#F2F5F8] border-t border-black" data-testid="nav-mobile-menu">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-${l.id}-link`}
                className="font-display text-2xl font-bold uppercase tracking-tight"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              data-testid="nav-mobile-cta"
              className="mt-2 inline-block bg-black text-white px-5 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-center"
            >
              Talk Heavy Metal
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
