import { s, type Schema } from "../core/index.js";
import { messageEnumDirectionSchema, type MessageEnumDirection } from "./message-enum-direction.js";
import { messageEnumStatusSchema, type MessageEnumStatus } from "./message-enum-status.js";

export type ApiV2010AccountMessage = {
  body?: string | null;
  numSegments?: string | null;
  direction?: MessageEnumDirection;
  from?: string | null;
  to?: string | null;
  dateUpdated?: string | null;
  price?: string | null;
  errorMessage?: string | null;
  uri?: string | null;
  accountSid?: string | null;
  numMedia?: string | null;
  status?: MessageEnumStatus;
  messagingServiceSid?: string | null;
  sid?: string | null;
  dateSent?: string | null;
  dateCreated?: string | null;
  errorCode?: number | null;
  priceUnit?: string | null;
  apiVersion?: string | null;
  subresourceUris?: Record<string, unknown> | null;
};

export const apiV2010AccountMessageSchema: Schema<ApiV2010AccountMessage> = s.object<ApiV2010AccountMessage>({
  body: s.optionalNullable(s.string()),
  numSegments: s.optionalNullable(s.string()),
  direction: s.optional(s.lazy(() => messageEnumDirectionSchema)),
  from: s.optionalNullable(s.string()),
  to: s.optionalNullable(s.string()),
  dateUpdated: s.optionalNullable(s.string()),
  price: s.optionalNullable(s.string()),
  errorMessage: s.optionalNullable(s.string()),
  uri: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  numMedia: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => messageEnumStatusSchema)),
  messagingServiceSid: s.optionalNullable(s.string()),
  sid: s.optionalNullable(s.string()),
  dateSent: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.string()),
  errorCode: s.optionalNullable(s.number()),
  priceUnit: s.optionalNullable(s.string()),
  apiVersion: s.optionalNullable(s.string()),
  subresourceUris: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    numSegments: "num_segments",
    dateUpdated: "date_updated",
    errorMessage: "error_message",
    accountSid: "account_sid",
    numMedia: "num_media",
    messagingServiceSid: "messaging_service_sid",
    dateSent: "date_sent",
    dateCreated: "date_created",
    errorCode: "error_code",
    priceUnit: "price_unit",
    apiVersion: "api_version",
    subresourceUris: "subresource_uris",
  },
});
