import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import {
  serviceEnumScanMessageContentSchema,
  type ServiceEnumScanMessageContent,
} from "./service-enum-scan-message-content.js";

export type MessagingV1Service = {
  /** The unique string that we created to identify the Service resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service
   * resource.
   */
  accountSid?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /**
   * The URL we call using `inbound_method` when a message is received by any phone number or short
   * code in the Service. When this property is `null`, receiving inbound messages is disabled. All
   * messages sent to the Twilio phone number or short code will not be logged and received on the
   * Account. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined
   * on the phone number will override the `inbound_request_url` defined for the Messaging Service.
   */
  inboundRequestUrl?: string | null;
  /** The HTTP method we use to call `inbound_request_url`. Can be `GET` or `POST`. */
  inboundMethod?: AmdStatusCallbackMethod | null;
  /**
   * The URL that we call using `fallback_method` if an error occurs while retrieving or executing
   * the TwiML from the Inbound Request URL. If the `use_inbound_webhook_on_number` field is enabled
   * then the webhook url defined on the phone number will override the `fallback_url` defined for
   * the Messaging Service.
   */
  fallbackUrl?: string | null;
  /** The HTTP method we use to call `fallback_url`. Can be: `GET` or `POST`. */
  fallbackMethod?: AmdStatusCallbackMethod | null;
  /**
   * The URL we call to [pass status
   * updates](https://www.twilio.com/docs/sms/api/message-resource#message-status-values) about
   * message delivery.
   */
  statusCallback?: string | null;
  /**
   * Whether to enable [Sticky Sender](https://www.twilio.com/docs/messaging/services#sticky-sender)
   * on the Service instance.
   */
  stickySender?: boolean | null;
  /**
   * Whether to enable the [MMS
   * Converter](https://www.twilio.com/docs/messaging/services#mms-converter) for messages sent
   * through the Service instance.
   */
  mmsConverter?: boolean | null;
  /**
   * Whether to enable [Smart
   * Encoding](https://www.twilio.com/docs/messaging/services#smart-encoding) for messages sent
   * through the Service instance.
   */
  smartEncoding?: boolean | null;
  /** Reserved. */
  scanMessageContent?: ServiceEnumScanMessageContent;
  /**
   * [OBSOLETE] Former feature used to fallback to long code sender after certain short code message
   * failures.
   */
  fallbackToLongCode?: boolean | null;
  /**
   * Whether to enable [Area Code
   * Geomatch](https://www.twilio.com/docs/messaging/services#area-code-geomatch) on the Service
   * Instance.
   */
  areaCodeGeomatch?: boolean | null;
  /** Reserved. */
  synchronousValidation?: boolean | null;
  /**
   * How long, in seconds, messages sent from the Service are valid. Can be an integer from `1` to
   * `36,000`. Default value is `36,000`.
   *
   * @default 0
   */
  validityPeriod?: number;
  /** The absolute URL of the Service resource. */
  url?: string | null;
  /** The absolute URLs of related resources. */
  links?: Record<string, unknown> | null;
  /**
   * A string that describes the scenario in which the Messaging Service will be used. Possible
   * values are `notifications`, `marketing`, `verification`, `discussion`, `poll`, `undeclared`.
   */
  usecase?: string | null;
  /** Whether US A2P campaign is registered for this Service. */
  usAppToPersonRegistered?: boolean | null;
  /**
   * A boolean value that indicates either the webhook url configured on the phone number will be
   * used or `inbound_request_url`/`fallback_url` url will be called when a message is received from
   * the phone number. If this field is enabled then the webhook url defined on the phone number
   * will override the `inbound_request_url`/`fallback_url` defined for the Messaging Service.
   */
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
  validityPeriod: s.defaulted(s.int(), 0),
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
