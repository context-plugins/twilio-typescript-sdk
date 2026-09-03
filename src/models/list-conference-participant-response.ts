import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  insightsV1ConferenceConferenceParticipantSchema,
  type InsightsV1ConferenceConferenceParticipant,
} from "./insights-v1-conference-conference-participant.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListConferenceParticipantResponse = {
  participants?: InsightsV1ConferenceConferenceParticipant[];
  meta?: Meta;
};

export const listConferenceParticipantResponseSchema: Schema<ListConferenceParticipantResponse> =
  s.object<ListConferenceParticipantResponse>({
    participants: s.optional(s.array(s.lazy(() => insightsV1ConferenceConferenceParticipantSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
