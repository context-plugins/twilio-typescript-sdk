import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WebhookEnumStatus = {
  Enabled: "enabled",
  Disabled: "disabled",
} as const;
export type WebhookEnumStatus = (typeof WebhookEnumStatus)[keyof typeof WebhookEnumStatus] | (string & {});

export const webhookEnumStatusSchema: EnumSchema<WebhookEnumStatus> =
  s.enumOf<WebhookEnumStatus>(WebhookEnumStatus);
