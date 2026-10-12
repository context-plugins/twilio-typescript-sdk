import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { senderIdPurposeSchema, type SenderIdPurpose } from "./sender-id-purpose.js";
import {
  senderIdValidationFailureSchema,
  type SenderIdValidationFailure,
} from "./sender-id-validation-failure.js";

export type SenderIdValidationResult = {
  /** ISO 3166-1 alpha-2 standard Country Code */
  isoCountry: string;
  /** Purpose for using Sender ID */
  purpose: SenderIdPurpose;
  /** Sender ID string */
  senderId: string;
  /** List of failures during the validation */
  failures: SenderIdValidationFailure[];
};

export const senderIdValidationResultSchema: Schema<SenderIdValidationResult> =
  s.object<SenderIdValidationResult>({
    isoCountry: s.string(),
    purpose: senderIdPurposeSchema,
    senderId: s.string(),
    failures: s.array(s.lazy(() => senderIdValidationFailureSchema)),
    _keysMap: {
      isoCountry: "iso_country",
      senderId: "sender_id",
    },
  });
