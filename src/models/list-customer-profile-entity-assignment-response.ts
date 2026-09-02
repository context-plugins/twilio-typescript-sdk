import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  trusthubV1CustomerProfileCustomerProfileEntityAssignmentSchema,
  type TrusthubV1CustomerProfileCustomerProfileEntityAssignment,
} from "./trusthub-v1-customer-profile-customer-profile-entity-assignment.js";

export type ListCustomerProfileEntityAssignmentResponse = {
  results?: TrusthubV1CustomerProfileCustomerProfileEntityAssignment[];
  meta?: Meta;
};

export const listCustomerProfileEntityAssignmentResponseSchema: Schema<ListCustomerProfileEntityAssignmentResponse> =
  s.object<ListCustomerProfileEntityAssignmentResponse>({
    results: s.optional(
      s.array(s.lazy(() => trusthubV1CustomerProfileCustomerProfileEntityAssignmentSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
