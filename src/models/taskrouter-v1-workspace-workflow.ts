import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkflow = {
  accountSid?: string | null;
  assignmentCallbackUrl?: string | null;
  configuration?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  documentContentType?: string | null;
  fallbackAssignmentCallbackUrl?: string | null;
  friendlyName?: string | null;
  sid?: string | null;
  taskReservationTimeout?: number;
  workspaceSid?: string | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const taskrouterV1WorkspaceWorkflowSchema: Schema<TaskrouterV1WorkspaceWorkflow> =
  s.object<TaskrouterV1WorkspaceWorkflow>({
    accountSid: s.optionalNullable(s.string()),
    assignmentCallbackUrl: s.optionalNullable(s.string()),
    configuration: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    documentContentType: s.optionalNullable(s.string()),
    fallbackAssignmentCallbackUrl: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    taskReservationTimeout: s.optional(s.number()),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      assignmentCallbackUrl: "assignment_callback_url",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      documentContentType: "document_content_type",
      fallbackAssignmentCallbackUrl: "fallback_assignment_callback_url",
      friendlyName: "friendly_name",
      taskReservationTimeout: "task_reservation_timeout",
      workspaceSid: "workspace_sid",
    },
  });
