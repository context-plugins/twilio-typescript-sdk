import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
