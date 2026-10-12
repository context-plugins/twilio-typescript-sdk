import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Rate limit request schema */
export type RateLimitRequest = {
  /** Limit of requests for the bucket */
  limit?: number;
  /** Time to live of the rule */
  ttl?: number;
};

export const rateLimitRequestSchema: Schema<RateLimitRequest> = s.object<RateLimitRequest>({
  limit: s.optional(s.int()),
  ttl: s.optional(s.int()),
});
