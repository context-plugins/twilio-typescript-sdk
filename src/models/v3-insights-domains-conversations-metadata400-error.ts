import { s, type Schema } from "../core/index.js";

export type V3InsightsDomainsConversationsMetadata400Error = {
  code: number;
  message: string;
  httpStatusCode: number;
  userError?: boolean;
  params?: Record<string, string>;
};

export const v3InsightsDomainsConversationsMetadata400ErrorSchema: Schema<V3InsightsDomainsConversationsMetadata400Error> =
  s.object<V3InsightsDomainsConversationsMetadata400Error>({
    code: s.number(),
    message: s.string(),
    httpStatusCode: s.number(),
    userError: s.optional(s.boolean()),
    params: s.optional(s.record(s.string(), s.string())),
  });
