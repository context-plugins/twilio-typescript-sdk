import { s, type EnumSchema } from "../core/index.js";

export const Type3 = {
  HumanAgent: "HUMAN_AGENT",
  Customer: "CUSTOMER",
  AiAgent: "AI_AGENT",
  Agent: "AGENT",
  Unknown: "UNKNOWN",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
