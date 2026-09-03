import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  brandVettingEnumVettingProviderSchema,
  type BrandVettingEnumVettingProvider,
} from "./brand-vetting-enum-vetting-provider.js";

export type MessagingV1BrandRegistrationsBrandVetting = {
  accountSid?: string | null;
  brandSid?: string | null;
  brandVettingSid?: string | null;
  dateUpdated?: Date | null;
  dateCreated?: Date | null;
  vettingId?: string | null;
  vettingClass?: string | null;
  vettingStatus?: string | null;
  vettingProvider?: BrandVettingEnumVettingProvider;
  url?: string | null;
};

export const messagingV1BrandRegistrationsBrandVettingSchema: Schema<MessagingV1BrandRegistrationsBrandVetting> =
  s.object<MessagingV1BrandRegistrationsBrandVetting>({
    accountSid: s.optionalNullable(s.string()),
    brandSid: s.optionalNullable(s.string()),
    brandVettingSid: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    dateCreated: s.optionalNullable(s.dateTime()),
    vettingId: s.optionalNullable(s.string()),
    vettingClass: s.optionalNullable(s.string()),
    vettingStatus: s.optionalNullable(s.string()),
    vettingProvider: s.optional(s.lazy(() => brandVettingEnumVettingProviderSchema)),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      brandSid: "brand_sid",
      brandVettingSid: "brand_vetting_sid",
      dateUpdated: "date_updated",
      dateCreated: "date_created",
      vettingId: "vetting_id",
      vettingClass: "vetting_class",
      vettingStatus: "vetting_status",
      vettingProvider: "vetting_provider",
    },
  });
