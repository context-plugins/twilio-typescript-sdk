import { s, type EnumSchema } from "../core/index.js";

export const ConfigurationAddressEnumAutoCreationType = {
  Webhook: "webhook",
  Studio: "studio",
  Default: "default",
} as const;
export type ConfigurationAddressEnumAutoCreationType =
  | (typeof ConfigurationAddressEnumAutoCreationType)[keyof typeof ConfigurationAddressEnumAutoCreationType]
  | (string & {});

export const configurationAddressEnumAutoCreationTypeSchema: EnumSchema<ConfigurationAddressEnumAutoCreationType> =
  s.enumOf<ConfigurationAddressEnumAutoCreationType>(ConfigurationAddressEnumAutoCreationType);
