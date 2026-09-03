import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagingV1BrandRegistrationsBrandVettingSchema,
  type MessagingV1BrandRegistrationsBrandVetting,
} from "./messaging-v1-brand-registrations-brand-vetting.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListBrandVettingResponse = {
  data?: MessagingV1BrandRegistrationsBrandVetting[];
  meta?: Meta;
};

export const listBrandVettingResponseSchema: Schema<ListBrandVettingResponse> =
  s.object<ListBrandVettingResponse>({
    data: s.optional(s.array(s.lazy(() => messagingV1BrandRegistrationsBrandVettingSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
