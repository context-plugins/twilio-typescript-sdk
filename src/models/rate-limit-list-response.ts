import { s, type Schema } from "../core/index.js";
import { rateLimitResponseSchema, type RateLimitResponse } from "./rate-limit-response.js";

export type RateLimitListResponse = {
  rateLimits?: RateLimitResponse[];
};

export const rateLimitListResponseSchema: Schema<RateLimitListResponse> = s.object<RateLimitListResponse>({
  rateLimits: s.optional(s.array(s.lazy(() => rateLimitResponseSchema))),
  _keysMap: {
    rateLimits: "rate_limits",
  },
});
