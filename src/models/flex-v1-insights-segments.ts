import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InsightsSegments = {
  /** To unique id of the segment */
  segmentId?: string | null;
  /** The unique id for the conversation. */
  externalId?: string | null;
  queue?: string | null;
  externalContact?: string | null;
  /** The uuid for the external_segment_link. */
  externalSegmentLinkId?: string | null;
  /** The date of the conversation. */
  date?: string | null;
  /** The unique id for the account. */
  accountId?: string | null;
  /** The hyperlink to recording of the task event. */
  externalSegmentLink?: string | null;
  /** The unique id for the agent. */
  agentId?: string | null;
  /** The phone number of the agent. */
  agentPhone?: string | null;
  /** The name of the agent. */
  agentName?: string | null;
  /** The team name to which agent belongs. */
  agentTeamName?: string | null;
  /** he team name to which agent belongs. */
  agentTeamNameInHierarchy?: string | null;
  /** The link to the agent conversation. */
  agentLink?: string | null;
  /** The phone number of the customer. */
  customerPhone?: string | null;
  /** The name of the customer. */
  customerName?: string | null;
  /** The link to the customer conversation. */
  customerLink?: string | null;
  /** The offset value for the recording. */
  segmentRecordingOffset?: string | null;
  /** The media identifiers of the conversation. */
  media?: Record<string, unknown> | null;
  /** The type of the assessment. */
  assessmentType?: Record<string, unknown> | null;
  /** The percentage scored on the Assessments. */
  assessmentPercentage?: Record<string, unknown> | null;
  url?: string | null;
};

export const flexV1InsightsSegmentsSchema: Schema<FlexV1InsightsSegments> = s.object<FlexV1InsightsSegments>({
  segmentId: s.optionalNullable(s.string()),
  externalId: s.optionalNullable(s.string()),
  queue: s.optionalNullable(s.string()),
  externalContact: s.optionalNullable(s.string()),
  externalSegmentLinkId: s.optionalNullable(s.string()),
  date: s.optionalNullable(s.string()),
  accountId: s.optionalNullable(s.string()),
  externalSegmentLink: s.optionalNullable(s.string()),
  agentId: s.optionalNullable(s.string()),
  agentPhone: s.optionalNullable(s.string()),
  agentName: s.optionalNullable(s.string()),
  agentTeamName: s.optionalNullable(s.string()),
  agentTeamNameInHierarchy: s.optionalNullable(s.string()),
  agentLink: s.optionalNullable(s.string()),
  customerPhone: s.optionalNullable(s.string()),
  customerName: s.optionalNullable(s.string()),
  customerLink: s.optionalNullable(s.string()),
  segmentRecordingOffset: s.optionalNullable(s.string()),
  media: s.optionalNullable(s.record(s.string(), s.unknown())),
  assessmentType: s.optionalNullable(s.record(s.string(), s.unknown())),
  assessmentPercentage: s.optionalNullable(s.record(s.string(), s.unknown())),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    segmentId: "segment_id",
    externalId: "external_id",
    externalContact: "external_contact",
    externalSegmentLinkId: "external_segment_link_id",
    accountId: "account_id",
    externalSegmentLink: "external_segment_link",
    agentId: "agent_id",
    agentPhone: "agent_phone",
    agentName: "agent_name",
    agentTeamName: "agent_team_name",
    agentTeamNameInHierarchy: "agent_team_name_in_hierarchy",
    agentLink: "agent_link",
    customerPhone: "customer_phone",
    customerName: "customer_name",
    customerLink: "customer_link",
    segmentRecordingOffset: "segment_recording_offset",
    assessmentType: "assessment_type",
    assessmentPercentage: "assessment_percentage",
  },
});
