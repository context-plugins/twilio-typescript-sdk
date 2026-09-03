import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RateLimitRequest = {
  limit?: number;
  ttl?: number;
};

export const rateLimitRequestSchema: Schema<RateLimitRequest> = s.object<RateLimitRequest>({
  limit: s.optional(s.number()),
  ttl: s.optional(s.number()),
});
