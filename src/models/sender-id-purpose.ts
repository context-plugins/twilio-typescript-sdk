import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Purpose for using Sender ID */
export const SenderIdPurpose = {
  Transactional: "TRANSACTIONAL",
  Promotional: "PROMOTIONAL",
} as const;
export type SenderIdPurpose = (typeof SenderIdPurpose)[keyof typeof SenderIdPurpose] | (string & {});

export const senderIdPurposeSchema: EnumSchema<SenderIdPurpose> = s.enumOf<SenderIdPurpose>(SenderIdPurpose);
