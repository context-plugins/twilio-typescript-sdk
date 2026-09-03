import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
