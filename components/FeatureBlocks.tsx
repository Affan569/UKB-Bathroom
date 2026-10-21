import Icon, { ICONS } from "./icon";

const FEATURES: { icon: keyof typeof ICONS; title: string; text: string }[] = [
  { icon: "shield", title: "Trusted & Reliable", text: "Highly rated by our customers" },
  { icon: "star", title: "Expert Designers", text: "Tailored to your style & space" },
  { icon: "tools", title: "Professional Installation", text: "By our skilled team" },
  { icon: "pin", title: "Local & Friendly", text: "Covering Southampton & beyond" },
];

export default function FeatureBlocks() {
  return (
    <ul className="grid flex-1 grid-cols-2 gap-y-6 border-t border-white/20 pt-6 lg:max-w-[860px] lg:grid-cols-4 lg:items-center lg:gap-y-0">
      {FEATURES.map(({ icon, title, text }, i) => (
        <li
          key={title}
          className={`flex flex-col gap-3 pr-4 ${i > 0 ? "lg:border-l lg:border-white/15 lg:pl-6" : ""}`}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0c2a52] text-[#2F9BF5] ring-1 ring-[#2F9BF5]/30">
            <Icon name={icon} className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="mt-0.5 text-xs text-white/80">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}