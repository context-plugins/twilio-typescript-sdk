import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  interactionEnumResourceStatusSchema,
  type InteractionEnumResourceStatus,
} from "./interaction-enum-resource-status.js";
import { interactionEnumTypeSchema, type InteractionEnumType } from "./interaction-enum-type.js";

export type ProxyV1ServiceSessionInteraction = {
  /** The unique string that we created to identify the Interaction resource. */
  sid?: string | null;
  /** The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource. */
  sessionSid?: string | null;
  /** The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource. */
  serviceSid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Interaction resource.
   */
  accountSid?: string | null;
  /**
   * A JSON string that includes the message body of message interactions (e.g. `{"body": "hello"}`)
   * or the call duration (when available) of a call (e.g. `{"duration": "5"}`).
   */
  data?: string | null;
  /** The Type of the Interaction. Can be: `message`, `voice` or `unknown`. */
  type?: InteractionEnumType;
  /**
   * The SID of the inbound [Participant](https://www.twilio.com/docs/proxy/api/participant)
   * resource.
   */
  inboundParticipantSid?: string | null;
  /**
   * The SID of the inbound resource; either the
   * [Call](https://www.twilio.com/docs/voice/api/call-resource) or
   * [Message](https://www.twilio.com/docs/sms/api/message-resource).
   */
  inboundResourceSid?: string | null;
  /**
   * The inbound resource status of the Interaction. Will always be `delivered` for messages and
   * `in-progress` for calls.
   */
  inboundResourceStatus?: InteractionEnumResourceStatus;
  /**
   * The inbound resource type. Can be [Call](https://www.twilio.com/docs/voice/api/call-resource)
   * or [Message](https://www.twilio.com/docs/sms/api/message-resource).
   */
  inboundResourceType?: string | null;
  /** The URL of the Twilio inbound resource */
  inboundResourceUrl?: string | null;
  /** The SID of the outbound [Participant](https://www.twilio.com/docs/proxy/api/participant)). */
  outboundParticipantSid?: string | null;
  /**
   * The SID of the outbound resource; either the
   * [Call](https://www.twilio.com/docs/voice/api/call-resource) or
   * [Message](https://www.twilio.com/docs/sms/api/message-resource).
   */
  outboundResourceSid?: string | null;
  /**
   * The inbound resource status of the Interaction. Will always be `delivered` for messages and
   * `in-progress` for calls.
   */
  outboundResourceStatus?: InteractionEnumResourceStatus;
  /**
   * The outbound resource type. Can be: [Call](https://www.twilio.com/docs/voice/api/call-resource)
   * or [Message](https://www.twilio.com/docs/sms/api/message-resource).
   */
  outboundResourceType?: string | null;
  /** The URL of the Twilio outbound resource. */
  outboundResourceUrl?: string | null;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the
   * Interaction was created.
   */
  dateCreated?: Date | null;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource
   * was last updated.
   */
  dateUpdated?: Date | null;
  /** The absolute URL of the Interaction resource. */
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
