import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the sender. Configuring: We are in the process of registering the sender. If your
 * sender stays in this state for a long period of time it is possible that there is an issue with
 * parameters you provided; PendingVerification: We have successfully registered the sender with
 * WhatsApp and you should receive a code from their services; Configured: The sender has been
 * successfully verified with WhatsApp and is all set to start sending messages; ConfigurationError
 * - If configuration fails due to below possibilities: parameters provided were incorrect, Twilio
 * account suspended or deleted, whatsapp api failed, Twilio internal error. VerificationError - If
 * verification api fails, please check error_message for more details
 */
export const WhatsappSenderEnumStatus = {
  Configuring: "Configuring",
  PendingVerification: "PendingVerification",
  Configured: "Configured",
  ConfigurationError: "ConfigurationError",
  VerificationError: "VerificationError",
} as const;
export type WhatsappSenderEnumStatus =
  | (typeof WhatsappSenderEnumStatus)[keyof typeof WhatsappSenderEnumStatus]
  | (string & {});

export const whatsappSenderEnumStatusSchema: EnumSchema<WhatsappSenderEnumStatus> =
  s.enumOf<WhatsappSenderEnumStatus>(WhatsappSenderEnumStatus);
