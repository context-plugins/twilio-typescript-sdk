import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3InsightsDomainsConversationsQuery429Error1 = {
  /** Twilio-specific error code */
  code: number;
  /** A human readable error message */
  message: string;
  /** HTTP response status code */
  httpStatusCode: number;
  /** Whether the error is a user error (true) or a system error (false) */
  userError?: boolean;
  /**
   * A map of parameters related to the error, for example, a `params.twilioErrorCodeUrl` might hold
   * a URL or link to additional information
   */
  params?: Record<string, string>;
};

export const v3InsightsDomainsConversationsQuery429Error1Schema: Schema<V3InsightsDomainsConversationsQuery429Error1> =
  s.object<V3InsightsDomainsConversationsQuery429Error1>({
    code: s.int(),
    message: s.string(),
    httpStatusCode: s.int(),
    userError: s.optional(s.boolean()),
    params: s.optional(s.record(s.string(), s.string())),
  });
