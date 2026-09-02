import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  trusthubV1CustomerProfileSchema,
  type TrusthubV1CustomerProfile,
} from "./trusthub-v1-customer-profile.js";

export type ListCustomerProfileResponse = {
  results?: TrusthubV1CustomerProfile[];
  meta?: Meta;
};

export const listCustomerProfileResponseSchema: Schema<ListCustomerProfileResponse> =
  s.object<ListCustomerProfileResponse>({
    results: s.optional(s.array(s.lazy(() => trusthubV1CustomerProfileSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
