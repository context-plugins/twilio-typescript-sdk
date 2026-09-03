import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrusthubV1TrustProductTrustProductEntityAssignment = {
  sid?: string | null;
  trustProductSid?: string | null;
  accountSid?: string | null;
  objectSid?: string | null;
  dateCreated?: Date | null;
  url?: string | null;
};

export const trusthubV1TrustProductTrustProductEntityAssignmentSchema: Schema<TrusthubV1TrustProductTrustProductEntityAssignment> =
  s.object<TrusthubV1TrustProductTrustProductEntityAssignment>({
    sid: s.optionalNullable(s.string()),
    trustProductSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    objectSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      trustProductSid: "trust_product_sid",
      accountSid: "account_sid",
      objectSid: "object_sid",
      dateCreated: "date_created",
    },
  });
