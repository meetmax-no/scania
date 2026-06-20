import { ArrowDownRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden bg-[#0B0E12] text-white"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1670509295484-df0c2512fec4?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
          alt="Scania heavy truck on highway"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E12] via-[#0B0E12]/60 to-[#0B0E12]/30" />
        <div className="absolute inset-0 bg-[#587187]/10 mix-blend-overlay" />
      </div>

      <div className="relative pt-28 md:pt-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between text-xs tracking-[0.3em] uppercase text-[#94A3B8] font-medium">
          <span data-testid="hero-tag-est">{h.tagTop}</span>
          <span className="hidden md:inline">{h.tagMid}</span>
          <span>{h.tagRight}</span>
        </div>
        <div className="mt-6 h-px bg-white/20" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 mt-16 md:mt-24 grid grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-9"
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#587187] font-semibold mb-6">
            <span className="inline-block w-8 h-px bg-[#587187] align-middle mr-3" />
            {h.eyebrow}
          </p>
          <h1
            data-testid="hero-headline"
            className="font-display font-black uppercase tracking-tighter leading-[0.85] text-[14vw] md:text-[10vw] lg:text-[9rem]"
          >
            {h.headlineA}
            <br />
            {h.headlineB.split(" ").map((w, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-[#587187]">{" "}{w}</span>
              ) : (
                <span key={i}>{i > 0 ? " " : ""}{w}</span>
              )
            )}
            <br />
            {h.headlineC}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="col-span-12 md:col-span-4 md:col-start-9 mt-10 md:mt-32"
        >
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-md">
            {h.lede}
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 mt-16 md:mt-24 pb-12">
        <div className="h-px bg-white/20 mb-6" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex items-end gap-10">
            {h.stats.map((s, i) => (
              <Stat key={i} number={s.num} label={s.label} testid={`hero-stat-${i}`} />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#history"
              data-testid="hero-cta-explore"
              className="btn-slide group inline-flex items-center gap-3 bg-white text-black px-6 py-4 text-xs font-semibold tracking-[0.25em] uppercase border border-white"
            >
              {h.ctaExplore}
              <ArrowDownRight size={16} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#ev"
              data-testid="hero-cta-ev"
              className="btn-slide invert-light inline-flex items-center gap-2 px-6 py-4 text-xs font-semibold tracking-[0.25em] uppercase border border-white text-white hover:text-black"
            >
              <Zap size={14} /> {h.ctaEv}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label, testid }) {
  return (
    <div data-testid={testid}>
      <div className="font-display font-black text-4xl md:text-6xl tabular leading-none tracking-tighter">
        {number}
      </div>
      <div className="mt-2 text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/60 max-w-[140px]">
        {label}
      </div>
    </div>
  );
}
