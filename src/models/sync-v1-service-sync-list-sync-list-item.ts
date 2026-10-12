import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SyncV1ServiceSyncListSyncListItem = {
  /**
   * The automatically generated index of the List Item. The `index` values of the List Items in a
   * Sync List can have gaps in their sequence.
   *
   * @default 0
   */
  index?: number;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the List
   * Item resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is
   * associated with.
   */
  serviceSid?: string | null;
  /** The SID of the Sync List that contains the List Item. */
  listSid?: string | null;
  /** The absolute URL of the List Item resource. */
  url?: string | null;
  /** The current revision of the item, represented as a string. */
  revision?: string | null;
  /** An arbitrary, schema-less object that the List Item stores. Can be up to 16 KiB in length. */
  data?: Record<string, unknown> | null;
  /**
   * The date and time in GMT when the List Item expires and will be deleted, specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the List Item does not expire, this
   * value is `null`. The List Item resource might not be deleted immediately after it expires.
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
   * The identity of the List Item's creator. If the item is created from the client SDK, the value
   * matches the Access Token's `identity` field. If the item was created from the REST API, the
   * value is `system`.
   */
  createdBy?: string | null;
};

export const syncV1ServiceSyncListSyncListItemSchema: Schema<SyncV1ServiceSyncListSyncListItem> =
  s.object<SyncV1ServiceSyncListSyncListItem>({
    index: s.defaulted(s.int(), 0),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    listSid: s.optionalNullable(s.string()),
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
      listSid: "list_sid",
      dateExpires: "date_expires",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      createdBy: "created_by",
    },
  });
