import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flowEnumStatusSchema, type FlowEnumStatus } from "./flow-enum-status.js";

export type StudioV2Flow = {
  /** The unique string that we created to identify the Flow resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flow
   * resource.
   */
  accountSid?: string | null;
  /** The SID of the User that created or last updated the Flow. */
  authorSid?: string | null;
  /** The string that you assigned to describe the Flow. */
  friendlyName?: string | null;
  /** JSON representation of flow definition. */
  definition?: Record<string, unknown> | null;
  /** The status of the Flow. Can be: `draft` or `published`. */
  status?: FlowEnumStatus;
  /** The latest revision number of the Flow's definition. @default 0 */
  revision?: number;
  /** Description of change made in the revision. */
  commitMessage?: string | null;
  /** Boolean if the flow definition is valid. */
  valid?: boolean | null;
  /** List of error in the flow definition. */
  errors?: Record<string, unknown>[] | null;
  /** List of warnings in the flow definition. */
  warnings?: Record<string, unknown>[] | null;
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
  webhookUrl?: string | null;
  /** The absolute URL of the resource. */
  url?: string | null;
  /** The URLs of the Flow's nested resources. */
  links?: Record<string, unknown> | null;
};

export const studioV2FlowSchema: Schema<StudioV2Flow> = s.object<StudioV2Flow>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  authorSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  definition: s.optionalNullable(s.record(s.string(), s.unknown())),
  status: s.optional(s.lazy(() => flowEnumStatusSchema)),
  revision: s.defaulted(s.int(), 0),
  commitMessage: s.optionalNullable(s.string()),
  valid: s.optionalNullable(s.boolean()),
  errors: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
  warnings: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  webhookUrl: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    authorSid: "author_sid",
    friendlyName: "friendly_name",
    commitMessage: "commit_message",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    webhookUrl: "webhook_url",
  },
});
