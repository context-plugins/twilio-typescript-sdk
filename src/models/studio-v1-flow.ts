import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flowEnumStatusSchema, type FlowEnumStatus } from "./flow-enum-status.js";

export type StudioV1Flow = {
  /** The unique string that we created to identify the Flow resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flow
   * resource.
   */
  accountSid?: string | null;
  /** The string that you assigned to describe the Flow. */
  friendlyName?: string | null;
  /** The status of the Flow. Can be: `draft` or `published`. */
  status?: FlowEnumStatus;
  /** The latest version number of the Flow's definition. @default 0 */
  version?: number;
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
  /** The absolute URL of the resource. */
  url?: string | null;
  /** The URLs of the Flow's nested resources. */
  links?: Record<string, unknown> | null;
};

export const studioV1FlowSchema: Schema<StudioV1Flow> = s.object<StudioV1Flow>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => flowEnumStatusSchema)),
  version: s.defaulted(s.int(), 0),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    friendlyName: "friendly_name",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
