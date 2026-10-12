import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceActivity = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Activity
   * resource.
   */
  accountSid?: string | null;
  /**
   * Whether the Worker is eligible to receive a Task when it occupies the Activity. A value of
   * `true`, `1`, or `yes` indicates the Activity is available. All other values indicate that it is
   * not. The value cannot be changed after the Activity is created.
   */
  available?: boolean | null;
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
  /** The string that you assigned to describe the Activity resource. */
  friendlyName?: string | null;
  /** The unique string that we created to identify the Activity resource. */
  sid?: string | null;
  /** The SID of the Workspace that contains the Activity. */
  workspaceSid?: string | null;
  /** The absolute URL of the Activity resource. */
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const taskrouterV1WorkspaceActivitySchema: Schema<TaskrouterV1WorkspaceActivity> =
  s.object<TaskrouterV1WorkspaceActivity>({
    accountSid: s.optionalNullable(s.string()),
    available: s.optionalNullable(s.boolean()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    friendlyName: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      friendlyName: "friendly_name",
      workspaceSid: "workspace_sid",
    },
  });
