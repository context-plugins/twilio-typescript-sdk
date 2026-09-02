import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  verifyV2ServiceRateLimitSchema,
  type VerifyV2ServiceRateLimit,
} from "./verify-v2-service-rate-limit.js";

export type ListRateLimitResponse = {
  rateLimits?: VerifyV2ServiceRateLimit[];
  meta?: Meta;
};

export const listRateLimitResponseSchema: Schema<ListRateLimitResponse> = s.object<ListRateLimitResponse>({
  rateLimits: s.optional(s.array(s.lazy(() => verifyV2ServiceRateLimitSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
  _keysMap: {
    rateLimits: "rate_limits",
  },
});
