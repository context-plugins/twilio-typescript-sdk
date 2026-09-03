import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
