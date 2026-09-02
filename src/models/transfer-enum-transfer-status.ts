import { s, type EnumSchema } from "../core/index.js";

export const TransferEnumTransferStatus = {
  Active: "active",
  Failed: "failed",
  Completed: "completed",
} as const;
export type TransferEnumTransferStatus =
  | (typeof TransferEnumTransferStatus)[keyof typeof TransferEnumTransferStatus]
  | (string & {});

export const transferEnumTransferStatusSchema: EnumSchema<TransferEnumTransferStatus> =
  s.enumOf<TransferEnumTransferStatus>(TransferEnumTransferStatus);
