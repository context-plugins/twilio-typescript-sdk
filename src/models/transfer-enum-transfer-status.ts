import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
