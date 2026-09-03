import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import { webhookEnumStatusSchema, type WebhookEnumStatus } from "./webhook-enum-status.js";
import { webhookEnumVersionSchema, type WebhookEnumVersion } from "./webhook-enum-version.js";

export type VerifyV2ServiceWebhook = {
  sid?: string | null;
  serviceSid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  eventTypes?: string[] | null;
  status?: WebhookEnumStatus;
  version?: WebhookEnumVersion;
  webhookUrl?: string | null;
  webhookMethod?: AmdStatusCallbackMethod;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
};

export const verifyV2ServiceWebhookSchema: Schema<VerifyV2ServiceWebhook> = s.object<VerifyV2ServiceWebhook>({
  sid: s.optionalNullable(s.string()),
  serviceSid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  eventTypes: s.optionalNullable(s.array(s.string())),
  status: s.optional(s.lazy(() => webhookEnumStatusSchema)),
  version: s.optional(s.lazy(() => webhookEnumVersionSchema)),
  webhookUrl: s.optionalNullable(s.string()),
  webhookMethod: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    serviceSid: "service_sid",
    accountSid: "account_sid",
    friendlyName: "friendly_name",
    eventTypes: "event_types",
    webhookUrl: "webhook_url",
    webhookMethod: "webhook_method",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
