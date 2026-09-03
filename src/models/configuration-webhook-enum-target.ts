import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConfigurationWebhookEnumTarget = {
  Webhook: "webhook",
  Flex: "flex",
} as const;
export type ConfigurationWebhookEnumTarget =
  | (typeof ConfigurationWebhookEnumTarget)[keyof typeof ConfigurationWebhookEnumTarget]
  | (string & {});

export const configurationWebhookEnumTargetSchema: EnumSchema<ConfigurationWebhookEnumTarget> =
  s.enumOf<ConfigurationWebhookEnumTarget>(ConfigurationWebhookEnumTarget);
