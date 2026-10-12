import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configurationEnumStatusSchema, type ConfigurationEnumStatus } from "./configuration-enum-status.js";

export type FlexV1Configuration = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Configuration resource.
   */
  accountSid?: string | null;
  /**
   * The date and time in GMT when the Configuration resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the Configuration resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /** An object that contains application-specific data. */
  attributes?: Record<string, unknown> | null;
  /** The status of the Flex onboarding. Can be: `ok`, `inprogress`,`notstarted`. */
  status?: ConfigurationEnumStatus;
  /** The SID of the TaskRouter Workspace. */
  taskrouterWorkspaceSid?: string | null;
  /** The SID of the TaskRouter target Workflow. */
  taskrouterTargetWorkflowSid?: string | null;
  /** The SID of the TaskRouter Target TaskQueue. */
  taskrouterTargetTaskqueueSid?: string | null;
  /** The list of TaskRouter TaskQueues. */
  taskrouterTaskqueues?: Record<string, unknown>[] | null;
  /** The Skill description for TaskRouter workers. */
  taskrouterSkills?: Record<string, unknown>[] | null;
  /** The TaskRouter default channel capacities and availability for workers. */
  taskrouterWorkerChannels?: Record<string, unknown> | null;
  /** The TaskRouter Worker attributes. */
  taskrouterWorkerAttributes?: Record<string, unknown> | null;
  /** The TaskRouter SID of the offline activity. */
  taskrouterOfflineActivitySid?: string | null;
  /** The URL where the Flex instance is hosted. */
  runtimeDomain?: string | null;
  /** The SID of the Messaging service instance. */
  messagingServiceInstanceSid?: string | null;
  /** The SID of the chat service this user belongs to. */
  chatServiceInstanceSid?: string | null;
  /** The SID of the Flex service instance. */
  flexServiceInstanceSid?: string | null;
  /** The SID of the Flex instance. */
  flexInstanceSid?: string | null;
  /** The primary language of the Flex UI. */
  uiLanguage?: string | null;
  /** The object that describes Flex UI characteristics and settings. */
  uiAttributes?: Record<string, unknown> | null;
  /** The object that defines the NPM packages and versions to be used in Hosted Flex. */
  uiDependencies?: Record<string, unknown> | null;
  /** The Pinned UI version. */
  uiVersion?: string | null;
  /** The Flex Service version. */
  serviceVersion?: string | null;
  /** Whether call recording is enabled. */
  callRecordingEnabled?: boolean | null;
  /** The call recording webhook URL. */
  callRecordingWebhookUrl?: string | null;
  /** Whether CRM is present for Flex. */
  crmEnabled?: boolean | null;
  /** The CRM type. */
  crmType?: string | null;
  /** The CRM Callback URL. */
  crmCallbackUrl?: string | null;
  /** The CRM Fallback URL. */
  crmFallbackUrl?: string | null;
  /** An object that contains the CRM attributes. */
  crmAttributes?: Record<string, unknown> | null;
  /** The list of public attributes, which are visible to unauthenticated clients. */
  publicAttributes?: Record<string, unknown> | null;
  /** Whether the plugin service enabled. */
  pluginServiceEnabled?: boolean | null;
  /** The plugin service attributes. */
  pluginServiceAttributes?: Record<string, unknown> | null;
  /**
   * A list of objects that contain the configurations for the Integrations supported in this
   * configuration.
   */
  integrations?: Record<string, unknown>[] | null;
  /** The list of outbound call flows. */
  outboundCallFlows?: Record<string, unknown> | null;
  /** The list of serverless service SIDs. */
  serverlessServiceSids?: string[] | null;
  /** Configurable parameters for Queues Statistics. */
  queueStatsConfiguration?: Record<string, unknown> | null;
  /** Configurable parameters for Notifications. */
  notifications?: Record<string, unknown> | null;
  /** Configurable parameters for Markdown. */
  markdown?: Record<string, unknown> | null;
  /** The absolute URL of the Configuration resource. */
  url?: string | null;
  /** Object with enabled/disabled flag with list of workspaces. */
  flexInsightsHr?: Record<string, unknown> | null;
  /** Setting this to true will redirect Flex UI to the URL set in flex_url */
  flexInsightsDrilldown?: boolean | null;
  /** URL to redirect to in case drilldown is enabled. */
  flexUrl?: string | null;
  /** Settings for different limits for Flex Conversations channels attachments. */
  channelConfigs?: Record<string, unknown>[] | null;
  /** Configurable parameters for Debugger Integration. */
  debuggerIntegration?: Record<string, unknown> | null;
  /** Configurable parameters for Flex UI Status report. */
  flexUiStatusReport?: Record<string, unknown> | null;
  /** Agent conversation end methods. */
  agentConvEndMethods?: Record<string, unknown> | null;
  /** Citrix voice vdi configuration and settings. */
  citrixVoiceVdi?: Record<string, unknown> | null;
  /** Presence and presence ttl configuration */
  offlineConfig?: Record<string, unknown> | null;
};

