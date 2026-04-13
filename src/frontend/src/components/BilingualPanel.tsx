import { cn } from "@/lib/utils";
import type { BodyPart } from "@/types/body-parts";
import { useEffect, useRef, useState } from "react";

interface BilingualPanelProps {
  bodyPart: BodyPart | undefined;
}

function LanguageCard({
  lang,
  name,
  description,
  isHindi = false,
}: {
  lang: string;
  name: string;
  description: string;
  isHindi?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative bg-card rounded-xl p-5 border border-border card-elevated",
        "border-l-4",
        isHindi ? "border-l-accent" : "border-l-primary",
      )}
      data-ocid={isHindi ? "bilingual-card-hindi" : "bilingual-card-english"}
    >
      {/* Language badge */}
      <span
        className={cn(
          "inline-block mb-3 text-xs font-display font-semibold px-2.5 py-0.5 rounded-full",
          isHindi
            ? "bg-accent/15 text-accent-foreground"
            : "bg-primary/12 text-primary",
        )}
      >
        {lang}
      </span>

      {/* Organ name heading */}
      <h2
        className={cn(
          "font-display font-bold leading-tight text-foreground mb-3",
          isHindi ? "text-2xl" : "text-xl",
        )}
        style={
          isHindi
            ? { fontFamily: "system-ui, sans-serif", fontSize: "1.35rem" }
            : {}
        }
      >
        {name}
      </h2>

      {/* Description text */}
      <p
        className={cn(
          "text-foreground/75 leading-relaxed",
          isHindi ? "text-[0.97rem]" : "text-sm",
        )}
        style={
          isHindi
            ? { fontFamily: "system-ui, sans-serif", lineHeight: "1.75" }
            : {}
        }
      >
        {description}
      </p>
    </div>
  );
}

export function BilingualPanel({ bodyPart }: BilingualPanelProps) {
  const [visible, setVisible] = useState(true);
  const prevIdRef = useRef<string | undefined>(undefined);

  // Trigger fade transition when body part changes
  useEffect(() => {
    if (!bodyPart) return;
    if (prevIdRef.current !== bodyPart.id) {
      setVisible(false);
      const timer = setTimeout(() => {
        setVisible(true);
        prevIdRef.current = bodyPart.id;
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [bodyPart]);

  if (!bodyPart) {
    return (
      <div
        className="bilingual-split px-4 pb-6"
        data-ocid="bilingual-panel-loading"
      >
        {[0, 1].map((i) => (
          <div
            key={i}
            className="bg-card rounded-xl p-5 border border-border animate-pulse"
          >
            <div className="h-4 w-16 bg-muted rounded-full mb-4" />
            <div className="h-6 w-32 bg-muted rounded mb-3" />
            <div className="space-y-2">
              <div className="h-3 bg-muted rounded" />
              <div className="h-3 bg-muted rounded w-5/6" />
              <div className="h-3 bg-muted rounded w-4/6" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bilingual-split px-4 pb-6 transition-opacity duration-200",
        visible ? "opacity-100" : "opacity-0",
      )}
      data-ocid="bilingual-panel"
    >
      {/* Hindi column */}
      <LanguageCard
        lang="🇮🇳 हिन्दी"
        name={bodyPart.nameHi}
        description={bodyPart.descriptionHi}
        isHindi
      />

      {/* English column */}
      <LanguageCard
        lang="🇬🇧 English"
        name={bodyPart.nameEn}
        description={bodyPart.descriptionEn}
        isHindi={false}
      />
    </div>
  );
}
