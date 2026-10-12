import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the Transfer. Can be: `cold`, `warm`. */
export const InteractionTransferEnumTransferType = {
  Warm: "warm",
  Cold: "cold",
  External: "external",
} as const;
export type InteractionTransferEnumTransferType =
  | (typeof InteractionTransferEnumTransferType)[keyof typeof InteractionTransferEnumTransferType]
  | (string & {});

export const interactionTransferEnumTransferTypeSchema: EnumSchema<InteractionTransferEnumTransferType> =
  s.enumOf<InteractionTransferEnumTransferType>(InteractionTransferEnumTransferType);
