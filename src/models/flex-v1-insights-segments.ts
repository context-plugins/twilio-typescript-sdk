import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InsightsSegments = {
  segmentId?: string | null;
  externalId?: string | null;
  queue?: string | null;
  externalContact?: string | null;
  externalSegmentLinkId?: string | null;
  date?: string | null;
  accountId?: string | null;
  externalSegmentLink?: string | null;
  agentId?: string | null;
  agentPhone?: string | null;
  agentName?: string | null;
  agentTeamName?: string | null;
  agentTeamNameInHierarchy?: string | null;
  agentLink?: string | null;
  customerPhone?: string | null;
  customerName?: string | null;
  customerLink?: string | null;
  segmentRecordingOffset?: string | null;
  media?: Record<string, unknown> | null;
  assessmentType?: Record<string, unknown> | null;
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
