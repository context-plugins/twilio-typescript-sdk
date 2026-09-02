import { s, type Schema } from "../core/index.js";

export type InsightsV1Call = {
  sid?: string | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const insightsV1CallSchema: Schema<InsightsV1Call> = s.object<InsightsV1Call>({
  sid: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
});
