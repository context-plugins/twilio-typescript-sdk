import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { senderIdPurposeSchema, type SenderIdPurpose } from "./sender-id-purpose.js";

export type ValidateSenderId = {
  /** ISO 3166-1 alpha-2 standard Country Code */
  isoCountry: string;
  /** Purpose for using Sender ID */
  purpose: SenderIdPurpose;
  /** Sender ID string */
  senderId: string;
};

export const validateSenderIdSchema: Schema<ValidateSenderId> = s.object<ValidateSenderId>({
  isoCountry: s.string(),
  purpose: senderIdPurposeSchema,
  senderId: s.string(),
  _keysMap: {
    isoCountry: "iso_country",
    senderId: "sender_id",
  },
});
