import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A string that indicates the mechanism by which the WebAuthn implementation is attached to the
 * authenticator at the time the associated `navigator.credentials.create()` or
 * `navigator.credentials.get()` call completes.
 */
export const AuthenticatorAttachment2 = {
  Platform: "platform",
  CrossPlatform: "cross-platform",
} as const;
export type AuthenticatorAttachment2 =
  | (typeof AuthenticatorAttachment2)[keyof typeof AuthenticatorAttachment2]
  | (string & {});

export const authenticatorAttachment2Schema: EnumSchema<AuthenticatorAttachment2> =
  s.enumOf<AuthenticatorAttachment2>(AuthenticatorAttachment2);
