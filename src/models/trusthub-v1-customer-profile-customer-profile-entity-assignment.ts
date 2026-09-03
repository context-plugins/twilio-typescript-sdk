import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrusthubV1CustomerProfileCustomerProfileEntityAssignment = {
  sid?: string | null;
  customerProfileSid?: string | null;
  accountSid?: string | null;
  objectSid?: string | null;
  dateCreated?: Date | null;
  url?: string | null;
};

export const trusthubV1CustomerProfileCustomerProfileEntityAssignmentSchema: Schema<TrusthubV1CustomerProfileCustomerProfileEntityAssignment> =
  s.object<TrusthubV1CustomerProfileCustomerProfileEntityAssignment>({
    sid: s.optionalNullable(s.string()),
    customerProfileSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    objectSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      customerProfileSid: "customer_profile_sid",
      accountSid: "account_sid",
      objectSid: "object_sid",
      dateCreated: "date_created",
    },
  });
