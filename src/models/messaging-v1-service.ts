import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import {
  serviceEnumScanMessageContentSchema,
  type ServiceEnumScanMessageContent,
} from "./service-enum-scan-message-content.js";

export type MessagingV1Service = {
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  inboundRequestUrl?: string | null;
  inboundMethod?: AmdStatusCallbackMethod | null;
  fallbackUrl?: string | null;
  fallbackMethod?: AmdStatusCallbackMethod | null;
  statusCallback?: string | null;
  stickySender?: boolean | null;
  mmsConverter?: boolean | null;
  smartEncoding?: boolean | null;
  scanMessageContent?: ServiceEnumScanMessageContent;
  fallbackToLongCode?: boolean | null;
  areaCodeGeomatch?: boolean | null;
  synchronousValidation?: boolean | null;
  validityPeriod?: number;
  url?: string | null;
  links?: Record<string, unknown> | null;
  usecase?: string | null;
  usAppToPersonRegistered?: boolean | null;
  useInboundWebhookOnNumber?: boolean | null;
};

export const messagingV1ServiceSchema: Schema<MessagingV1Service> = s.object<MessagingV1Service>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  inboundRequestUrl: s.optionalNullable(s.string()),
  inboundMethod: s.optionalNullable(s.lazy(() => amdStatusCallbackMethodSchema)),
  fallbackUrl: s.optionalNullable(s.string()),
  fallbackMethod: s.optionalNullable(s.lazy(() => amdStatusCallbackMethodSchema)),
  statusCallback: s.optionalNullable(s.string()),
  stickySender: s.optionalNullable(s.boolean()),
  mmsConverter: s.optionalNullable(s.boolean()),
  smartEncoding: s.optionalNullable(s.boolean()),
  scanMessageContent: s.optional(s.lazy(() => serviceEnumScanMessageContentSchema)),
  fallbackToLongCode: s.optionalNullable(s.boolean()),
  areaCodeGeomatch: s.optionalNullable(s.boolean()),
  synchronousValidation: s.optionalNullable(s.boolean()),
  validityPeriod: s.optional(s.number()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  usecase: s.optionalNullable(s.string()),
  usAppToPersonRegistered: s.optionalNullable(s.boolean()),
  useInboundWebhookOnNumber: s.optionalNullable(s.boolean()),
  _keysMap: {
    accountSid: "account_sid",
    friendlyName: "friendly_name",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    inboundRequestUrl: "inbound_request_url",
    inboundMethod: "inbound_method",
    fallbackUrl: "fallback_url",
    fallbackMethod: "fallback_method",
    statusCallback: "status_callback",
    stickySender: "sticky_sender",
    mmsConverter: "mms_converter",
    smartEncoding: "smart_encoding",
    scanMessageContent: "scan_message_content",
    fallbackToLongCode: "fallback_to_long_code",
    areaCodeGeomatch: "area_code_geomatch",
    synchronousValidation: "synchronous_validation",
    validityPeriod: "validity_period",
    usAppToPersonRegistered: "us_app_to_person_registered",
    useInboundWebhookOnNumber: "use_inbound_webhook_on_number",
  },
});
