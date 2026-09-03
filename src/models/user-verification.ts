import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UserVerification = {
  Required: "required",
  Preferred: "preferred",
  Discouraged: "discouraged",
} as const;
export type UserVerification = (typeof UserVerification)[keyof typeof UserVerification] | (string & {});

export const userVerificationSchema: EnumSchema<UserVerification> =
  s.enumOf<UserVerification>(UserVerification);
