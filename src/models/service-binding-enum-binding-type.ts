import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ServiceBindingEnumBindingType = {
  Apn: "apn",
  Gcm: "gcm",
  Fcm: "fcm",
  Twilsock: "twilsock",
} as const;
export type ServiceBindingEnumBindingType =
  | (typeof ServiceBindingEnumBindingType)[keyof typeof ServiceBindingEnumBindingType]
  | (string & {});

export const serviceBindingEnumBindingTypeSchema: EnumSchema<ServiceBindingEnumBindingType> =
  s.enumOf<ServiceBindingEnumBindingType>(ServiceBindingEnumBindingType);
