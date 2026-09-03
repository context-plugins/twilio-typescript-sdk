import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticatorAttachment2Schema,
  type AuthenticatorAttachment2,
} from "./authenticator-attachment2.js";
import { response1Schema, type Response1 } from "./response1.js";
import { type1Schema, type Type1 } from "./type1.js";

export type ApprovePasskeysChallengeRequest = {
  id: string;
  rawId: string;
  authenticatorAttachment: AuthenticatorAttachment2;
  type?: Type1;
  response: Response1;
};

export const approvePasskeysChallengeRequestSchema: Schema<ApprovePasskeysChallengeRequest> =
  s.object<ApprovePasskeysChallengeRequest>({
    id: s.string(),
    rawId: s.string(),
    authenticatorAttachment: authenticatorAttachment2Schema,
    type: s.optional(s.lazy(() => type1Schema)),
    response: response1Schema,
  });
