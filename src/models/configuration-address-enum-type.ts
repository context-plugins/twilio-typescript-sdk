import { s, type EnumSchema } from "../core/index.js";

export const ConfigurationAddressEnumType = {
  Sms: "sms",
  Whatsapp: "whatsapp",
  Messenger: "messenger",
  Gbm: "gbm",
  Email: "email",
  Rcs: "rcs",
  Apple: "apple",
  Chat: "chat",
} as const;
export type ConfigurationAddressEnumType =
  | (typeof ConfigurationAddressEnumType)[keyof typeof ConfigurationAddressEnumType]
  | (string & {});

export const configurationAddressEnumTypeSchema: EnumSchema<ConfigurationAddressEnumType> =
  s.enumOf<ConfigurationAddressEnumType>(ConfigurationAddressEnumType);
