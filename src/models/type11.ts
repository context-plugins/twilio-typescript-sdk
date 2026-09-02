import { s, type EnumSchema } from "../core/index.js";

export const Type11 = {
  HumanAgent: "HUMAN_AGENT",
  Customer: "CUSTOMER",
  AiAgent: "AI_AGENT",
} as const;
export type Type11 = (typeof Type11)[keyof typeof Type11] | (string & {});

export const type11Schema: EnumSchema<Type11> = s.enumOf<Type11>(Type11);
