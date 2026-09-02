import { s, type EnumSchema } from "../core/index.js";

export const UserVerification = {
  Required: "required",
  Preferred: "preferred",
  Discouraged: "discouraged",
} as const;
export type UserVerification = (typeof UserVerification)[keyof typeof UserVerification] | (string & {});

export const userVerificationSchema: EnumSchema<UserVerification> =
  s.enumOf<UserVerification>(UserVerification);
