import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VideoRoomSummaryEnumEdgeLocation = {
  Ashburn: "ashburn",
  Dublin: "dublin",
  Frankfurt: "frankfurt",
  Singapore: "singapore",
  Sydney: "sydney",
  SaoPaulo: "sao_paulo",
  Roaming: "roaming",
  Umatilla: "umatilla",
  Tokyo: "tokyo",
} as const;
export type VideoRoomSummaryEnumEdgeLocation =
  | (typeof VideoRoomSummaryEnumEdgeLocation)[keyof typeof VideoRoomSummaryEnumEdgeLocation]
  | (string & {});

export const videoRoomSummaryEnumEdgeLocationSchema: EnumSchema<VideoRoomSummaryEnumEdgeLocation> =
  s.enumOf<VideoRoomSummaryEnumEdgeLocation>(VideoRoomSummaryEnumEdgeLocation);
