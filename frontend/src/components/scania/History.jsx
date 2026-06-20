import { motion } from "framer-motion";

const milestones = [
  {
    year: "1891",
    title: "Vabis is founded in Södertälje",
    text: "Vagnfabriks-Aktiebolaget i Södertelge begins building rail wagons in the Swedish town that will become heavy-truck capital of Europe.",
  },
  {
    year: "1900",
    title: "Scania is born in Malmö",
    text: "Maskinfabriks-Aktiebolaget Scania starts producing bicycles, then cars and trucks, named after the southern Scania province.",
  },
  {
    year: "1911",
    title: "The merger — Scania-Vabis",
    text: "The two companies merge to form Scania-Vabis, concentrating heavy commercial vehicle production in Södertälje.",
  },
  {
    year: "1949",
    title: "Direct-injection diesel",
    text: "Scania-Vabis introduces the legendary L51 with direct-injection diesel — a leap in torque, reliability and fuel economy for heavy work.",
  },
  {
    year: "1969",
    title: "The V8 era begins",
    text: "Scania unleashes the LB140 V8, 350 hp — the most powerful production truck in the world. The V8 becomes Scania's badge of honour.",
  },
  {
    year: "1980",
    title: "GPRT generation",
    text: "The modular G, P, R, T cabs introduce the world's first truly modular truck system — the engineering DNA still used today.",
  },
  {
    year: "1995",
    title: "Independent again",
    text: "Scania separates from Saab-Scania and listed on the Stockholm Stock Exchange. The Griffin returns as the brand mark.",
  },
  {
    year: "2016",
    title: "New Truck Generation",
    text: "After a decade of development, the NTG R and S series launches — winning International Truck of the Year 2017.",
  },
  {
    year: "2020",
    title: "First battery-electric trucks",
    text: "Scania starts serial production of plug-in hybrid and full electric heavy trucks for regional distribution.",
  },
  {
    year: "2024",
    title: "Regional Long-haul BEV",
    text: "Scania introduces the 40R battery-electric tractor for long-haul, capable of 4.5 hours driving + 45 min fast-charge regulation.",
  },
];

export default function History() {
  return (
    <section
      id="history"
      data-testid="history-section"
      className="relative bg-[#F2F5F8] text-black py-24 md:py-32 border-t border-black"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="01 — Heritage"
          title="A century and a third of heavy engineering."
          subtitle="From Södertälje railcars to autonomous freight — every era of Scania shaped modern road transport."
          testid="history"
        />

        <div className="mt-20 grid grid-cols-12 gap-x-6 md:gap-x-12">
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <div className="img-zoom-wrap border border-black sticky top-28">
              <img
                src="https://images.pexels.com/photos/33256298/pexels-photo-33256298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=940"
                alt="Vintage trucking heritage"
                className="img-zoom w-full h-[520px] object-cover grayscale"
              />
              <div className="bg-black text-white px-5 py-4 text-[10px] tracking-[0.25em] uppercase flex justify-between">
                <span>Plate #SCN-1891</span>
                <span>Södertälje Archive</span>
              </div>
            </div>
          </div>

          <ol className="col-span-12 md:col-span-7 lg:col-span-8 mt-16 md:mt-0 relative">
            <div className="absolute left-[88px] md:left-[100px] top-2 bottom-2 w-px bg-black" aria-hidden />
            {milestones.map((m, i) => (
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
