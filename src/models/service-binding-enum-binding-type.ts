import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The push technology to use for the Binding. Can be: `apn`, `gcm`, `fcm`, or `twilsock`. See [push
 * notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for
 * more info.
 */
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
