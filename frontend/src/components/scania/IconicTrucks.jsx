import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionHeader } from "./History";

const images = {
  L51: "/scania/L51.jpg",
  LB140: "/scania/LB140.jpg",
  "R-SERIES": "/scania/R-Series.jpg",
  "T-CAB": "/scania/T-Cab.jpg",
  "S-SERIES": "/scania/S-Series.jpg",
  "40R BEV": "/scania/40R-BEV.jpg",
};

export default function IconicTrucks() {
  const { t } = useLanguage();
  const trucks = t.iconic.trucks;
  const [active, setActive] = useState(0);
  const tr = trucks[active];
  return (
    <section
      id="iconic"
      data-testid="iconic-section"
      className="bg-[#F2F5F8] text-black py-24 md:py-32 border-t border-black"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow={t.iconic.eyebrow}
          title={t.iconic.title}
          subtitle={t.iconic.subtitle}
          testid="iconic"
        />

        <div className="mt-16 border-y border-black grid grid-cols-2 md:grid-cols-6">
          {trucks.map((x, i) => (
            <button
              key={x.code}
              onClick={() => setActive(i)}
              data-testid={`truck-tab-${x.code}`}
              className={`relative text-left p-5 md:p-6 border-r border-black last:border-r-0 transition-colors ${
                active === i ? "bg-black text-white" : "bg-transparent hover:bg-black/5"
              } ${i < 4 ? "border-b md:border-b-0 border-black" : ""}`}
            >
              <div className="text-[10px] tracking-[0.25em] uppercase font-semibold opacity-70">
                {x.year}
              </div>
              <div className="mt-2 font-display font-black uppercase tracking-tight text-lg md:text-xl">
                {x.code}
              </div>
              {active === i && (
                <motion.span
                  layoutId="truck-marker"
                  className="absolute left-0 top-0 w-1.5 h-full bg-[#587187]"
                />
              )}
            </button>
          ))}
        </div>

        <motion.div
          key={tr.code}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-12 gap-6 md:gap-12 mt-12"
        >
          <div className="col-span-12 md:col-span-7 img-zoom-wrap border border-black">
            <img
              src={images[tr.code]}
              alt={tr.name}
              className="img-zoom w-full h-[360px] md:h-[560px] object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-semibold text-[#3B4E5E]">
                <span className="inline-block w-6 h-px bg-[#3B4E5E]" />
                {tr.code} · {tr.year}
              </div>
              <h3 className="mt-5 font-display font-black uppercase tracking-tighter text-4xl md:text-5xl leading-[0.92]">
                {tr.name}
              </h3>
              <p className="mt-6 text-lg text-slate-700 leading-relaxed">{tr.desc}</p>
            </div>
            <div className="mt-10 border-t border-black pt-6 flex items-end justify-between">
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase font-semibold text-slate-500">
                  {t.iconic.spec}
                </p>
                <p className="mt-2 font-display text-xl md:text-2xl font-bold">{tr.spec}</p>
              </div>
              <div className="font-display font-black tabular text-5xl md:text-6xl text-[#587187] leading-none">
                0{active + 1}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
