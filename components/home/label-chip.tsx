import { LABEL_CHIP } from "@/components/lesson/label-styles";
import type { SpecimenKind } from "@/lib/site/specimen";

/** The chip the lessons use to mark what kind of statement follows (text, interpretation, requirement…). */
export function LabelChip({ kind, children }: { kind: SpecimenKind; children: string }) {
  return (
    <span
      className={`inline-block rounded-md px-1.5 py-0.5 text-[0.8rem] leading-snug font-semibold ${LABEL_CHIP[kind]}`}
    >
      {children}
    </span>
  );
}
