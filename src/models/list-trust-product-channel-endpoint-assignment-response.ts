import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  trusthubV1TrustProductTrustProductChannelEndpointAssignmentSchema,
  type TrusthubV1TrustProductTrustProductChannelEndpointAssignment,
} from "./trusthub-v1-trust-product-trust-product-channel-endpoint-assignment.js";

export type ListTrustProductChannelEndpointAssignmentResponse = {
  results?: TrusthubV1TrustProductTrustProductChannelEndpointAssignment[];
  meta?: Meta;
};

export const listTrustProductChannelEndpointAssignmentResponseSchema: Schema<ListTrustProductChannelEndpointAssignmentResponse> =
  s.object<ListTrustProductChannelEndpointAssignmentResponse>({
    results: s.optional(
      s.array(s.lazy(() => trusthubV1TrustProductTrustProductChannelEndpointAssignmentSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
