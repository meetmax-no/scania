import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TESTIDS = ["contact-press", "contact-fleet", "contact-archive", "contact-tours"];

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="bg-black text-white pt-24 md:pt-32 pb-12 border-t border-black"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <p className="text-xs tracking-[0.3em] uppercase font-semibold text-[#587187]">
          {c.eyebrow}
        </p>
        <h2
          data-testid="contact-headline"
          className="mt-5 font-display font-black uppercase tracking-tighter leading-[0.85] text-[14vw] md:text-[10vw] lg:text-[9rem]"
        >
          {c.headlineA}
          <br />
          {c.headlineB.split(" ").map((w, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i} className="text-[#587187]">{i > 0 ? " " : ""}{w}</span>
            ) : (
              <span key={i}>{i > 0 ? " " : ""}{w}</span>
            )
          )}
        </h2>

        <div className="mt-16 grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <p className="text-lg text-white/80 leading-relaxed max-w-md">
              {c.lede}
            </p>
            <a
              href={`mailto:${c.primary}`}
              data-testid="contact-primary-cta"
              className="btn-slide invert-light mt-10 group inline-flex items-center gap-3 border border-white px-7 py-5 text-xs font-semibold tracking-[0.25em] uppercase hover:text-black"
            >
              {c.primary}
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <ul className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/15 border border-white/15">
            {c.channels.map((ch, i) => (
              <li
                key={i}
                data-testid={TESTIDS[i]}
                className="bg-black p-7 md:p-9 min-h-[170px] flex flex-col justify-between"
              >
                <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/50">
                  {ch.label}
                </span>
                <a
                  href={`mailto:${ch.value}`}
                  data-testid={`${TESTIDS[i]}-link`}
                  className="font-display text-base md:text-lg font-bold tracking-tight link-underline break-all"
                >
                  {ch.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
