import { s, type EnumSchema } from "../core/index.js";

export const MessageEnumRiskCheck = {
  Enable: "enable",
  Disable: "disable",
} as const;
export type MessageEnumRiskCheck =
  | (typeof MessageEnumRiskCheck)[keyof typeof MessageEnumRiskCheck]
  | (string & {});

export const messageEnumRiskCheckSchema: EnumSchema<MessageEnumRiskCheck> =
  s.enumOf<MessageEnumRiskCheck>(MessageEnumRiskCheck);
