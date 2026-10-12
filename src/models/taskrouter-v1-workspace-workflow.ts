import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkflow = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workflow
   * resource.
   */
  accountSid?: string | null;
  /**
   * The URL that we call when a task managed by the Workflow is assigned to a Worker. See
   * Assignment Callback URL for more information.
   */
  assignmentCallbackUrl?: string | null;
  /**
   * A JSON string that contains the Workflow's configuration. See [Configuring
   * Workflows](https://www.twilio.com/docs/taskrouter/workflow-configuration) for more information.
   */
  configuration?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: Date | null;
  /** The MIME type of the document. */
  documentContentType?: string | null;
  /** The URL that we call when a call to the `assignment_callback_url` fails. */
  fallbackAssignmentCallbackUrl?: string | null;
  /**
   * The string that you assigned to describe the Workflow resource. For example, `Customer Support`
   * or `2014 Election Campaign`.
   */
  friendlyName?: string | null;
  /** The unique string that we created to identify the Workflow resource. */
  sid?: string | null;
  /**
   * How long TaskRouter will wait for a confirmation response from your application after it
   * assigns a Task to a Worker. Can be up to `86,400` (24 hours) and the default is `120`.
   *
   * @default 0
   */
  taskReservationTimeout?: number;
  /** The SID of the Workspace that contains the Workflow. */
  workspaceSid?: string | null;
  /** The absolute URL of the Workflow resource. */
  url?: string | null;
  /** The URLs of related resources. */
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
    taskReservationTimeout: s.defaulted(s.int(), 0),
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
