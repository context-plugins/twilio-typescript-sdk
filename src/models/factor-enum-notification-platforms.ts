import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FactorEnumNotificationPlatforms = {
  Apn: "apn",
  Fcm: "fcm",
  None: "none",
} as const;
export type FactorEnumNotificationPlatforms =
  | (typeof FactorEnumNotificationPlatforms)[keyof typeof FactorEnumNotificationPlatforms]
  | (string & {});

export const factorEnumNotificationPlatformsSchema: EnumSchema<FactorEnumNotificationPlatforms> =
  s.enumOf<FactorEnumNotificationPlatforms>(FactorEnumNotificationPlatforms);
