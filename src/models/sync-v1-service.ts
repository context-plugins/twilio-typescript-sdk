import { s, type Schema } from "../core/index.js";

export type SyncV1Service = {
  sid?: string | null;
  uniqueName?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  webhookUrl?: string | null;
  webhooksFromRestEnabled?: boolean | null;
  reachabilityWebhooksEnabled?: boolean | null;
  aclEnabled?: boolean | null;
  reachabilityDebouncingEnabled?: boolean | null;
  reachabilityDebouncingWindow?: number;
  links?: Record<string, unknown> | null;
};

export const syncV1ServiceSchema: Schema<SyncV1Service> = s.object<SyncV1Service>({
  sid: s.optionalNullable(s.string()),
  uniqueName: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  webhookUrl: s.optionalNullable(s.string()),
  webhooksFromRestEnabled: s.optionalNullable(s.boolean()),
  reachabilityWebhooksEnabled: s.optionalNullable(s.boolean()),
  aclEnabled: s.optionalNullable(s.boolean()),
  reachabilityDebouncingEnabled: s.optionalNullable(s.boolean()),
  reachabilityDebouncingWindow: s.optional(s.number()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    uniqueName: "unique_name",
    accountSid: "account_sid",
    friendlyName: "friendly_name",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    webhookUrl: "webhook_url",
    webhooksFromRestEnabled: "webhooks_from_rest_enabled",
    reachabilityWebhooksEnabled: "reachability_webhooks_enabled",
    aclEnabled: "acl_enabled",
    reachabilityDebouncingEnabled: "reachability_debouncing_enabled",
    reachabilityDebouncingWindow: "reachability_debouncing_window",
  },
});
