import { s, type Schema } from "../core/index.js";

export type RateLimitResponse = {
  field?: string;
  limit?: number;
  bucket?: string;
  owner?: string;
  ttl?: number;
};

export const rateLimitResponseSchema: Schema<RateLimitResponse> = s.object<RateLimitResponse>({
  field: s.optional(s.string()),
  limit: s.optional(s.number()),
  bucket: s.optional(s.string()),
  owner: s.optional(s.string()),
  ttl: s.optional(s.number()),
});
