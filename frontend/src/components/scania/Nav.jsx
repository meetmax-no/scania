import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

function LangToggle({ mobile = false, lang, setLang }) {
  return (
    <div
      data-testid={mobile ? "lang-toggle-mobile" : "lang-toggle"}
      className={`inline-flex items-stretch border border-current text-[11px] font-semibold tracking-[0.2em] uppercase select-none ${
        mobile ? "self-start" : ""
      }`}
    >
      <button
        type="button"
        aria-pressed={lang === "no"}
        data-testid={mobile ? "lang-no-mobile" : "lang-no"}
        onClick={() => setLang("no")}
        className={`px-3 py-2 transition-colors ${
          lang === "no" ? "bg-current" : "bg-transparent"
        }`}
      >
        <span className={lang === "no" ? "text-[#F2F5F8] mix-blend-difference" : ""}>NO</span>
      </button>
      <span aria-hidden className="w-px self-stretch bg-current opacity-60" />
      <button
        type="button"
        aria-pressed={lang === "en"}
        data-testid={mobile ? "lang-en-mobile" : "lang-en"}
        onClick={() => setLang("en")}
        className={`px-3 py-2 transition-colors ${
          lang === "en" ? "bg-current" : "bg-transparent"
        }`}
      >
        <span className={lang === "en" ? "text-[#F2F5F8] mix-blend-difference" : ""}>EN</span>
      </button>
    </div>
  );
}

export default function Nav() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { id: "history", label: t.nav.heritage },
    { id: "owners", label: t.nav.ownership },
    { id: "iconic", label: t.nav.icons },
    { id: "ev", label: t.nav.electric },
    { id: "future", label: t.nav.future },
    { id: "contact", label: t.nav.contact },
  ];

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
          ? "bg-[#F2F5F8]/85 backdrop-blur-xl border-b border-black text-black"
          : "bg-transparent border-b border-transparent text-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between gap-4">
        <a
          href="#top"
          data-testid="nav-logo"
          className="font-display font-black tracking-tighter text-xl md:text-2xl uppercase flex items-center gap-3 shrink-0"
        >
          <span className="inline-block w-2.5 h-2.5 bg-[#587187]" />
          Scania<span className="text-[#587187]">/</span>HEAVY
        </a>

        <nav className="hidden lg:flex items-center gap-7">
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

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <LangToggle lang={lang} setLang={setLang} />
          <a
            href="#contact"
            data-testid="nav-cta"
            className="btn-slide inline-flex items-center gap-2 bg-black text-white px-5 py-3 text-xs font-semibold tracking-[0.2em] uppercase border border-black"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 border border-current"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#F2F5F8] text-black border-t border-black" data-testid="nav-mobile-menu">
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
            <LangToggle mobile lang={lang} setLang={setLang} />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              data-testid="nav-mobile-cta"
              className="mt-2 inline-block bg-black text-white px-5 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-center"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
