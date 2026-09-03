import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrusthubV1TrustProductTrustProductChannelEndpointAssignment = {
  sid?: string | null;
  trustProductSid?: string | null;
  accountSid?: string | null;
  channelEndpointType?: string | null;
  channelEndpointSid?: string | null;
  dateCreated?: Date | null;
  url?: string | null;
};

export const trusthubV1TrustProductTrustProductChannelEndpointAssignmentSchema: Schema<TrusthubV1TrustProductTrustProductChannelEndpointAssignment> =
  s.object<TrusthubV1TrustProductTrustProductChannelEndpointAssignment>({
    sid: s.optionalNullable(s.string()),
    trustProductSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    channelEndpointType: s.optionalNullable(s.string()),
    channelEndpointSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      trustProductSid: "trust_product_sid",
      accountSid: "account_sid",
      channelEndpointType: "channel_endpoint_type",
      channelEndpointSid: "channel_endpoint_sid",
      dateCreated: "date_created",
    },
  });
