import { s, type EnumSchema } from "../core/index.js";

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
