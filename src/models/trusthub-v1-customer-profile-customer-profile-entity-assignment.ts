import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrusthubV1CustomerProfileCustomerProfileEntityAssignment = {
  /** The unique string that we created to identify the Item Assignment resource. */
  sid?: string | null;
  /** The unique string that we created to identify the CustomerProfile resource. */
  customerProfileSid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Item
   * Assignment resource.
   */
  accountSid?: string | null;
  /** The SID of an object bag that holds information of the different items. */
  objectSid?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /** The absolute URL of the Identity resource. */
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
