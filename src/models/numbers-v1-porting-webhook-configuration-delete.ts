import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  portingWebhookConfigurationDeleteEnumWebhookTypeSchema,
  type PortingWebhookConfigurationDeleteEnumWebhookType,
} from "./porting-webhook-configuration-delete-enum-webhook-type.js";

export type NumbersV1PortingWebhookConfigurationDelete = {
  /** The URL of the webhook configuration request */
  url?: string | null;
  /** The of the webhook type of the configuration to be deleted */
  webhookType?: PortingWebhookConfigurationDeleteEnumWebhookType;
};

export const numbersV1PortingWebhookConfigurationDeleteSchema: Schema<NumbersV1PortingWebhookConfigurationDelete> =
  s.object<NumbersV1PortingWebhookConfigurationDelete>({
    url: s.optionalNullable(s.string()),
    webhookType: s.optional(s.lazy(() => portingWebhookConfigurationDeleteEnumWebhookTypeSchema)),
    _keysMap: {
      webhookType: "webhook_type",
    },
  });
