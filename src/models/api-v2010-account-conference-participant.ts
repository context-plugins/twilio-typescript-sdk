import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { participantEnumStatusSchema, type ParticipantEnumStatus } from "./participant-enum-status.js";

export type ApiV2010AccountConferenceParticipant = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Participant resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Participant
   * resource is associated with.
   */
  callSid?: string | null;
  /**
   * The user-specified label of this participant, if one was given when the participant was
   * created. This may be used to fetch, update or delete the participant.
   */
  label?: string | null;
  /**
   * The SID of the participant who is being `coached`. The participant being coached is the only
   * participant who can hear the participant who is `coaching`.
   */
  callSidToCoach?: string | null;
  /**
   * Whether the participant is coaching another call. Can be: `true` or `false`. If not present,
   * defaults to `false` unless `call_sid_to_coach` is defined. If `true`, `call_sid_to_coach` must
   * be defined.
   */
  coaching?: boolean | null;
  /** The SID of the conference the participant is in. */
  conferenceSid?: string | null;
  /**
   * The date and time in GMT that the resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: string | null;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /**
   * Whether the conference ends when the participant leaves. Can be: `true` or `false` and the
   * default is `false`. If `true`, the conference ends and all other participants drop out when the
   * participant leaves.
   */
  endConferenceOnExit?: boolean | null;
  /** Whether the participant is muted. Can be `true` or `false`. */
  muted?: boolean | null;
  /** Whether the participant is on hold. Can be `true` or `false`. */
  hold?: boolean | null;
  /**
   * Whether the conference starts when the participant joins the conference, if it has not already
   * started. Can be: `true` or `false` and the default is `true`. If `false` and the conference has
   * not started, the participant is muted and hears background music until another participant
   * starts the conference.
   */
  startConferenceOnEnter?: boolean | null;
  /**
   * The status of the participant's call in a session. Can be: `queued`, `connecting`, `ringing`,
   * `connected`, `complete`, or `failed`.
   */
  status?: ParticipantEnumStatus;
  /**
   * The wait time in milliseconds before participant's call is placed. Only available in the
   * response to a create participant request.
   */
  queueTime?: string | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
};

export const apiV2010AccountConferenceParticipantSchema: Schema<ApiV2010AccountConferenceParticipant> =
  s.object<ApiV2010AccountConferenceParticipant>({
    accountSid: s.optionalNullable(s.string()),
    callSid: s.optionalNullable(s.string()),
    label: s.optionalNullable(s.string()),
    callSidToCoach: s.optionalNullable(s.string()),
    coaching: s.optionalNullable(s.boolean()),
    conferenceSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    endConferenceOnExit: s.optionalNullable(s.boolean()),
    muted: s.optionalNullable(s.boolean()),
    hold: s.optionalNullable(s.boolean()),
    startConferenceOnEnter: s.optionalNullable(s.boolean()),
    status: s.optional(s.lazy(() => participantEnumStatusSchema)),
    queueTime: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      callSid: "call_sid",
      callSidToCoach: "call_sid_to_coach",
      conferenceSid: "conference_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      endConferenceOnExit: "end_conference_on_exit",
      startConferenceOnEnter: "start_conference_on_enter",
      queueTime: "queue_time",
    },
  });
