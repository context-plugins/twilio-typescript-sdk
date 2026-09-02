import { s, type EnumSchema } from "../core/index.js";

export const Confirmation = {
  True: "true",
  False: "false",
} as const;
export type Confirmation = (typeof Confirmation)[keyof typeof Confirmation] | (string & {});

export const confirmationSchema: EnumSchema<Confirmation> = s.enumOf<Confirmation>(Confirmation);
