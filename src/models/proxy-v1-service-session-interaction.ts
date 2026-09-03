import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  interactionEnumResourceStatusSchema,
  type InteractionEnumResourceStatus,
} from "./interaction-enum-resource-status.js";
import { interactionEnumTypeSchema, type InteractionEnumType } from "./interaction-enum-type.js";

export type ProxyV1ServiceSessionInteraction = {
  sid?: string | null;
  sessionSid?: string | null;
  serviceSid?: string | null;
  accountSid?: string | null;
  data?: string | null;
  type?: InteractionEnumType;
  inboundParticipantSid?: string | null;
  inboundResourceSid?: string | null;
  inboundResourceStatus?: InteractionEnumResourceStatus;
  inboundResourceType?: string | null;
  inboundResourceUrl?: string | null;
  outboundParticipantSid?: string | null;
  outboundResourceSid?: string | null;
  outboundResourceStatus?: InteractionEnumResourceStatus;
  outboundResourceType?: string | null;
  outboundResourceUrl?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
};

export const proxyV1ServiceSessionInteractionSchema: Schema<ProxyV1ServiceSessionInteraction> =
  s.object<ProxyV1ServiceSessionInteraction>({
    sid: s.optionalNullable(s.string()),
    sessionSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    data: s.optionalNullable(s.string()),
    type: s.optional(s.lazy(() => interactionEnumTypeSchema)),
    inboundParticipantSid: s.optionalNullable(s.string()),
    inboundResourceSid: s.optionalNullable(s.string()),
    inboundResourceStatus: s.optional(s.lazy(() => interactionEnumResourceStatusSchema)),
    inboundResourceType: s.optionalNullable(s.string()),
    inboundResourceUrl: s.optionalNullable(s.string()),
    outboundParticipantSid: s.optionalNullable(s.string()),
    outboundResourceSid: s.optionalNullable(s.string()),
    outboundResourceStatus: s.optional(s.lazy(() => interactionEnumResourceStatusSchema)),
    outboundResourceType: s.optionalNullable(s.string()),
    outboundResourceUrl: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      sessionSid: "session_sid",
      serviceSid: "service_sid",
      accountSid: "account_sid",
      inboundParticipantSid: "inbound_participant_sid",
      inboundResourceSid: "inbound_resource_sid",
      inboundResourceStatus: "inbound_resource_status",
      inboundResourceType: "inbound_resource_type",
      inboundResourceUrl: "inbound_resource_url",
      outboundParticipantSid: "outbound_participant_sid",
      outboundResourceSid: "outbound_resource_sid",
      outboundResourceStatus: "outbound_resource_status",
      outboundResourceType: "outbound_resource_type",
      outboundResourceUrl: "outbound_resource_url",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
