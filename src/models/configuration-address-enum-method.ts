import { s, type EnumSchema } from "../core/index.js";

export const ConfigurationAddressEnumMethod = {
  Get: "get",
  Post: "post",
} as const;
export type ConfigurationAddressEnumMethod =
  | (typeof ConfigurationAddressEnumMethod)[keyof typeof ConfigurationAddressEnumMethod]
  | (string & {});

export const configurationAddressEnumMethodSchema: EnumSchema<ConfigurationAddressEnumMethod> =
  s.enumOf<ConfigurationAddressEnumMethod>(ConfigurationAddressEnumMethod);
