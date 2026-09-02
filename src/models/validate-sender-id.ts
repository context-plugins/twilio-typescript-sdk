import { s, type Schema } from "../core/index.js";
import { senderIdPurposeSchema, type SenderIdPurpose } from "./sender-id-purpose.js";

export type ValidateSenderId = {
  isoCountry: string;
  purpose: SenderIdPurpose;
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
