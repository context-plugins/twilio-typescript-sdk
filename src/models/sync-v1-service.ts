import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SyncV1Service = {
  /** The unique string that we created to identify the Service resource. */
  sid?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource. It can be used in place of
   * the resource's `sid` in the URL to address the resource. It is a read-only property, it cannot
   * be assigned using REST API.
   */
  uniqueName?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service
   * resource.
   */
  accountSid?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
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
  /** The absolute URL of the Service resource. */
  url?: string | null;
  /** The URL we call when Sync objects are manipulated. */
  webhookUrl?: string | null;
  /**
   * Whether the Service instance should call `webhook_url` when the REST API is used to update Sync
   * objects. The default is `false`.
   */
  webhooksFromRestEnabled?: boolean | null;
  /**
   * Whether the service instance calls `webhook_url` when client endpoints connect to Sync. The
   * default is `false`.
   */
  reachabilityWebhooksEnabled?: boolean | null;
  /**
   * Whether token identities in the Service must be granted access to Sync objects by using the
   * [Permissions](https://www.twilio.com/docs/sync/api/sync-permissions) resource. It is disabled
   * (false) by default.
   */
  aclEnabled?: boolean | null;
  /**
   * Whether every `endpoint_disconnected` event should occur after a configurable delay. The
   * default is `false`, where the `endpoint_disconnected` event occurs immediately after
   * disconnection. When `true`, intervening reconnections can prevent the `endpoint_disconnected`
   * event.
   */
  reachabilityDebouncingEnabled?: boolean | null;
  /**
   * The reachability event delay in milliseconds if `reachability_debouncing_enabled` = `true`.
   * Must be between 1,000 and 30,000 and defaults to 5,000. This is the number of milliseconds
   * after the last running client disconnects, and a Sync identity is declared offline, before
   * `webhook_url` is called, if all endpoints remain offline. A reconnection from the same identity
   * by any endpoint during this interval prevents the reachability event from occurring.
   *
   * @default 0
   */
  reachabilityDebouncingWindow?: number;
  /** The URLs of related resources. */
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
  reachabilityDebouncingWindow: s.defaulted(s.int(), 0),
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
