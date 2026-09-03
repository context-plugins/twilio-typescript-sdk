import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticatorAttachmentSchema, type AuthenticatorAttachment } from "./authenticator-attachment.js";
import { responseSchema, type Response } from "./response.js";
import { typeSchema, type Type } from "./type.js";

export type VerifyPasskeysFactorRequest = {
  id?: string;
  rawId?: string;
  authenticatorAttachment?: AuthenticatorAttachment;
  type?: Type;
  response: Response;
};

export const verifyPasskeysFactorRequestSchema: Schema<VerifyPasskeysFactorRequest> =
  s.object<VerifyPasskeysFactorRequest>({
    id: s.optional(s.string()),
    rawId: s.optional(s.string()),
    authenticatorAttachment: s.optional(s.lazy(() => authenticatorAttachmentSchema)),
    type: s.optional(s.lazy(() => typeSchema)),
    response: responseSchema,
  });
