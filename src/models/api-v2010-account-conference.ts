import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conferenceEnumReasonConferenceEndedSchema,
  type ConferenceEnumReasonConferenceEnded,
} from "./conference-enum-reason-conference-ended.js";
import { conferenceEnumStatusSchema, type ConferenceEnumStatus } from "./conference-enum-status.js";

export type ApiV2010AccountConference = {
  accountSid?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  apiVersion?: string | null;
  friendlyName?: string | null;
  region?: string | null;
  sid?: string | null;
  status?: ConferenceEnumStatus;
  uri?: string | null;
  subresourceUris?: Record<string, unknown> | null;
  reasonConferenceEnded?: ConferenceEnumReasonConferenceEnded;
  callSidEndingConference?: string | null;
};

export const apiV2010AccountConferenceSchema: Schema<ApiV2010AccountConference> =
  s.object<ApiV2010AccountConference>({
    accountSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    apiVersion: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    region: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => conferenceEnumStatusSchema)),
    uri: s.optionalNullable(s.string()),
    subresourceUris: s.optionalNullable(s.record(s.string(), s.unknown())),
    reasonConferenceEnded: s.optional(s.lazy(() => conferenceEnumReasonConferenceEndedSchema)),
    callSidEndingConference: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      apiVersion: "api_version",
      friendlyName: "friendly_name",
      subresourceUris: "subresource_uris",
      reasonConferenceEnded: "reason_conference_ended",
      callSidEndingConference: "call_sid_ending_conference",
    },
  });
