import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messageInteractionEnumResourceStatusSchema,
  type MessageInteractionEnumResourceStatus,
} from "./message-interaction-enum-resource-status.js";
import {
  messageInteractionEnumTypeSchema,
  type MessageInteractionEnumType,
} from "./message-interaction-enum-type.js";

export type ProxyV1ServiceSessionParticipantMessageInteraction = {
  /** The unique string that we created to identify the MessageInteraction resource. */
  sid?: string | null;
  /** The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource. */
  sessionSid?: string | null;
  /** The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource. */
  serviceSid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * MessageInteraction resource.
   */
  accountSid?: string | null;
  /**
   * A JSON string that includes the message body sent to the participant. (e.g. `{"body":
   * "hello"}`)
   */
  data?: string | null;
  /** The Type of Message Interaction. This value is always `message`. */
  type?: MessageInteractionEnumType;
  /** The SID of the [Participant](https://www.twilio.com/docs/proxy/api/participant) resource. */
  participantSid?: string | null;
  /** Always empty for created Message Interactions. */
  inboundParticipantSid?: string | null;
  /** Always empty for created Message Interactions. */
  inboundResourceSid?: string | null;
  /** Always empty for created Message Interactions. */
  inboundResourceStatus?: MessageInteractionEnumResourceStatus;
  /** Always empty for created Message Interactions. */
  inboundResourceType?: string | null;
  /** Always empty for created Message Interactions. */
  inboundResourceUrl?: string | null;
  /**
   * The SID of the outbound [Participant](https://www.twilio.com/docs/proxy/api/participant)
   * resource.
   */
  outboundParticipantSid?: string | null;
  /**
   * The SID of the outbound [Message](https://www.twilio.com/docs/sms/api/message-resource)
   * resource.
   */
  outboundResourceSid?: string | null;
  /** Always empty for created Message Interactions. */
  outboundResourceStatus?: MessageInteractionEnumResourceStatus;
  /** The outbound resource type. This value is always `Message`. */
  outboundResourceType?: string | null;
  /** The URL of the Twilio message resource. */
  outboundResourceUrl?: string | null;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource
   * was created.
   */
  dateCreated?: Date | null;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource
   * was last updated.
   */
  dateUpdated?: Date | null;
  /** The absolute URL of the MessageInteraction resource. */
  url?: string | null;
};

export const proxyV1ServiceSessionParticipantMessageInteractionSchema: Schema<ProxyV1ServiceSessionParticipantMessageInteraction> =
  s.object<ProxyV1ServiceSessionParticipantMessageInteraction>({
    sid: s.optionalNullable(s.string()),
    sessionSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    data: s.optionalNullable(s.string()),
    type: s.optional(s.lazy(() => messageInteractionEnumTypeSchema)),
    participantSid: s.optionalNullable(s.string()),
    inboundParticipantSid: s.optionalNullable(s.string()),
    inboundResourceSid: s.optionalNullable(s.string()),
    inboundResourceStatus: s.optional(s.lazy(() => messageInteractionEnumResourceStatusSchema)),
    inboundResourceType: s.optionalNullable(s.string()),
    inboundResourceUrl: s.optionalNullable(s.string()),
    outboundParticipantSid: s.optionalNullable(s.string()),
    outboundResourceSid: s.optionalNullable(s.string()),
    outboundResourceStatus: s.optional(s.lazy(() => messageInteractionEnumResourceStatusSchema)),
    outboundResourceType: s.optionalNullable(s.string()),
    outboundResourceUrl: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      sessionSid: "session_sid",
      serviceSid: "service_sid",
      accountSid: "account_sid",
      participantSid: "participant_sid",
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
