import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InteractionTransferEnumTransferStatus = {
  Active: "active",
  Failed: "failed",
  Completed: "completed",
} as const;
export type InteractionTransferEnumTransferStatus =
  | (typeof InteractionTransferEnumTransferStatus)[keyof typeof InteractionTransferEnumTransferStatus]
  | (string & {});

export const interactionTransferEnumTransferStatusSchema: EnumSchema<InteractionTransferEnumTransferStatus> =
  s.enumOf<InteractionTransferEnumTransferStatus>(InteractionTransferEnumTransferStatus);
