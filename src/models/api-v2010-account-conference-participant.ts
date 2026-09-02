import { s, type Schema } from "../core/index.js";
import { participantEnumStatusSchema, type ParticipantEnumStatus } from "./participant-enum-status.js";

export type ApiV2010AccountConferenceParticipant = {
  accountSid?: string | null;
  callSid?: string | null;
  label?: string | null;
  callSidToCoach?: string | null;
  coaching?: boolean | null;
  conferenceSid?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  endConferenceOnExit?: boolean | null;
  muted?: boolean | null;
  hold?: boolean | null;
  startConferenceOnEnter?: boolean | null;
  status?: ParticipantEnumStatus;
  queueTime?: string | null;
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
