import { s, type EnumSchema } from "../core/index.js";

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
