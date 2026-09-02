import { s, type EnumSchema } from "../core/index.js";

export const TransferEnumTransferType = {
  Warm: "warm",
  Cold: "cold",
  External: "external",
} as const;
export type TransferEnumTransferType =
  | (typeof TransferEnumTransferType)[keyof typeof TransferEnumTransferType]
  | (string & {});

export const transferEnumTransferTypeSchema: EnumSchema<TransferEnumTransferType> =
  s.enumOf<TransferEnumTransferType>(TransferEnumTransferType);
