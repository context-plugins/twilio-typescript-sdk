import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceTaskChannel = {
  accountSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  friendlyName?: string | null;
  sid?: string | null;
  uniqueName?: string | null;
  workspaceSid?: string | null;
  channelOptimizedRouting?: boolean | null;
  url?: string | null;
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
