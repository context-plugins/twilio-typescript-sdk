import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
