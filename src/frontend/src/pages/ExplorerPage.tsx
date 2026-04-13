import { BilingualPanel } from "@/components/BilingualPanel";
import { BodyPartSelector } from "@/components/BodyPartSelector";
import { BodyViewer3D } from "@/components/BodyViewer3D";
import { Skeleton } from "@/components/ui/skeleton";
import { useBodyParts } from "@/hooks/use-body-parts";
import { useMemo, useState } from "react";

export function ExplorerPage() {
  const { data: bodyParts, isLoading } = useBodyParts();
  const [selectedId, setSelectedId] = useState("brain");

  const selectedBodyPart = useMemo(
    () => bodyParts?.find((p) => p.id === selectedId),
    [bodyParts, selectedId],
  );

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col" data-ocid="explorer-loading">
        <div className="flex-1 min-h-[50vh] mx-4 mt-4 rounded-2xl overflow-hidden">
          <Skeleton className="w-full h-full min-h-[50vh] rounded-2xl" />
        </div>
        <div className="flex gap-2 justify-center px-4 py-3">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="w-20 h-16 rounded-xl" />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-6">
          <Skeleton className="h-40 rounded-xl" />
          <Skeleton className="h-40 rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex-1 flex flex-col bg-background"
      data-ocid="explorer-page"
    >
      {/* 3D Viewer Section */}
      <section
        className="relative px-4 pt-4"
        style={{ minHeight: "clamp(280px, 50vh, 520px)" }}
        data-ocid="viewer-section"
        aria-label="3D body part viewer"
      >
        <div
          className="w-full h-full"
          style={{ height: "clamp(280px, 50vh, 520px)" }}
        >
          <BodyViewer3D modelType={selectedBodyPart?.modelType ?? "brain"} />
        </div>

        {/* Current organ badge */}
        {selectedBodyPart && (
          <div className="absolute top-7 left-7 glass px-3 py-1.5 rounded-xl pointer-events-none">
            <span className="text-sm font-display font-semibold text-foreground leading-none block">
              {selectedBodyPart.nameEn}
            </span>
            <span
              className="text-xs text-muted-foreground leading-none block mt-0.5"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              {selectedBodyPart.nameHi}
            </span>
          </div>
        )}
      </section>

      {/* Body Part Selector */}
      <section
        className="bg-background border-t border-border/50"
        data-ocid="selector-section"
        aria-label="Select body part"
      >
        <BodyPartSelector
          bodyParts={bodyParts ?? []}
          selectedId={selectedId}
          onChange={setSelectedId}
        />
      </section>

      {/* Bilingual Description Panel */}
      <section
        className="bg-muted/30 border-t border-border/50 flex-1"
        data-ocid="description-section"
        aria-label="Body part description"
      >
        <div className="max-w-5xl mx-auto pt-5">
          {/* Section label */}
          <div className="px-4 mb-4 flex items-center gap-2">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-widest px-2">
              विवरण · Description
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <BilingualPanel bodyPart={selectedBodyPart} />
        </div>
      </section>
    </div>
  );
}
