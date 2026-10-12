import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SyncV1ServiceSyncMapSyncMapItem = {
  /** The unique, user-defined key for the Map Item. */
  key?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Map Item
   * resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is
   * associated with.
   */
  serviceSid?: string | null;
  /** The SID of the Sync Map that contains the Map Item. */
  mapSid?: string | null;
  /** The absolute URL of the Map Item resource. */
  url?: string | null;
  /** The current revision of the Map Item, represented as a string. */
  revision?: string | null;
  /** An arbitrary, schema-less object that the Map Item stores. Can be up to 16 KiB in length. */
  data?: Record<string, unknown> | null;
  /**
   * The date and time in GMT when the Map Item expires and will be deleted, specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Map Item does not expire, this
   * value is `null`. The Map Item might not be deleted immediately after it expires.
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
   * The identity of the Map Item's creator. If the Map Item is created from the client SDK, the
   * value matches the Access Token's `identity` field. If the Map Item was created from the REST
   * API, the value is `system`.
   */
  createdBy?: string | null;
};

export const syncV1ServiceSyncMapSyncMapItemSchema: Schema<SyncV1ServiceSyncMapSyncMapItem> =
  s.object<SyncV1ServiceSyncMapSyncMapItem>({
    key: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    mapSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    revision: s.optionalNullable(s.string()),
    data: s.optionalNullable(s.record(s.string(), s.unknown())),
    dateExpires: s.optionalNullable(s.dateTime()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    createdBy: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      mapSid: "map_sid",
      dateExpires: "date_expires",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      createdBy: "created_by",
    },
  });
