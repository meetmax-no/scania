import { useLanguage } from "@/i18n/LanguageContext";

export default function Marquee() {
  const { t } = useLanguage();
  const loop = [...t.marquee, ...t.marquee];
  return (
    <div
      data-testid="marquee"
      className="bg-black text-white border-y border-black overflow-hidden"
    >
      <div className="flex marquee-track whitespace-nowrap py-5">
        {loop.map((tag, i) => (
          <span
            key={i}
            className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight px-8 flex items-center gap-8"
          >
            {tag}
            <span className="inline-block w-2 h-2 bg-[#587187]" />
          </span>
        ))}
      </div>
    </div>
  );
}
