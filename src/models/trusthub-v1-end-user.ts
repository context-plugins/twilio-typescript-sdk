import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrusthubV1EndUser = {
  /** The unique string created by Twilio to identify the End User resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the End User
   * resource.
   */
  accountSid?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /** The type of end user of the Bundle resource - can be `individual` or `business`. */
  type?: string | null;
  /**
   * The set of parameters that are the attributes of the End Users resource which are listed in the
   * End User Types.
   */
  attributes?: Record<string, unknown> | null;
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
  /** The absolute URL of the End User resource. */
  url?: string | null;
};

export const trusthubV1EndUserSchema: Schema<TrusthubV1EndUser> = s.object<TrusthubV1EndUser>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  attributes: s.optionalNullable(s.record(s.string(), s.unknown())),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    accountSid: "account_sid",
    friendlyName: "friendly_name",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
