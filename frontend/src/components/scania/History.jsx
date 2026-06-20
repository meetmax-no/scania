import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function History() {
  const { t } = useLanguage();
  const h = t.history;
  return (
    <section
      id="history"
      data-testid="history-section"
      className="relative bg-[#F2F5F8] text-black py-24 md:py-32 border-t border-black"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow={h.eyebrow}
          title={h.title}
          subtitle={h.subtitle}
          testid="history"
        />

        <div className="mt-20 grid grid-cols-12 gap-x-6 md:gap-x-12">
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <div className="img-zoom-wrap border border-black sticky top-28">
              <img
                src="/scania/history-archive.jpg"
                alt="Vintage Scania-Vabis truck"
                className="img-zoom w-full h-[520px] object-cover grayscale"
              />
              <div className="bg-black text-white px-5 py-4 text-[10px] tracking-[0.25em] uppercase flex justify-between">
                <span>{h.plate}</span>
                <span>{h.archive}</span>
              </div>
            </div>
          </div>

          <ol className="col-span-12 md:col-span-7 lg:col-span-8 mt-16 md:mt-0 relative">
            <div className="absolute left-[88px] md:left-[100px] top-2 bottom-2 w-px bg-black" aria-hidden />
            {h.milestones.map((m, i) => (
              <motion.li
                key={m.year}
                data-testid={`history-item-${m.year}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-10 pb-12 last:pb-0 relative"
              >
                <div className="font-display font-black tabular text-2xl md:text-3xl leading-none pt-1">
                  {m.year}
                </div>
                <div className="relative">
                  <span className="absolute -left-[26px] md:-left-[30px] top-2 w-3 h-3 bg-[#587187] border-2 border-black" />
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight leading-tight">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed max-w-xl">
                    {m.text}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, testid }) {
  return (
    <div className="grid grid-cols-12 gap-6 items-end">
      <div className="col-span-12 md:col-span-6">
        <p
          data-testid={`${testid}-eyebrow`}
          className="text-xs tracking-[0.3em] uppercase font-semibold text-[#3B4E5E]"
        >
          {eyebrow}
        </p>
        <h2
          data-testid={`${testid}-title`}
          className="mt-5 font-display font-black uppercase tracking-tighter text-4xl md:text-6xl leading-[0.92]"
        >
          {title}
        </h2>
      </div>
      {subtitle && (
        <p
          data-testid={`${testid}-subtitle`}
          className="col-span-12 md:col-span-5 md:col-start-8 text-base md:text-lg text-slate-700 leading-relaxed"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
