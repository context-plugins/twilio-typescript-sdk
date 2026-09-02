import { s, type Schema } from "../core/index.js";
import {
  insightsV1VideoRoomSummaryVideoParticipantSummarySchema,
  type InsightsV1VideoRoomSummaryVideoParticipantSummary,
} from "./insights-v1-video-room-summary-video-participant-summary.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListVideoParticipantSummaryResponse = {
  participants?: InsightsV1VideoRoomSummaryVideoParticipantSummary[];
  meta?: Meta;
};

export const listVideoParticipantSummaryResponseSchema: Schema<ListVideoParticipantSummaryResponse> =
  s.object<ListVideoParticipantSummaryResponse>({
    participants: s.optional(s.array(s.lazy(() => insightsV1VideoRoomSummaryVideoParticipantSummarySchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
