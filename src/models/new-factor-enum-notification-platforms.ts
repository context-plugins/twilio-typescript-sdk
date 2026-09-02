import { s, type EnumSchema } from "../core/index.js";

export const NewFactorEnumNotificationPlatforms = {
  Apn: "apn",
  Fcm: "fcm",
  None: "none",
} as const;
export type NewFactorEnumNotificationPlatforms =
  | (typeof NewFactorEnumNotificationPlatforms)[keyof typeof NewFactorEnumNotificationPlatforms]
  | (string & {});

export const newFactorEnumNotificationPlatformsSchema: EnumSchema<NewFactorEnumNotificationPlatforms> =
  s.enumOf<NewFactorEnumNotificationPlatforms>(NewFactorEnumNotificationPlatforms);
