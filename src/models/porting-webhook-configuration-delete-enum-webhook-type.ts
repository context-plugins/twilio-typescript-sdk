import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PortingWebhookConfigurationDeleteEnumWebhookType = {
  PortIn: "PORT_IN",
  PortOut: "PORT_OUT",
} as const;
export type PortingWebhookConfigurationDeleteEnumWebhookType =
  | (typeof PortingWebhookConfigurationDeleteEnumWebhookType)[keyof typeof PortingWebhookConfigurationDeleteEnumWebhookType]
  | (string & {});

export const portingWebhookConfigurationDeleteEnumWebhookTypeSchema: EnumSchema<PortingWebhookConfigurationDeleteEnumWebhookType> =
  s.enumOf<PortingWebhookConfigurationDeleteEnumWebhookType>(
    PortingWebhookConfigurationDeleteEnumWebhookType,
  );
