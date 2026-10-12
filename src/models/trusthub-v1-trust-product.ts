import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trustProductEnumStatusSchema, type TrustProductEnumStatus } from "./trust-product-enum-status.js";

export type TrusthubV1TrustProduct = {
  /** The unique string that we created to identify the Trust Product resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Trust
   * Product resource.
   */
  accountSid?: string | null;
  /** The unique string of the policy that is associated with the Trust Product resource. */
  policySid?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /** The verification status of the Trust Product resource. */
  status?: TrustProductEnumStatus;
  /**
   * The date and time in GMT in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format until
   * which the resource will be valid.
   */
  validUntil?: Date | null;
  /** The email address that will receive updates when the Trust Product resource changes status. */
  email?: string | null;
  /** The URL we call to inform your application of status changes. */
  statusCallback?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /** The absolute URL of the Trust Product resource. */
  url?: string | null;
  /** The URLs of the Assigned Items of the Trust Product resource. */
  links?: Record<string, unknown> | null;
  /** The error codes associated with the rejection of the Trust Product. */
  errors?: Record<string, unknown>[] | null;
};

export const trusthubV1TrustProductSchema: Schema<TrusthubV1TrustProduct> = s.object<TrusthubV1TrustProduct>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  policySid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => trustProductEnumStatusSchema)),
  validUntil: s.optionalNullable(s.dateTime()),
  email: s.optionalNullable(s.string()),
  statusCallback: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  errors: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
  _keysMap: {
    accountSid: "account_sid",
    policySid: "policy_sid",
    friendlyName: "friendly_name",
    validUntil: "valid_until",
    statusCallback: "status_callback",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
