import { useLanguage } from "@/i18n/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();
  return (
    <section
      data-testid="stats-strip"
      className="bg-[#587187] text-black border-y border-black relative"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4">
        {t.stats.map((r, i) => (
          <div
            key={i}
            data-testid={`stats-cell-${i}`}
            className={`py-10 md:py-14 ${
              i < t.stats.length - 1 ? "md:border-r border-black" : ""
            } ${i < 2 ? "border-b md:border-b-0 border-black" : ""} ${
              i % 2 === 0 ? "border-r md:border-r" : ""
            } px-2 md:px-6`}
          >
            <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-semibold">
              {r.k}
            </div>
            <div className="mt-4 font-display font-black text-4xl md:text-6xl tabular leading-none tracking-tighter">
              {r.v}
            </div>
            <div className="mt-3 text-xs md:text-sm text-black/70">{r.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
