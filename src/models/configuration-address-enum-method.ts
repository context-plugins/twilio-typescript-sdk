import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConfigurationAddressEnumMethod = {
  Get: "get",
  Post: "post",
} as const;
export type ConfigurationAddressEnumMethod =
  | (typeof ConfigurationAddressEnumMethod)[keyof typeof ConfigurationAddressEnumMethod]
  | (string & {});

export const configurationAddressEnumMethodSchema: EnumSchema<ConfigurationAddressEnumMethod> =
  s.enumOf<ConfigurationAddressEnumMethod>(ConfigurationAddressEnumMethod);
