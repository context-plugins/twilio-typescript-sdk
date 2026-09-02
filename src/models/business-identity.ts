import { s, type EnumSchema } from "../core/index.js";

export const BusinessIdentity = {
  Direct: "DIRECT",
  Isv: "ISV",
} as const;
export type BusinessIdentity = (typeof BusinessIdentity)[keyof typeof BusinessIdentity] | (string & {});

export const businessIdentitySchema: EnumSchema<BusinessIdentity> =
  s.enumOf<BusinessIdentity>(BusinessIdentity);
