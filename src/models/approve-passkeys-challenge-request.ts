import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticatorAttachment2Schema,
  type AuthenticatorAttachment2,
} from "./authenticator-attachment2.js";
import { response1Schema, type Response1 } from "./response1.js";
import { Type1, type1Schema } from "./type1.js";

export type ApprovePasskeysChallengeRequest = {
  /** A [base64url](https://base64.guru/standards/base64url) encoded representation of `rawId`. */
  id: string;
  /** The globally unique identifier for this `PublicKeyCredential`. */
  rawId: string;
  /**
   * A string that indicates the mechanism by which the WebAuthn implementation is attached to the
   * authenticator at the time the associated `navigator.credentials.create()` or
   * `navigator.credentials.get()` call completes.
   */
  authenticatorAttachment: AuthenticatorAttachment2;
  /**
   * The valid credential types supported by the API. The values of this enumeration are used for
   * versioning the `AuthenticatorAssertion` and `AuthenticatorAttestation` structures according to
   * the type of the authenticator.
   *
   * @default Type1.PublicKey
   */
  type?: Type1;
  /**
   * The result of a WebAuthn authentication via a `navigator.credentials.get()` request, as
   * specified in
   * [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse).
   */
  response: Response1;
};

export const approvePasskeysChallengeRequestSchema: Schema<ApprovePasskeysChallengeRequest> =
  s.object<ApprovePasskeysChallengeRequest>({
    id: s.string(),
    rawId: s.string(),
    authenticatorAttachment: authenticatorAttachment2Schema,
    type: s.defaulted(type1Schema, Type1.PublicKey),
    response: response1Schema,
  });
