import { s, type EnumSchema } from "../core/index.js";

export const Type2 = {
  HumanAgent: "HUMAN_AGENT",
  Customer: "CUSTOMER",
  AiAgent: "AI_AGENT",
  Agent: "AGENT",
  Unknown: "UNKNOWN",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
