import { motion } from "framer-motion";
import { Battery, Plug, Factory, Gauge } from "lucide-react";
import { SectionHeaderDark } from "./Owners";

const evCards = [
  {
    icon: Battery,
    title: "Battery in-house",
    body: "Cell assembly at Södertälje, integrated battery pack production in Sweden. Vertical integration drives quality, traceability and weight.",
  },
  {
    icon: Plug,
    title: "Megawatt charging ready",
    body: "40R BEV is engineered for MCS megawatt charging — 45-min top-up matched to the EU 4.5h driver-break regulation.",
  },
  {
    icon: Factory,
    title: "Södertälje rebuild",
    body: "The historic main plant is being rebuilt for mixed combustion + BEV serial production — without losing a single legacy assembly skill.",
  },
  {
    icon: Gauge,
    title: "Real range",
    body: "Up to 550 km on a single charge for regional haul, 350+ km for heavy long-haul fully loaded. Validated in Nordic winter conditions.",
  },
];

export default function EVProduction() {
  return (
    <section
      id="ev"
      data-testid="ev-section"
      className="relative bg-[#0B0E12] text-white py-24 md:py-32 border-t border-black overflow-hidden"
    >
      {/* faint background */}
      <div className="absolute inset-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1551471698-c7787ff6b7ca"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E12] via-[#0B0E12]/80 to-[#0B0E12]" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionHeaderDark
          eyebrow="04 — Electric Production"
          title="The diesel Griffin learns to fly silent."
          subtitle="Scania is the first European heavy-truck maker building BEVs and combustion trucks on the same line. The industrial transition starts in Södertälje."
          testid="ev"
        />

        <div className="mt-20 grid grid-cols-12 gap-6">
          {/* Big BEV figure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-12 lg:col-span-7 border border-white/30"
          >
            <div className="img-zoom-wrap">
              <img
                src="/scania/40R-BEV.jpg"
                alt="Scania electric truck"
                className="img-zoom w-full h-[400px] md:h-[520px] object-cover"
              />
            </div>
            <div className="px-6 md:px-10 py-8 bg-[#587187] text-black flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase font-semibold">
                  Flagship · 2024
                </p>
                <h3 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tighter mt-2 leading-none">
                  Scania 40R BEV
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <Mini big="624" unit="kWh" label="Useable" />
                <Mini big="550" unit="km" label="Range" />
                <Mini big="45" unit="min" label="MCS charge" />
              </div>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/20 border border-white/20">
            {evCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  data-testid={`ev-card-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-[#0B0E12] p-7 md:p-9 flex flex-col gap-4 min-h-[230px]"
                >
                  <Icon size={28} className="text-[#587187]" strokeWidth={1.4} />
                  <h4 className="font-display font-bold text-xl uppercase tracking-tight">
                    {c.title}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed">{c.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Mini({ big, unit, label }) {
  return (
    <div>
      <div className="font-display font-black tabular leading-none text-3xl md:text-4xl">
        {big}
        <span className="text-base ml-1 font-medium">{unit}</span>
      </div>
      <div className="text-[10px] tracking-[0.25em] uppercase mt-2 text-black/70">
        {label}
      </div>
    </div>
  );
}
