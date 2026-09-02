import { s, type Schema } from "../core/index.js";

export type V3InsightsDomainsConversationsQuery429Error = {
  code: number;
  message: string;
  httpStatusCode: number;
  userError?: boolean;
  params?: Record<string, string>;
};

export const v3InsightsDomainsConversationsQuery429ErrorSchema: Schema<V3InsightsDomainsConversationsQuery429Error> =
  s.object<V3InsightsDomainsConversationsQuery429Error>({
    code: s.number(),
    message: s.string(),
    httpStatusCode: s.number(),
    userError: s.optional(s.boolean()),
    params: s.optional(s.record(s.string(), s.string())),
  });
