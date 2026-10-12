import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import { webhookEnumStatusSchema, type WebhookEnumStatus } from "./webhook-enum-status.js";
import { webhookEnumVersionSchema, type WebhookEnumVersion } from "./webhook-enum-version.js";

export type VerifyV2ServiceWebhook = {
  /** The unique string that we created to identify the Webhook resource. */
  sid?: string | null;
  /** The unique SID identifier of the Service. */
  serviceSid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service
   * resource.
   */
  accountSid?: string | null;
  /**
   * The string that you assigned to describe the webhook. **This value should not contain PII.**
   */
  friendlyName?: string | null;
  /**
   * The array of events that this Webhook is subscribed to. Possible event types: `*,
   * factor.deleted, factor.created, factor.verified, challenge.approved, challenge.denied`
   */
  eventTypes?: string[] | null;
  /** The webhook status. Default value is `enabled`. One of: `enabled` or `disabled` */
  status?: WebhookEnumStatus;
  /**
   * The webhook version. Default value is `v2` which includes all the latest fields. Version `v1`
   * is legacy and may be removed in the future.
   */
  version?: WebhookEnumVersion;
  /** The URL associated with this Webhook. */
  webhookUrl?: string | null;
  /** The method to be used when calling the webhook's URL. */
  webhookMethod?: AmdStatusCallbackMethod;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /** The absolute URL of the Webhook resource. */
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
