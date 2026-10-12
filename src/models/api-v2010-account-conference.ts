import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conferenceEnumReasonConferenceEndedSchema,
  type ConferenceEnumReasonConferenceEnded,
} from "./conference-enum-reason-conference-ended.js";
import { conferenceEnumStatusSchema, type ConferenceEnumStatus } from "./conference-enum-status.js";

export type ApiV2010AccountConference = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this
   * Conference resource.
   */
  accountSid?: string | null;
  /**
   * The date and time in UTC that this resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: string | null;
  /**
   * The date and time in UTC that this resource was last updated, specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /** The API version used to create this conference. */
  apiVersion?: string | null;
  /**
   * A string that you assigned to describe this conference room. Maximum length is 128 characters.
   */
  friendlyName?: string | null;
  /**
   * A string that represents the Twilio Region where the conference audio was mixed. May be `us1`,
   * `us2`, `ie1`, `de1`, `sg1`, `br1`, `au1`, and `jp1`. Basic conference audio will always be
   * mixed in `us1`. Global Conference audio will be mixed nearest to the majority of participants.
   */
  region?: string | null;
  /** The unique, Twilio-provided string used to identify this Conference resource. */
  sid?: string | null;
  /** The status of this conference. Can be: `init`, `in-progress`, or `completed`. */
  status?: ConferenceEnumStatus;
  /** The URI of this resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  /** A list of related resources identified by their URIs relative to `https://api.twilio.com`. */
  subresourceUris?: Record<string, unknown> | null;
  /**
   * The reason why a conference ended. When a conference is in progress, will be `null`. When
   * conference is completed, can be: `conference-ended-via-api`,
   * `participant-with-end-conference-on-exit-left`,
   * `participant-with-end-conference-on-exit-kicked`, `last-participant-kicked`, or
   * `last-participant-left`.
   */
  reasonConferenceEnded?: ConferenceEnumReasonConferenceEnded;
  /** The call SID that caused the conference to end. */
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
