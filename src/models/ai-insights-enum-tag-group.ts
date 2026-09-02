import { s, type EnumSchema } from "../core/index.js";

export const AiInsightsEnumTagGroup = {
  Topics: "topics",
} as const;
export type AiInsightsEnumTagGroup =
  | (typeof AiInsightsEnumTagGroup)[keyof typeof AiInsightsEnumTagGroup]
  | (string & {});

export const aiInsightsEnumTagGroupSchema: EnumSchema<AiInsightsEnumTagGroup> =
  s.enumOf<AiInsightsEnumTagGroup>(AiInsightsEnumTagGroup);
