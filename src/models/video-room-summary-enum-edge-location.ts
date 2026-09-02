import { s, type EnumSchema } from "../core/index.js";

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
