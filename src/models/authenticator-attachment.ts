import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AuthenticatorAttachment = {
  Platform: "platform",
  CrossPlatform: "cross-platform",
} as const;
export type AuthenticatorAttachment =
  | (typeof AuthenticatorAttachment)[keyof typeof AuthenticatorAttachment]
  | (string & {});

export const authenticatorAttachmentSchema: EnumSchema<AuthenticatorAttachment> =
  s.enumOf<AuthenticatorAttachment>(AuthenticatorAttachment);
