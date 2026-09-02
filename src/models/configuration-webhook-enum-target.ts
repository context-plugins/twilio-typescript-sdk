import { s, type EnumSchema } from "../core/index.js";

export const ConfigurationWebhookEnumTarget = {
  Webhook: "webhook",
  Flex: "flex",
} as const;
export type ConfigurationWebhookEnumTarget =
  | (typeof ConfigurationWebhookEnumTarget)[keyof typeof ConfigurationWebhookEnumTarget]
  | (string & {});

export const configurationWebhookEnumTargetSchema: EnumSchema<ConfigurationWebhookEnumTarget> =
  s.enumOf<ConfigurationWebhookEnumTarget>(ConfigurationWebhookEnumTarget);
