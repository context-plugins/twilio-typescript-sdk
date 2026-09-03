import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceActivity = {
  accountSid?: string | null;
  available?: boolean | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  friendlyName?: string | null;
  sid?: string | null;
  workspaceSid?: string | null;
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
