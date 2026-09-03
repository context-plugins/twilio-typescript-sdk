import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AiInsightsEnumTagGroup = {
  Topics: "topics",
} as const;
export type AiInsightsEnumTagGroup =
  | (typeof AiInsightsEnumTagGroup)[keyof typeof AiInsightsEnumTagGroup]
  | (string & {});

export const aiInsightsEnumTagGroupSchema: EnumSchema<AiInsightsEnumTagGroup> =
  s.enumOf<AiInsightsEnumTagGroup>(AiInsightsEnumTagGroup);
