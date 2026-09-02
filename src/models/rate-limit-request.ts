import { s, type Schema } from "../core/index.js";

export type RateLimitRequest = {
  limit?: number;
  ttl?: number;
};

export const rateLimitRequestSchema: Schema<RateLimitRequest> = s.object<RateLimitRequest>({
  limit: s.optional(s.number()),
  ttl: s.optional(s.number()),
});
