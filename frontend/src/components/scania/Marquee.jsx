const items = [
  "V8 POWER",
  "SÖDERTÄLJE",
  "GRIFFIN MARK",
  "R-SERIES",
  "BATTERY-ELECTRIC",
  "L-SERIES",
  "S-SERIES",
  "SCANIA-VABIS",
  "HEAVY HAULAGE",
  "EST. 1891",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div
      data-testid="marquee"
      className="bg-black text-white border-y border-black overflow-hidden"
    >
      <div className="flex marquee-track whitespace-nowrap py-5">
        {loop.map((t, i) => (
          <span
            key={i}
            className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight px-8 flex items-center gap-8"
          >
            {t}
            <span className="inline-block w-2 h-2 bg-[#587187]" />
          </span>
        ))}
      </div>
    </div>
  );
}
