import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  insightsV1VideoRoomSummarySchema,
  type InsightsV1VideoRoomSummary,
} from "./insights-v1-video-room-summary.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListVideoRoomSummaryResponse = {
  rooms?: InsightsV1VideoRoomSummary[];
  meta?: Meta;
};

export const listVideoRoomSummaryResponseSchema: Schema<ListVideoRoomSummaryResponse> =
  s.object<ListVideoRoomSummaryResponse>({
    rooms: s.optional(s.array(s.lazy(() => insightsV1VideoRoomSummarySchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
