import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  brandVettingEnumVettingProviderSchema,
  type BrandVettingEnumVettingProvider,
} from "./brand-vetting-enum-vetting-provider.js";

export type MessagingV1BrandRegistrationsBrandVetting = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the vetting
   * record.
   */
  accountSid?: string | null;
  /** The unique string to identify Brand Registration. */
  brandSid?: string | null;
  /** The Twilio SID of the third-party vetting record. */
  brandVettingSid?: string | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /** The unique identifier of the vetting from the third-party provider. */
  vettingId?: string | null;
  /**
   * The type of vetting that has been conducted. One of “STANDARD” (Aegis) or “POLITICAL” (Campaign
   * Verify).
   */
  vettingClass?: string | null;
  /** The status of the import vetting attempt. One of “PENDING,” “SUCCESS,” or “FAILED”. */
  vettingStatus?: string | null;
  /**
   * The third-party provider that has conducted the vetting. One of “CampaignVerify” (Campaign
   * Verify tokens) or “AEGIS” (Secondary Vetting).
   */
  vettingProvider?: BrandVettingEnumVettingProvider;
  /** The absolute URL of the Brand Vetting resource. */
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
