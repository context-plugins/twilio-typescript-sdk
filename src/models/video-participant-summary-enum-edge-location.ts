import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
