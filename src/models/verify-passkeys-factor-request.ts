import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticatorAttachmentSchema, type AuthenticatorAttachment } from "./authenticator-attachment.js";
import { responseSchema, type Response } from "./response.js";
import { Type, typeSchema } from "./type.js";

export type VerifyPasskeysFactorRequest = {
  /** A [base64url](https://base64.guru/standards/base64url) encoded representation of `rawId`. */
  id?: string;
  /** The globally unique identifier for this `PublicKeyCredential`. */
  rawId?: string;
  /**
   * A string that indicates the mechanism by which the WebAuthn implementation is attached to the
   * authenticator at the time the associated `navigator.credentials.create()` or
   * `navigator.credentials.get()` call completes.
   */
  authenticatorAttachment?: AuthenticatorAttachment;
  /**
   * The valid credential types supported by the API. The values of this enumeration are used for
   * versioning the `AuthenticatorAssertion` and `AuthenticatorAttestation` structures according to
   * the type of the authenticator.
   *
   * @default Type.PublicKey
   */
  type?: Type;
  /**
   * The result of a WebAuthn credential registration via `navigator.credentials.create()`, as
   * specified in
   * [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse).
   */
  response: Response;
};

export const verifyPasskeysFactorRequestSchema: Schema<VerifyPasskeysFactorRequest> =
  s.object<VerifyPasskeysFactorRequest>({
    id: s.optional(s.string()),
    rawId: s.optional(s.string()),
    authenticatorAttachment: s.optional(s.lazy(() => authenticatorAttachmentSchema)),
    type: s.defaulted(typeSchema, Type.PublicKey),
    response: responseSchema,
  });
