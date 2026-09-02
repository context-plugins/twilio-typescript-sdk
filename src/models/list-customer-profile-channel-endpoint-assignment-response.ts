import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignmentSchema,
  type TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment,
} from "./trusthub-v1-customer-profile-customer-profile-channel-endpoint-assignment.js";

export type ListCustomerProfileChannelEndpointAssignmentResponse = {
  results?: TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment[];
  meta?: Meta;
};

export const listCustomerProfileChannelEndpointAssignmentResponseSchema: Schema<ListCustomerProfileChannelEndpointAssignmentResponse> =
  s.object<ListCustomerProfileChannelEndpointAssignmentResponse>({
    results: s.optional(
      s.array(s.lazy(() => trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignmentSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
