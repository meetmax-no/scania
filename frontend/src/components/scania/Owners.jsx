import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Owners() {
  const { t } = useLanguage();
  const o = t.owners;
  return (
    <section
      id="owners"
      data-testid="owners-section"
      className="bg-[#0B0E12] text-white py-24 md:py-32 border-t border-black"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionHeaderDark
          eyebrow={o.eyebrow}
          title={o.title}
          subtitle={o.subtitle}
          testid="owners"
        />

        <div className="mt-20 grid grid-cols-12 gap-x-6 md:gap-x-12 gap-y-16">
          {o.chapters.map((c, i) => (
            <motion.article
              key={i}
              data-testid={`owners-chapter-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="col-span-12 md:col-span-6 border-t border-white/20 pt-8"
            >
              <div className="flex items-start justify-between gap-8">
                <span className="font-display font-black tabular text-xs tracking-[0.25em] uppercase text-[#587187]">
                  {c.period}
                </span>
                <span className="font-display font-black tabular text-3xl text-white/30">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display font-bold text-3xl md:text-4xl tracking-tight uppercase leading-[0.95]">
                {c.title}
              </h3>
              <p className="mt-5 text-white/70 text-base leading-relaxed max-w-lg">
                {c.body}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-12 gap-6">
          <figure className="col-span-12 md:col-span-7 img-zoom-wrap border border-white/30">
            <img
              src="/scania/owners-biomethane.jpg"
              alt="Industrial Scania truck"
              className="img-zoom w-full h-[420px] md:h-[520px] object-cover grayscale"
            />
          </figure>
          <figure className="col-span-12 md:col-span-5 bg-[#3B4E5E] text-white p-10 md:p-14 flex flex-col justify-between">
            <p className="text-xs tracking-[0.3em] uppercase text-white/60">
              {o.archiveTag}
            </p>
            <blockquote className="font-display text-2xl md:text-3xl font-bold leading-tight">
              {o.quote}
            </blockquote>
            <footer className="mt-8 text-xs tracking-[0.25em] uppercase text-white/60">
              {o.quoteAttr}
            </footer>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function SectionHeaderDark({ eyebrow, title, subtitle, testid }) {
  return (
    <div className="grid grid-cols-12 gap-6 items-end">
      <div className="col-span-12 md:col-span-7">
        <p
          data-testid={`${testid}-eyebrow`}
          className="text-xs tracking-[0.3em] uppercase font-semibold text-[#587187]"
        >
          {eyebrow}
        </p>
        <h2
          data-testid={`${testid}-title`}
          className="mt-5 font-display font-black uppercase tracking-tighter text-4xl md:text-6xl leading-[0.92] text-white"
        >
          {title}
        </h2>
      </div>
      <p
        data-testid={`${testid}-subtitle`}
        className="col-span-12 md:col-span-4 md:col-start-9 text-base md:text-lg text-white/60 leading-relaxed"
      >
        {subtitle}
      </p>
    </div>
  );
}
