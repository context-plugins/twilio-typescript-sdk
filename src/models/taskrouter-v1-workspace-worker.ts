import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorker = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker
   * resource.
   */
  accountSid?: string | null;
  /** The `friendly_name` of the Worker's current Activity. */
  activityName?: string | null;
  /** The SID of the Worker's current Activity. */
  activitySid?: string | null;
  /**
   * The JSON string that describes the Worker. For example: `{ "email": "Bob@example.com", "phone":
   * "+5095551234" }`. **Note** If this property has been assigned a value, it will only be
   * displayed in FETCH actions that return a single resource. Otherwise, this property will be
   * null, even if it has a value. This data is passed to the `assignment_callback_url` when
   * TaskRouter assigns a Task to the Worker.
   */
  attributes?: string | null;
  /** Whether the Worker is available to perform tasks. */
  available?: boolean | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT of the last change to the Worker's activity specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Used to calculate Workflow statistics.
   */
  dateStatusChanged?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /**
   * The string that you assigned to describe the resource. Friendly names are case insensitive, and
   * unique within the TaskRouter Workspace.
   */
  friendlyName?: string | null;
  /** The unique string that we created to identify the Worker resource. */
  sid?: string | null;
  /** The SID of the Workspace that contains the Worker. */
  workspaceSid?: string | null;
  /** The absolute URL of the Worker resource. */
  url?: string | null;
  /** The URLs of related resources. */
  links?: Record<string, unknown> | null;
};

export const taskrouterV1WorkspaceWorkerSchema: Schema<TaskrouterV1WorkspaceWorker> =
  s.object<TaskrouterV1WorkspaceWorker>({
    accountSid: s.optionalNullable(s.string()),
    activityName: s.optionalNullable(s.string()),
    activitySid: s.optionalNullable(s.string()),
    attributes: s.optionalNullable(s.string()),
    available: s.optionalNullable(s.boolean()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateStatusChanged: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    friendlyName: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      activityName: "activity_name",
      activitySid: "activity_sid",
      dateCreated: "date_created",
      dateStatusChanged: "date_status_changed",
      dateUpdated: "date_updated",
      friendlyName: "friendly_name",
      workspaceSid: "workspace_sid",
    },
  });
