import { motion } from "framer-motion";
import { SectionHeader } from "./History";

const roadmap = [
  {
    year: "2026",
    title: "MCS megawatt charging network",
    text: "Public megawatt charging corridors launch across EU. Scania co-develops with energy partners — fleet contracts include destination charging.",
    pct: "20%",
    pctLabel: "BEV share of new Scania sales",
  },
  {
    year: "2027",
    title: "Hub-to-hub autonomy (SAE L4)",
    text: "Autonomous heavy trucks operate on dedicated fenced motorway hubs in Sweden and Germany. Commercial pilots begin with major shippers.",
    pct: "1,200 km",
    pctLabel: "BEV daily range with mid-route fast charge",
  },
  {
    year: "2028",
    title: "Hydrogen fuel-cell trials",
    text: "Limited-series H2 fuel-cell heavy trucks join the lineup for ultra-heavy and remote operations where BEV isn't optimal — Sweden, Norway, Australia.",
    pct: "100%",
    pctLabel: "Fossil-free production at Södertälje",
  },
  {
    year: "2029",
    title: "Modular battery swap (regional)",
    text: "Pilot of modular swap battery packs for short-haul fleets. Less downtime, smaller batteries, lower total cost of ownership.",
    pct: "40%",
    pctLabel: "Of fleet electrified across Europe",
  },
  {
    year: "2030",
    title: "Half of Scania's new trucks are BEV.",
    text: "Scania's pledge to the Science Based Targets initiative: 50 percent electric of new vehicle sales by 2030, with full lifecycle CO₂ down 20% from 2015.",
    pct: "−20%",
    pctLabel: "Lifecycle CO₂ vs 2015 baseline",
  },
];

export default function FutureVision() {
  return (
    <section
      id="future"
      data-testid="future-section"
      className="bg-[#3B4E5E] text-white py-24 md:py-32 border-t border-black"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="05 — 2026 → 2030"
          title="The next five years."
          subtitle="A working roadmap. Public commitments to TRATON, the European Union and the Science Based Targets initiative — translated into trucks."
          testid="future"
        />

        <div className="mt-20 space-y-px bg-white/30">
          {roadmap.map((r, i) => (
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