export const flexV1ConfigurationSchema: Schema<FlexV1Configuration> = s.object<FlexV1Configuration>({
  accountSid: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  attributes: s.optionalNullable(s.record(s.string(), s.unknown())),
  status: s.optional(s.lazy(() => configurationEnumStatusSchema)),
  taskrouterWorkspaceSid: s.optionalNullable(s.string()),
  taskrouterTargetWorkflowSid: s.optionalNullable(s.string()),
  taskrouterTargetTaskqueueSid: s.optionalNullable(s.string()),
  taskrouterTaskqueues: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
  taskrouterSkills: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
  taskrouterWorkerChannels: s.optionalNullable(s.record(s.string(), s.unknown())),
  taskrouterWorkerAttributes: s.optionalNullable(s.record(s.string(), s.unknown())),
  taskrouterOfflineActivitySid: s.optionalNullable(s.string()),
  runtimeDomain: s.optionalNullable(s.string()),
  messagingServiceInstanceSid: s.optionalNullable(s.string()),
  chatServiceInstanceSid: s.optionalNullable(s.string()),
  flexServiceInstanceSid: s.optionalNullable(s.string()),
  flexInstanceSid: s.optionalNullable(s.string()),
  uiLanguage: s.optionalNullable(s.string()),
  uiAttributes: s.optionalNullable(s.record(s.string(), s.unknown())),
  uiDependencies: s.optionalNullable(s.record(s.string(), s.unknown())),
  uiVersion: s.optionalNullable(s.string()),
  serviceVersion: s.optionalNullable(s.string()),
  callRecordingEnabled: s.optionalNullable(s.boolean()),
  callRecordingWebhookUrl: s.optionalNullable(s.string()),
  crmEnabled: s.optionalNullable(s.boolean()),
  crmType: s.optionalNullable(s.string()),
  crmCallbackUrl: s.optionalNullable(s.string()),
  crmFallbackUrl: s.optionalNullable(s.string()),
  crmAttributes: s.optionalNullable(s.record(s.string(), s.unknown())),
  publicAttributes: s.optionalNullable(s.record(s.string(), s.unknown())),
  pluginServiceEnabled: s.optionalNullable(s.boolean()),
  pluginServiceAttributes: s.optionalNullable(s.record(s.string(), s.unknown())),
  integrations: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
  outboundCallFlows: s.optionalNullable(s.record(s.string(), s.unknown())),
  serverlessServiceSids: s.optionalNullable(s.array(s.string())),
  queueStatsConfiguration: s.optionalNullable(s.record(s.string(), s.unknown())),
  notifications: s.optionalNullable(s.record(s.string(), s.unknown())),
  markdown: s.optionalNullable(s.record(s.string(), s.unknown())),
  url: s.optionalNullable(s.string()),
  flexInsightsHr: s.optionalNullable(s.record(s.string(), s.unknown())),
  flexInsightsDrilldown: s.optionalNullable(s.boolean()),
  flexUrl: s.optionalNullable(s.string()),
  channelConfigs: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
  debuggerIntegration: s.optionalNullable(s.record(s.string(), s.unknown())),
  flexUiStatusReport: s.optionalNullable(s.record(s.string(), s.unknown())),
  agentConvEndMethods: s.optionalNullable(s.record(s.string(), s.unknown())),
  citrixVoiceVdi: s.optionalNullable(s.record(s.string(), s.unknown())),
  offlineConfig: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    taskrouterWorkspaceSid: "taskrouter_workspace_sid",
    taskrouterTargetWorkflowSid: "taskrouter_target_workflow_sid",
    taskrouterTargetTaskqueueSid: "taskrouter_target_taskqueue_sid",
    taskrouterTaskqueues: "taskrouter_taskqueues",
    taskrouterSkills: "taskrouter_skills",
    taskrouterWorkerChannels: "taskrouter_worker_channels",
    taskrouterWorkerAttributes: "taskrouter_worker_attributes",
    taskrouterOfflineActivitySid: "taskrouter_offline_activity_sid",
    runtimeDomain: "runtime_domain",
    messagingServiceInstanceSid: "messaging_service_instance_sid",
    chatServiceInstanceSid: "chat_service_instance_sid",
    flexServiceInstanceSid: "flex_service_instance_sid",
    flexInstanceSid: "flex_instance_sid",
    uiLanguage: "ui_language",
    uiAttributes: "ui_attributes",
    uiDependencies: "ui_dependencies",
    uiVersion: "ui_version",
    serviceVersion: "service_version",
    callRecordingEnabled: "call_recording_enabled",
    callRecordingWebhookUrl: "call_recording_webhook_url",
    crmEnabled: "crm_enabled",
    crmType: "crm_type",
    crmCallbackUrl: "crm_callback_url",
    crmFallbackUrl: "crm_fallback_url",
    crmAttributes: "crm_attributes",
    publicAttributes: "public_attributes",
    pluginServiceEnabled: "plugin_service_enabled",
    pluginServiceAttributes: "plugin_service_attributes",
    outboundCallFlows: "outbound_call_flows",
    serverlessServiceSids: "serverless_service_sids",
    queueStatsConfiguration: "queue_stats_configuration",
    flexInsightsHr: "flex_insights_hr",
    flexInsightsDrilldown: "flex_insights_drilldown",
    flexUrl: "flex_url",
    channelConfigs: "channel_configs",
    debuggerIntegration: "debugger_integration",
    flexUiStatusReport: "flex_ui_status_report",
    agentConvEndMethods: "agent_conv_end_methods",
    citrixVoiceVdi: "citrix_voice_vdi",
    offlineConfig: "offline_config",
  },
});
