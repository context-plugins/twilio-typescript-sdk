import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3InsightsDomainsConversationsMetadata429Error1 = {
  code: number;
  message: string;
  httpStatusCode: number;
  userError?: boolean;
  params?: Record<string, string>;
};

export const v3InsightsDomainsConversationsMetadata429Error1Schema: Schema<V3InsightsDomainsConversationsMetadata429Error1> =
  s.object<V3InsightsDomainsConversationsMetadata429Error1>({
    code: s.number(),
    message: s.string(),
    httpStatusCode: s.number(),
    userError: s.optional(s.boolean()),
    params: s.optional(s.record(s.string(), s.string())),
  });
