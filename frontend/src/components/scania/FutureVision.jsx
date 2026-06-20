import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionHeader } from "./History";

export default function FutureVision() {
  const { t } = useLanguage();
  const f = t.future;
  return (
    <section
      id="future"
      data-testid="future-section"
      className="bg-[#3B4E5E] text-white py-24 md:py-32 border-t border-black"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow={f.eyebrow}
          title={f.title}
          subtitle={f.subtitle}
          testid="future"
        />

        <div className="mt-20 space-y-px bg-white/30">
          {f.rows.map((r, i) => (
            <motion.article
              key={r.year}
              data-testid={`future-row-${r.year}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="grid grid-cols-12 gap-4 md:gap-8 items-start bg-[#3B4E5E] py-10 md:py-14 px-2 md:px-6"
            >
              <div className="col-span-3 md:col-span-2 font-display font-black tabular text-4xl md:text-7xl leading-none tracking-tighter">
                {r.year}
              </div>
              <div className="col-span-9 md:col-span-6">
                <h3 className="font-display font-bold uppercase text-xl md:text-3xl tracking-tight leading-[1.1]">
                  {r.title}
                </h3>
                <p className="mt-4 text-white/75 text-base leading-relaxed max-w-2xl">
                  {r.text}
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 md:border-l md:border-white/30 md:pl-8 mt-4 md:mt-0">
                <div className="font-display font-black tabular text-4xl md:text-5xl text-[#F2F5F8] leading-none">
                  {r.pct}
                </div>
                <div className="mt-3 text-[10px] tracking-[0.25em] uppercase font-semibold text-white/60">
                  {r.pctLabel}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
