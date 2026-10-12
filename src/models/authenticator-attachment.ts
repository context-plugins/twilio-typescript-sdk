import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A string that indicates the mechanism by which the WebAuthn implementation is attached to the
 * authenticator at the time the associated `navigator.credentials.create()` or
 * `navigator.credentials.get()` call completes.
 */
export const AuthenticatorAttachment = {
  Platform: "platform",
  CrossPlatform: "cross-platform",
} as const;
export type AuthenticatorAttachment =
  | (typeof AuthenticatorAttachment)[keyof typeof AuthenticatorAttachment]
  | (string & {});

export const authenticatorAttachmentSchema: EnumSchema<AuthenticatorAttachment> =
  s.enumOf<AuthenticatorAttachment>(AuthenticatorAttachment);
