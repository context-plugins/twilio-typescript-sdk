import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment = {
  /** The unique string that we created to identify the Item Assignment resource. */
  sid?: string | null;
  /** The unique string that we created to identify the CustomerProfile resource. */
  customerProfileSid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Item
   * Assignment resource.
   */
  accountSid?: string | null;
  /** The type of channel endpoint. eg: phone-number */
  channelEndpointType?: string | null;
  /** The SID of an channel endpoint */
  channelEndpointSid?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /** The absolute URL of the Identity resource. */
  url?: string | null;
};

export const trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignmentSchema: Schema<TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment> =
  s.object<TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment>({
    sid: s.optionalNullable(s.string()),
    customerProfileSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    channelEndpointType: s.optionalNullable(s.string()),
    channelEndpointSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      customerProfileSid: "customer_profile_sid",
      accountSid: "account_sid",
      channelEndpointType: "channel_endpoint_type",
      channelEndpointSid: "channel_endpoint_sid",
      dateCreated: "date_created",
    },
  });
