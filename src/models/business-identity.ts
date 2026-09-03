import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BusinessIdentity = {
  Direct: "DIRECT",
  Isv: "ISV",
} as const;
export type BusinessIdentity = (typeof BusinessIdentity)[keyof typeof BusinessIdentity] | (string & {});

export const businessIdentitySchema: EnumSchema<BusinessIdentity> =
  s.enumOf<BusinessIdentity>(BusinessIdentity);
