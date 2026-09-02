import { s, type Schema } from "../core/index.js";
import { configurationEnumStatusSchema, type ConfigurationEnumStatus } from "./configuration-enum-status.js";

export type FlexV1Configuration = {
  accountSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  attributes?: Record<string, unknown> | null;
  status?: ConfigurationEnumStatus;
  taskrouterWorkspaceSid?: string | null;
  taskrouterTargetWorkflowSid?: string | null;
  taskrouterTargetTaskqueueSid?: string | null;
  taskrouterTaskqueues?: Record<string, unknown>[] | null;
  taskrouterSkills?: Record<string, unknown>[] | null;
  taskrouterWorkerChannels?: Record<string, unknown> | null;
  taskrouterWorkerAttributes?: Record<string, unknown> | null;
  taskrouterOfflineActivitySid?: string | null;
  runtimeDomain?: string | null;
  messagingServiceInstanceSid?: string | null;
  chatServiceInstanceSid?: string | null;
  flexServiceInstanceSid?: string | null;
  flexInstanceSid?: string | null;
  uiLanguage?: string | null;
  uiAttributes?: Record<string, unknown> | null;
  uiDependencies?: Record<string, unknown> | null;
  uiVersion?: string | null;
  serviceVersion?: string | null;
  callRecordingEnabled?: boolean | null;
  callRecordingWebhookUrl?: string | null;
  crmEnabled?: boolean | null;
  crmType?: string | null;
  crmCallbackUrl?: string | null;
  crmFallbackUrl?: string | null;
  crmAttributes?: Record<string, unknown> | null;
  publicAttributes?: Record<string, unknown> | null;
  pluginServiceEnabled?: boolean | null;
  pluginServiceAttributes?: Record<string, unknown> | null;
  integrations?: Record<string, unknown>[] | null;
  outboundCallFlows?: Record<string, unknown> | null;
  serverlessServiceSids?: string[] | null;
  queueStatsConfiguration?: Record<string, unknown> | null;
  notifications?: Record<string, unknown> | null;
  markdown?: Record<string, unknown> | null;
  url?: string | null;
  flexInsightsHr?: Record<string, unknown> | null;
  flexInsightsDrilldown?: boolean | null;
  flexUrl?: string | null;
  channelConfigs?: Record<string, unknown>[] | null;
  debuggerIntegration?: Record<string, unknown> | null;
  flexUiStatusReport?: Record<string, unknown> | null;
  agentConvEndMethods?: Record<string, unknown> | null;
  citrixVoiceVdi?: Record<string, unknown> | null;
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
