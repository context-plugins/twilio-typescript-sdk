import { s, type Schema } from "../core/index.js";

export type TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment = {
  sid?: string | null;
  customerProfileSid?: string | null;
  accountSid?: string | null;
  channelEndpointType?: string | null;
  channelEndpointSid?: string | null;
  dateCreated?: Date | null;
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
