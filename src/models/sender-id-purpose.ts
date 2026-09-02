import { s, type EnumSchema } from "../core/index.js";

export const SenderIdPurpose = {
  Transactional: "TRANSACTIONAL",
  Promotional: "PROMOTIONAL",
} as const;
export type SenderIdPurpose = (typeof SenderIdPurpose)[keyof typeof SenderIdPurpose] | (string & {});

export const senderIdPurposeSchema: EnumSchema<SenderIdPurpose> = s.enumOf<SenderIdPurpose>(SenderIdPurpose);
