import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageEnumRiskCheck = {
  Enable: "enable",
  Disable: "disable",
} as const;
export type MessageEnumRiskCheck =
  | (typeof MessageEnumRiskCheck)[keyof typeof MessageEnumRiskCheck]
  | (string & {});

export const messageEnumRiskCheckSchema: EnumSchema<MessageEnumRiskCheck> =
  s.enumOf<MessageEnumRiskCheck>(MessageEnumRiskCheck);
