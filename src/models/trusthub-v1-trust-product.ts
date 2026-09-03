import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trustProductEnumStatusSchema, type TrustProductEnumStatus } from "./trust-product-enum-status.js";

export type TrusthubV1TrustProduct = {
  sid?: string | null;
  accountSid?: string | null;
  policySid?: string | null;
  friendlyName?: string | null;
  status?: TrustProductEnumStatus;
  validUntil?: Date | null;
  email?: string | null;
  statusCallback?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
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
