import { s, type EnumSchema } from "../core/index.js";

export const VideoParticipantSummaryEnumEdgeLocation = {
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
export type VideoParticipantSummaryEnumEdgeLocation =
  | (typeof VideoParticipantSummaryEnumEdgeLocation)[keyof typeof VideoParticipantSummaryEnumEdgeLocation]
  | (string & {});

export const videoParticipantSummaryEnumEdgeLocationSchema: EnumSchema<VideoParticipantSummaryEnumEdgeLocation> =
  s.enumOf<VideoParticipantSummaryEnumEdgeLocation>(VideoParticipantSummaryEnumEdgeLocation);
