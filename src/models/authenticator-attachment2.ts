import { s, type EnumSchema } from "../core/index.js";

export const AuthenticatorAttachment2 = {
  Platform: "platform",
  CrossPlatform: "cross-platform",
} as const;
export type AuthenticatorAttachment2 =
  | (typeof AuthenticatorAttachment2)[keyof typeof AuthenticatorAttachment2]
  | (string & {});

export const authenticatorAttachment2Schema: EnumSchema<AuthenticatorAttachment2> =
  s.enumOf<AuthenticatorAttachment2>(AuthenticatorAttachment2);
