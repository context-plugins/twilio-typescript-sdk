import { s, type Schema } from "../core/index.js";
import {
  portingWebhookConfigurationDeleteEnumWebhookTypeSchema,
  type PortingWebhookConfigurationDeleteEnumWebhookType,
} from "./porting-webhook-configuration-delete-enum-webhook-type.js";

export type NumbersV1PortingWebhookConfigurationDelete = {
  url?: string | null;
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
