// Script file (no top-level import/export) so it augments the `*.mdx`
// declaration from @types/mdx. The value is validated at runtime by
// parseLessonMeta, hence `unknown`.
declare module "*.mdx" {
  export const lesson: unknown;
}
