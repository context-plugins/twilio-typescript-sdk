import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InteractionChannelEnumStatus = {
  Closed: "closed",
  Wrapup: "wrapup",
} as const;
export type InteractionChannelEnumStatus =
  | (typeof InteractionChannelEnumStatus)[keyof typeof InteractionChannelEnumStatus]
  | (string & {});

export const interactionChannelEnumStatusSchema: EnumSchema<InteractionChannelEnumStatus> =
  s.enumOf<InteractionChannelEnumStatus>(InteractionChannelEnumStatus);
