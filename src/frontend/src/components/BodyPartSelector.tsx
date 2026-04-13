import { cn } from "@/lib/utils";
import type { BodyPart } from "@/types/body-parts";

interface BodyPartSelectorProps {
  bodyParts: BodyPart[];
  selectedId: string;
  onChange: (id: string) => void;
}

const ORGAN_ICONS: Record<string, string> = {
  brain: "🧠",
  heart: "🫀",
  lungs: "🫁",
  stomach: "🫙",
  liver: "🫀",
  kidneys: "🫘",
};

const ORGAN_ICON_FALLBACK = "🔬";

export function BodyPartSelector({
  bodyParts,
  selectedId,
  onChange,
}: BodyPartSelectorProps) {
  return (
    <div
      className="w-full flex justify-center px-4 py-3"
      data-ocid="body-part-selector"
    >
      <div
        className="flex gap-2 overflow-x-auto pb-1 max-w-full scrollbar-hide"
        role="tablist"
        aria-label="Select body part"
      >
        {bodyParts.map((part) => {
          const isActive = part.id === selectedId;
          const icon = ORGAN_ICONS[part.id] ?? ORGAN_ICON_FALLBACK;
          return (
            <button
              type="button"
              key={part.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(part.id)}
              className={cn(
                "flex-shrink-0 flex flex-col items-center gap-1 px-4 py-2.5 rounded-xl border transition-smooth cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isActive
                  ? "bg-primary border-primary text-primary-foreground shadow-md scale-[1.03]"
                  : "bg-card border-border text-foreground hover:border-primary/50 hover:bg-primary/8 hover:scale-[1.02]",
              )}
              data-ocid={`selector-tab-${part.id}`}
            >
              <span className="text-xl leading-none" aria-hidden="true">
                {icon}
              </span>
              <span
                className={cn(
                  "text-xs font-display font-semibold leading-none tracking-tight",
                  isActive ? "text-primary-foreground" : "text-foreground",
                )}
              >
                {part.nameEn}
              </span>
              <span
                className={cn(
                  "text-xs font-body leading-none",
                  isActive
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground",
                )}
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                {part.nameHi}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
