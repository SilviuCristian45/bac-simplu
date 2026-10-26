import type { MDXComponents } from "mdx/types";
import { lessonMdxElements } from "@/components/lesson/mdx-elements";

export function useMDXComponents(): MDXComponents {
  return lessonMdxElements;
}
