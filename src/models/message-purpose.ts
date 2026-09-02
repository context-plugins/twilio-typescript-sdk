import { s, type EnumSchema } from "../core/index.js";

export const MessagePurpose = {
  Transactional: "TRANSACTIONAL",
  Promotional: "PROMOTIONAL",
} as const;
export type MessagePurpose = (typeof MessagePurpose)[keyof typeof MessagePurpose] | (string & {});

export const messagePurposeSchema: EnumSchema<MessagePurpose> = s.enumOf<MessagePurpose>(MessagePurpose);
