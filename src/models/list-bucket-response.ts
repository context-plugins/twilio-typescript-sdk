import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  verifyV2ServiceRateLimitBucketSchema,
  type VerifyV2ServiceRateLimitBucket,
} from "./verify-v2-service-rate-limit-bucket.js";

export type ListBucketResponse = {
  buckets?: VerifyV2ServiceRateLimitBucket[];
  meta?: Meta;
};

export const listBucketResponseSchema: Schema<ListBucketResponse> = s.object<ListBucketResponse>({
  buckets: s.optional(s.array(s.lazy(() => verifyV2ServiceRateLimitBucketSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
