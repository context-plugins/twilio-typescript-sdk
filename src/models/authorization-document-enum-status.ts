import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the authorization document. Can be: `opened`, `signing`, `signed`, `canceled`, or
 * `failed`., Status of an instance resource. It can hold one of the values: 1. opened 2. signing,
 * 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status
 * Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/authorization-document-resource#status-values)
 * for more information on each of these statuses.
 */
export const AuthorizationDocumentEnumStatus = {
  Opened: "opened",
  Signing: "signing",
  Signed: "signed",
  Canceled: "canceled",
  Failed: "failed",
} as const;
export type AuthorizationDocumentEnumStatus =
  | (typeof AuthorizationDocumentEnumStatus)[keyof typeof AuthorizationDocumentEnumStatus]
  | (string & {});

export const authorizationDocumentEnumStatusSchema: EnumSchema<AuthorizationDocumentEnumStatus> =
  s.enumOf<AuthorizationDocumentEnumStatus>(AuthorizationDocumentEnumStatus);
