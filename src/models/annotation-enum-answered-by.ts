import { s, type EnumSchema } from "../core/index.js";

export const AnnotationEnumAnsweredBy = {
  UnknownAnsweredBy: "unknown_answered_by",
  Human: "human",
  Machine: "machine",
} as const;
export type AnnotationEnumAnsweredBy =
  | (typeof AnnotationEnumAnsweredBy)[keyof typeof AnnotationEnumAnsweredBy]
  | (string & {});

export const annotationEnumAnsweredBySchema: EnumSchema<AnnotationEnumAnsweredBy> =
  s.enumOf<AnnotationEnumAnsweredBy>(AnnotationEnumAnsweredBy);
