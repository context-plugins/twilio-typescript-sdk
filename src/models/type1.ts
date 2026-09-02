import { s, type EnumSchema } from "../core/index.js";

export const Type1 = {
  PublicKey: "public-key",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
