import { s, type EnumSchema } from "../core/index.js";

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
