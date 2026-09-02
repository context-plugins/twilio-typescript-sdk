import { s, type EnumSchema } from "../core/index.js";

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
