import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorker = {
  accountSid?: string | null;
  activityName?: string | null;
  activitySid?: string | null;
  attributes?: string | null;
  available?: boolean | null;
  dateCreated?: Date | null;
  dateStatusChanged?: Date | null;
  dateUpdated?: Date | null;
  friendlyName?: string | null;
  sid?: string | null;
  workspaceSid?: string | null;
  url?: string | null;
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
