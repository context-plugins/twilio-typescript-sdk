import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagingV1BrandRegistrationsSchema,
  type MessagingV1BrandRegistrations,
} from "./messaging-v1-brand-registrations.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListBrandRegistrationsResponse = {
  data?: MessagingV1BrandRegistrations[];
  meta?: Meta;
};

export const listBrandRegistrationsResponseSchema: Schema<ListBrandRegistrationsResponse> =
  s.object<ListBrandRegistrationsResponse>({
    data: s.optional(s.array(s.lazy(() => messagingV1BrandRegistrationsSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
