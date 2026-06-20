import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./History";

const trucks = [
  {
    code: "L51",
    year: "1949",
    name: "L51 / L71 — Royal",
    spec: "Direct-injection diesel · 90–135 hp",
    desc: "The first modern Scania-Vabis. Direct-injection diesel set the standard for fuel-efficient heavy work — and powered post-war Scandinavian reconstruction.",
    img: "/scania/L51.jpg",
  },
  {
    code: "LB140",
    year: "1969",
    name: "LB140 V8",
    spec: "14.2 L V8 · 350 hp",
    desc: "The world's most powerful production truck of its era. The badge that started a 56-year obsession with the Scania V8.",
    img: "/scania/LB140.jpg",
  },
  {
    code: "R-SERIES",
    year: "1980 / 2004",
    name: "R-Series",
    spec: "Modular cab · up to 730 hp",
    desc: "The truck driver's truck. Multiple International Truck of the Year wins. The flagship long-haul cab that defined Scania for a generation.",
    img: "/scania/R-Series.jpg",
  },
  {
    code: "T-CAB",
    year: "1989",
    name: "T-Series Bonneted",
    spec: "Conventional cab · V8 optional",
    desc: "The last of the great European bonneted heavy trucks. A cult classic in heavy haulage, timber and special transport.",
    img: "/scania/T-Cab.jpg",
  },
  {
    code: "S-SERIES",
    year: "2016",
    name: "S-Series NTG",
    spec: "Flat-floor cab · V8 up to 770 hp",
    desc: "International Truck of the Year 2017. The New Truck Generation flagship — a decade of clean-sheet engineering for the modern long haul.",
    img: "/scania/S-Series.jpg",
  },
  {
    code: "40R BEV",
    year: "2024",
    name: "40R Battery Electric",
    spec: "624 kWh · 4.5h drive + 45 min charge",
    desc: "Long-haul without diesel. Megawatt charging-ready, the 40R is the first heavy electric Scania designed for regulated 4.5h driver shifts.",
    img: "/scania/40R-BEV.jpg",
  },
];

export default function IconicTrucks() {
  const [active, setActive] = useState(0);
  const t = trucks[active];
  return (
    <section
      id="iconic"
      data-testid="iconic-section"
      className="bg-[#F2F5F8] text-black py-24 md:py-32 border-t border-black"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="03 — The Icons"
          title="Six trucks that shaped the road."
          subtitle="Select a model. Every Scania badge in the line below carries a story — and the modular DNA that links it to the next."
          testid="iconic"
        />

        {/* Selector */}
        <div className="mt-16 border-y border-black grid grid-cols-2 md:grid-cols-6">
          {trucks.map((tr, i) => (
            <button
              key={tr.code}
              onClick={() => setActive(i)}
              data-testid={`truck-tab-${tr.code}`}
              className={`relative text-left p-5 md:p-6 border-r border-black last:border-r-0 transition-colors ${
                active === i ? "bg-black text-white" : "bg-transparent hover:bg-black/5"
              } ${i < 4 ? "border-b md:border-b-0 border-black" : ""}`}
            >
              <div className="text-[10px] tracking-[0.25em] uppercase font-semibold opacity-70">
                {tr.year}
              </div>
              <div className="mt-2 font-display font-black uppercase tracking-tight text-lg md:text-xl">
                {tr.code}
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

        {/* Active truck panel */}
        <motion.div
          key={t.code}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-12 gap-6 md:gap-12 mt-12"
        >
          <div className="col-span-12 md:col-span-7 img-zoom-wrap border border-black">
            <img
              src={t.img}
              alt={t.name}
              className="img-zoom w-full h-[360px] md:h-[560px] object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-semibold text-[#3B4E5E]">
                <span className="inline-block w-6 h-px bg-[#3B4E5E]" />
                {t.code} · {t.year}
              </div>
              <h3 className="mt-5 font-display font-black uppercase tracking-tighter text-4xl md:text-5xl leading-[0.92]">
                {t.name}
              </h3>
              <p className="mt-6 text-lg text-slate-700 leading-relaxed">{t.desc}</p>
            </div>
            <div className="mt-10 border-t border-black pt-6 flex items-end justify-between">
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase font-semibold text-slate-500">
                  Specification
                </p>
                <p className="mt-2 font-display text-xl md:text-2xl font-bold">{t.spec}</p>
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
