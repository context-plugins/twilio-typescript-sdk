import { s, type Schema } from "../core/index.js";
import { callEnumStatusSchema, type CallEnumStatus } from "./call-enum-status.js";

export type ApiV2010AccountCall = {
  sid?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  parentCallSid?: string | null;
  accountSid?: string | null;
  to?: string | null;
  toFormatted?: string | null;
  from?: string | null;
  fromFormatted?: string | null;
  phoneNumberSid?: string | null;
  status?: CallEnumStatus;
  startTime?: string | null;
  endTime?: string | null;
  duration?: string | null;
  price?: string | null;
  priceUnit?: string | null;
  direction?: string | null;
  answeredBy?: string | null;
  apiVersion?: string | null;
  forwardedFrom?: string | null;
  groupSid?: string | null;
  callerName?: string | null;
  queueTime?: string | null;
  trunkSid?: string | null;
  uri?: string | null;
  subresourceUris?: Record<string, unknown> | null;
};

export const apiV2010AccountCallSchema: Schema<ApiV2010AccountCall> = s.object<ApiV2010AccountCall>({
  sid: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.string()),
  dateUpdated: s.optionalNullable(s.string()),
  parentCallSid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  to: s.optionalNullable(s.string()),
  toFormatted: s.optionalNullable(s.string()),
  from: s.optionalNullable(s.string()),
  fromFormatted: s.optionalNullable(s.string()),
  phoneNumberSid: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => callEnumStatusSchema)),
  startTime: s.optionalNullable(s.string()),
  endTime: s.optionalNullable(s.string()),
  duration: s.optionalNullable(s.string()),
  price: s.optionalNullable(s.string()),
  priceUnit: s.optionalNullable(s.string()),
  direction: s.optionalNullable(s.string()),
  answeredBy: s.optionalNullable(s.string()),
  apiVersion: s.optionalNullable(s.string()),
  forwardedFrom: s.optionalNullable(s.string()),
  groupSid: s.optionalNullable(s.string()),
  callerName: s.optionalNullable(s.string()),
  queueTime: s.optionalNullable(s.string()),
  trunkSid: s.optionalNullable(s.string()),
  uri: s.optionalNullable(s.string()),
  subresourceUris: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    parentCallSid: "parent_call_sid",
    accountSid: "account_sid",
    toFormatted: "to_formatted",
    fromFormatted: "from_formatted",
    phoneNumberSid: "phone_number_sid",
    startTime: "start_time",
    endTime: "end_time",
    priceUnit: "price_unit",
    answeredBy: "answered_by",
    apiVersion: "api_version",
    forwardedFrom: "forwarded_from",
    groupSid: "group_sid",
    callerName: "caller_name",
    queueTime: "queue_time",
    trunkSid: "trunk_sid",
    subresourceUris: "subresource_uris",
  },
});
