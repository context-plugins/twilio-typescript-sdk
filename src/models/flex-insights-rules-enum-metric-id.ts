import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The metric this rule is associated with. */
export const FlexInsightsRulesEnumMetricId = {
  ActiveNow: "Active (Now)",
  WaitingNow: "Waiting (Now)",
  AvailableAgentsNow: "Available Agents (Now)",
  OfflineAgentsNow: "Offline Agents (Now)",
  UnavailableAgentsNow: "Unavailable Agents (Now)",
  Abandoned30Min: "Abandoned (30 min)",
  AbandonedToday: "Abandoned (Today)",
  Accepted30Min: "Accepted (30 min)",
  AcceptedToday: "Accepted (Today)",
  AvgSpeedOfAnswerToday: "Avg. Speed of Answer (Today)",
  AvgHandleTimeToday: "Avg. Handle Time (Today)",
  MissedInvitations30Min: "Missed Invitations (30 min)",
  MissedInvitationsToday: "Missed Invitations (Today)",
  Sla30Min: "SLA (30 min)",
  SlaToday: "SLA (Today)",
  LongestAvailableAgentNow: "Longest Available Agent (Now)",
  LongestNow: "Longest (Now)",
} as const;
export type FlexInsightsRulesEnumMetricId =
  | (typeof FlexInsightsRulesEnumMetricId)[keyof typeof FlexInsightsRulesEnumMetricId]
  | (string & {});

export const flexInsightsRulesEnumMetricIdSchema: EnumSchema<FlexInsightsRulesEnumMetricId> =
  s.enumOf<FlexInsightsRulesEnumMetricId>(FlexInsightsRulesEnumMetricId);
