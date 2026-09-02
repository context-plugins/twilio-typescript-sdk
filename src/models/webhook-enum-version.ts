import { s, type EnumSchema } from "../core/index.js";

export const WebhookEnumVersion = {
  V1: "v1",
  V2: "v2",
} as const;
export type WebhookEnumVersion = (typeof WebhookEnumVersion)[keyof typeof WebhookEnumVersion] | (string & {});

export const webhookEnumVersionSchema: EnumSchema<WebhookEnumVersion> =
  s.enumOf<WebhookEnumVersion>(WebhookEnumVersion);
