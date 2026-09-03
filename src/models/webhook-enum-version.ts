import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WebhookEnumVersion = {
  V1: "v1",
  V2: "v2",
} as const;
export type WebhookEnumVersion = (typeof WebhookEnumVersion)[keyof typeof WebhookEnumVersion] | (string & {});

export const webhookEnumVersionSchema: EnumSchema<WebhookEnumVersion> =
  s.enumOf<WebhookEnumVersion>(WebhookEnumVersion);
