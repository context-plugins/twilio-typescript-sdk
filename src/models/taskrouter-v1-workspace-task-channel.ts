import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceTaskChannel = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Task
   * Channel resource.
   */
  accountSid?: string | null;
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
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /** The unique string that we created to identify the Task Channel resource. */
  sid?: string | null;
  /**
   * An application-defined string that uniquely identifies the Task Channel, such as `voice` or
   * `sms`.
   */
  uniqueName?: string | null;
  /** The SID of the Workspace that contains the Task Channel. */
  workspaceSid?: string | null;
  /**
   * Whether the Task Channel will prioritize Workers that have been idle. When `true`, Workers that
   * have been idle the longest are prioritized.
   */
  channelOptimizedRouting?: boolean | null;
  /** The absolute URL of the Task Channel resource. */
  url?: string | null;
  /** The URLs of related resources. */
  links?: Record<string, unknown> | null;
};

export const taskrouterV1WorkspaceTaskChannelSchema: Schema<TaskrouterV1WorkspaceTaskChannel> =
  s.object<TaskrouterV1WorkspaceTaskChannel>({
    accountSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    friendlyName: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    uniqueName: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    channelOptimizedRouting: s.optionalNullable(s.boolean()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      friendlyName: "friendly_name",
      uniqueName: "unique_name",
      workspaceSid: "workspace_sid",
      channelOptimizedRouting: "channel_optimized_routing",
    },
  });
