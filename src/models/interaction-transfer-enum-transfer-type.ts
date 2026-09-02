import { s, type EnumSchema } from "../core/index.js";

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
