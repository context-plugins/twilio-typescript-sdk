import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerProfileEnumStatusSchema,
  type CustomerProfileEnumStatus,
} from "./customer-profile-enum-status.js";

export type TrusthubV1CustomerProfile = {
  /** The unique string that we created to identify the Customer-Profile resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Customer-Profile resource.
   */
  accountSid?: string | null;
  /** The unique string of a policy that is associated to the Customer-Profile resource. */
  policySid?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /** The verification status of the Customer-Profile resource. */
  status?: CustomerProfileEnumStatus;
  /**
   * The date and time in GMT in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format when the
   * resource will be valid until.
   */
  validUntil?: Date | null;
  /**
   * The email address that will receive updates when the Customer-Profile resource changes status.
   */
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
  /** The absolute URL of the Customer-Profile resource. */
  url?: string | null;
  /** The URLs of the Assigned Items of the Customer-Profile resource. */
  links?: Record<string, unknown> | null;
  /** The error codes associated with the rejection of the Customer-Profile. */
  errors?: Record<string, unknown>[] | null;
};

export const trusthubV1CustomerProfileSchema: Schema<TrusthubV1CustomerProfile> =
  s.object<TrusthubV1CustomerProfile>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    policySid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => customerProfileEnumStatusSchema)),
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
