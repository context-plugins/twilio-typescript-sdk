import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Rate limit response schema */
export type RateLimitResponse = {
  /** Limit of requests for the bucket */
  field?: string;
  /** Limit of requests for the bucket */
  limit?: number;
  /** Name of the bucket */
  bucket?: string;
  /** Owner of the rule */
  owner?: string;
  /** Time to live of the rule */
  ttl?: number;
};

export const rateLimitResponseSchema: Schema<RateLimitResponse> = s.object<RateLimitResponse>({
  field: s.optional(s.string()),
  limit: s.optional(s.int()),
  bucket: s.optional(s.string()),
  owner: s.optional(s.string()),
  ttl: s.optional(s.int()),
});
