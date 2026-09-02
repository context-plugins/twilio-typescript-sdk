import { s, type EnumSchema } from "../core/index.js";

export const AuthenticatorAttachment1 = {
  Platform: "platform",
  CrossPlatform: "cross-platform",
  Any: "any",
} as const;
export type AuthenticatorAttachment1 =
  | (typeof AuthenticatorAttachment1)[keyof typeof AuthenticatorAttachment1]
  | (string & {});

export const authenticatorAttachment1Schema: EnumSchema<AuthenticatorAttachment1> =
  s.enumOf<AuthenticatorAttachment1>(AuthenticatorAttachment1);
