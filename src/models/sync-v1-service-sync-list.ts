import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SyncV1ServiceSyncList = {
  /** The unique string that we created to identify the Sync List resource. */
  sid?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource. It can be used in place of
   * the resource's `sid` in the URL to address the resource.
   */
  uniqueName?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync
   * List resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is
   * associated with.
   */
  serviceSid?: string | null;
  /** The absolute URL of the Sync List resource. */
  url?: string | null;
  /** The URLs of the Sync List's nested resources. */
  links?: Record<string, unknown> | null;
  /** The current revision of the Sync List, represented as a string. */
  revision?: string | null;
  /**
   * The date and time in GMT when the Sync List expires and will be deleted, specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Sync List does not expire, this
   * value is `null`. The Sync List might not be deleted immediately after it expires.
   */
  dateExpires?: Date | null;
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
  /**
   * The identity of the Sync List's creator. If the Sync List is created from the client SDK, the
   * value matches the Access Token's `identity` field. If the Sync List was created from the REST
   * API, the value is `system`.
   */
  createdBy?: string | null;
};

export const syncV1ServiceSyncListSchema: Schema<SyncV1ServiceSyncList> = s.object<SyncV1ServiceSyncList>({
  sid: s.optionalNullable(s.string()),
  uniqueName: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  serviceSid: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  revision: s.optionalNullable(s.string()),
  dateExpires: s.optionalNullable(s.dateTime()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  createdBy: s.optionalNullable(s.string()),
  _keysMap: {
    uniqueName: "unique_name",
    accountSid: "account_sid",
    serviceSid: "service_sid",
    dateExpires: "date_expires",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    createdBy: "created_by",
  },
});
