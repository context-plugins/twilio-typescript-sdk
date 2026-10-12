import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountMessageSchema,
  type ApiV2010AccountMessage,
} from "../models/api-v2010-account-message.js";
import { listMessageResponseSchema, type ListMessageResponse } from "../models/list-message-response.js";
import {
  messageEnumAddressRetentionSchema,
  type MessageEnumAddressRetention,
} from "../models/message-enum-address-retention.js";
import {
  messageEnumContentRetentionSchema,
  type MessageEnumContentRetention,
} from "../models/message-enum-content-retention.js";
import { messageEnumRiskCheckSchema, type MessageEnumRiskCheck } from "../models/message-enum-risk-check.js";
import {
  messageEnumScheduleTypeSchema,
  type MessageEnumScheduleType,
} from "../models/message-enum-schedule-type.js";
import {
  messageEnumTrafficTypeSchema,
  type MessageEnumTrafficType,
} from "../models/message-enum-traffic-type.js";
import {
  messageEnumUpdateStatusSchema,
  type MessageEnumUpdateStatus,
} from "../models/message-enum-update-status.js";
import type { Servers } from "../servers.js";

export class Api20100401Message {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Send a message
   *
   * @remarks
   * Send a message
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMessage(
    request: Api20100401Message.CreateMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountMessage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Messages.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "To", value: request.to, schema: s.string() },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            { name: "ApplicationSid", value: request.applicationSid, schema: s.optional(s.string()) },
            { name: "MaxPrice", value: request.maxPrice, schema: s.optional(s.float64()) },
            { name: "ProvideFeedback", value: request.provideFeedback, schema: s.optional(s.boolean()) },
            { name: "Attempt", value: request.attempt, schema: s.optional(s.int()) },
            { name: "ValidityPeriod", value: request.validityPeriod, schema: s.optional(s.int()) },
            { name: "ForceDelivery", value: request.forceDelivery, schema: s.optional(s.boolean()) },
            {
              name: "ContentRetention",
              value: request.contentRetention,
              schema: s.optional(s.lazy(() => messageEnumContentRetentionSchema)),
            },
            {
              name: "AddressRetention",
              value: request.addressRetention,
              schema: s.optional(s.lazy(() => messageEnumAddressRetentionSchema)),
            },
            { name: "SmartEncoded", value: request.smartEncoded, schema: s.optional(s.boolean()) },
            {
              name: "PersistentAction",
              value: request.persistentAction,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "TrafficType",
              value: request.trafficType,
              schema: s.optional(s.lazy(() => messageEnumTrafficTypeSchema)),
            },
            { name: "ShortenUrls", value: request.shortenUrls, schema: s.optional(s.boolean()) },
            {
              name: "ScheduleType",
              value: request.scheduleType,
              schema: s.optional(s.lazy(() => messageEnumScheduleTypeSchema)),
            },
            { name: "SendAt", value: request.sendAt, schema: s.optional(s.dateTime()) },
            { name: "SendAsMms", value: request.sendAsMms, schema: s.optional(s.boolean()) },
            { name: "ContentVariables", value: request.contentVariables, schema: s.optional(s.string()) },
            {
              name: "RiskCheck",
              value: request.riskCheck,
              schema: s.optional(s.lazy(() => messageEnumRiskCheckSchema)),
            },
            { name: "From", value: request.from, schema: s.optional(s.string()) },
            { name: "FallbackFrom", value: request.fallbackFrom, schema: s.optional(s.string()) },
            {
              name: "MessagingServiceSid",
              value: request.messagingServiceSid,
              schema: s.optional(s.string()),
            },
            { name: "Body", value: request.body2, schema: s.optional(s.string()) },
            { name: "MediaUrl", value: request.mediaUrl, schema: s.optional(s.array(s.string())) },
            { name: "ContentSid", value: request.contentSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountMessageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Deletes a Message resource from your account
   *
   * @remarks
   * Deletes a Message resource from your account
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMessage(
    request: Api20100401Message.DeleteMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a specific Message
   *
   * @remarks
   * Fetch a specific Message
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchMessage(
    request: Api20100401Message.FetchMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountMessage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountMessageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of Message resources associated with a Twilio Account
   *
   * @remarks
   * Retrieve a list of Message resources associated with a Twilio Account
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMessage(
    request: Api20100401Message.ListMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMessageResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Messages.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "To", value: request.to, schema: s.optional(s.string()) },
          { name: "From", value: request.from, schema: s.optional(s.string()) },
          { name: "DateSent", value: request.dateSent, schema: s.optional(s.dateTime()) },
          { name: "DateSent<", value: request.dateSentQuery, schema: s.optional(s.dateTime()) },
          { name: "DateSent>", value: request.dateSentQueryQuery, schema: s.optional(s.dateTime()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMessageResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a Message resource (used to redact Message `body` text and to cancel not-yet-sent
   * messages)
   *
   * @remarks
   * Update a Message resource (used to redact Message `body` text and to cancel not-yet-sent
   * messages)
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMessage(
    request: Api20100401Message.UpdateMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountMessage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Body", value: request.body2, schema: s.optional(s.string()) },
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => messageEnumUpdateStatusSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountMessageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Message {
  export type CreateMessageRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) creating the Message
     * resource.
     */
    accountSid: string;
    /**
     * The recipient's phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164)
     * format (for SMS/MMS) or [channel address](https://www.twilio.com/docs/messaging/channels),
     * e.g. `whatsapp:+15552229999`.
     */
    to: string;
    /**
     * The URL of the endpoint to which Twilio sends [Message status callback
     * requests](https://www.twilio.com/docs/sms/api/message-resource#twilios-request-to-the-statuscallback-url).
     * URL must contain a valid hostname and underscores are not allowed. If you include this
     * parameter with the `messaging_service_sid`, Twilio uses this URL instead of the Status
     * Callback URL of the [Messaging
     * Service](https://www.twilio.com/docs/messaging/api/service-resource).
     */
    statusCallback?: string;
    /**
     * The SID of the associated [TwiML
     * Application](https://www.twilio.com/docs/usage/api/applications). [Message status callback
     * requests](https://www.twilio.com/docs/sms/api/message-resource#twilios-request-to-the-statuscallback-url)
     * are sent to the TwiML App's `message_status_callback` URL. Note that the `status_callback`
     * parameter of a request takes priority over the `application_sid` parameter; if both are
     * included `application_sid` is ignored.
     */
    applicationSid?: string;
    /** [OBSOLETE] This parameter will no longer have any effect as of 2024-06-03. */
    maxPrice?: number;
    /**
     * Boolean indicating whether or not you intend to provide delivery confirmation feedback to
     * Twilio (used in conjunction with the [Message Feedback
     * subresource](https://www.twilio.com/docs/sms/api/message-feedback-resource)). Default value
     * is `false`.
     */
    provideFeedback?: boolean;
    /**
     * Total number of attempts made (including this request) to send the message regardless of the
     * provider used
     */
    attempt?: number;
    /**
     * The maximum length in seconds that the Message can remain in Twilio's outgoing message queue.
     * If a queued Message exceeds the `validity_period`, the Message is not sent. Accepted values
     * are integers from `1` to `36000`. Default value is `36000`. A `validity_period` greater than
     * `5` is recommended. [Learn more about the validity
     * period](https://www.twilio.com/blog/take-more-control-of-outbound-messages-using-validity-period-html)
     */
    validityPeriod?: number;
    /** Reserved */
    forceDelivery?: boolean;
    /** Determines if the message content can be stored or redacted based on privacy settings */
    contentRetention?: MessageEnumContentRetention;
    /** Determines if the address can be stored or obfuscated based on privacy settings */
    addressRetention?: MessageEnumAddressRetention;
    /**
     * Whether to detect Unicode characters that have a similar GSM-7 character and replace them.
     * Can be: `true` or `false`.
     */
    smartEncoded?: boolean;
    /**
     * Rich actions for non-SMS/MMS channels. Used for [sending location in WhatsApp
     * messages](https://www.twilio.com/docs/whatsapp/message-features#location-messages-with-whatsapp).
     */
    persistentAction?: string[];
    trafficType?: MessageEnumTrafficType;
    /**
     * For Messaging Services with [Link Shortening
     * configured](https://www.twilio.com/docs/messaging/features/link-shortening) only: A Boolean
     * indicating whether or not Twilio should shorten links in the `body` of the Message. Default
     * value is `false`. If `true`, the `messaging_service_sid` parameter must also be provided.
     */
    shortenUrls?: boolean;
    /**
     * For Messaging Services only: Include this parameter with a value of `fixed` in conjuction
     * with the `send_time` parameter in order to [schedule a
     * Message](https://www.twilio.com/docs/messaging/features/message-scheduling).
     */
    scheduleType?: MessageEnumScheduleType;
    /** The time that Twilio will send the message. Must be in ISO 8601 format. */
    sendAt?: Date;
    /**
     * If set to `true`, Twilio delivers the message as a single MMS message, regardless of the
     * presence of media.
     */
    sendAsMms?: boolean;
    /**
     * For [Content Editor/API](https://www.twilio.com/docs/content) only: Key-value pairs of
     * [Template variables](https://www.twilio.com/docs/content/using-variables-with-content-api)
     * and their substitution values. `content_sid` parameter must also be provided. If values are
     * not defined in the `content_variables` parameter, the [Template's default placeholder
     * values](https://www.twilio.com/docs/content/content-api-resources#create-templates) are used.
     */
    contentVariables?: string;
    /**
     * Include this parameter with a value of `disable` to skip any kind of risk check on the
     * respective message request.
     */
    riskCheck?: MessageEnumRiskCheck;
    /**
     * The sender's Twilio phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format),
     * [alphanumeric sender ID](https://www.twilio.com/docs/sms/quickstart), [Wireless
     * SIM](https://www.twilio.com/docs/iot/wireless/programmable-wireless-send-machine-machine-sms-commands),
     * [short code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), or [channel
     * address](https://www.twilio.com/docs/messaging/channels) (e.g., `whatsapp:+15554449999`). The
     * value of the `from` parameter must be a sender that is hosted within Twilio and belongs to
     * the Account creating the Message. If you are using `messaging_service_sid`, this parameter
     * can be empty (Twilio assigns a `from` value from the Messaging Service's Sender Pool) or you
     * can provide a specific sender from your Sender Pool.
     */
    from?: string;
    /**
     * A fallback SMS sender to use when the recipient cannot be reached over RCS. This parameter
     * may only be used when also providing a [Messaging
     * Service](https://twilio.com/docs/messaging/services) containing an RCS sender. The fallback
     * SMS sender must be either a Twilio phone number (in
     * [E.164](https://en.wikipedia.org/wiki/E.164) format), [alphanumeric sender
     * ID](https://www.twilio.com/docs/sms/quickstart), or [short
     * code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), hosted within Twilio
     * and belong to the Account creating the Message.
     */
    fallbackFrom?: string;
    /**
     * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services) you want
     * to associate with the Message. When this parameter is provided and the `from` parameter is
     * omitted, Twilio selects the optimal sender from the Messaging Service's Sender Pool. You may
     * also provide a `from` parameter if you want to use a specific Sender from the Sender Pool.
     */
    messagingServiceSid?: string;
    /**
     * The text content of the outgoing message. Can be up to 1,600 characters in length. SMS only:
     * If the `body` contains more than 160
     * [GSM-7](https://www.twilio.com/docs/glossary/what-is-gsm-7-character-encoding) characters (or
     * 70 [UCS-2](https://www.twilio.com/docs/glossary/what-is-ucs-2-character-encoding)
     * characters), the message is segmented and charged accordingly. For long `body` text, consider
     * using the [send_as_mms parameter](https://www.twilio.com/blog/mms-for-long-text-messages).
     */
    body2?: string;
    /**
     * The URL of media to include in the Message content. `jpeg`, `jpg`, `gif`, and `png` file
     * types are fully supported by Twilio and content is formatted for delivery on destination
     * devices. The media size limit is 5 MB for supported file types (`jpeg`, `jpg`, `png`, `gif`)
     * and 500 KB for [other
     * types](https://www.twilio.com/docs/messaging/guides/accepted-mime-types) of accepted media.
     * To send more than one image in the message, provide multiple `media_url` parameters in the
     * POST request. You can include up to ten `media_url` parameters per message.
     * [International](https://support.twilio.com/hc/en-us/articles/223179808-Sending-and-receiving-MMS-messages)
     * and
     * [carrier](https://support.twilio.com/hc/en-us/articles/223133707-Is-MMS-supported-for-all-carriers-in-US-and-Canada-)
     * limits apply.
     */
    mediaUrl?: string[];
    /**
     * For [Content Editor/API](https://www.twilio.com/docs/content) only: The SID of the Content
     * Template to be used with the Message, e.g., `HXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`. If this
     * parameter is not provided, a Content Template is not used. Find the SID in the Console on the
     * Content Editor page. For Content API users, the SID is found in Twilio's response when
     * [creating the
     * Template](https://www.twilio.com/docs/content/content-api-resources#create-templates) or by
     * [fetching your
     * Templates](https://www.twilio.com/docs/content/content-api-resources#fetch-all-content-resources).
     */
    contentSid?: string;
  };

  export type DeleteMessageRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the
     * Message resource
     */
    accountSid: string;
    /** The SID of the Message resource you wish to delete */
    sid: string;
  };

  export type FetchMessageRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the
     * Message resource
     */
    accountSid: string;
    /** The SID of the Message resource to be fetched */
    sid: string;
  };

  export type ListMessageRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the
     * Message resources.
     */
    accountSid: string;
    /**
     * Filter by recipient. For example: Set this parameter to `+15558881111` to retrieve a list of
     * Message resources sent to `+15558881111`.
     */
    to?: string;
    /**
     * Filter by sender. For example: Set this parameter to `+15552229999` to retrieve a list of
     * Message resources sent by `+15552229999`.
     */
    from?: string;
    /**
     * Filter by Message `sent_date`. Accepts GMT dates in the following formats: `YYYY-MM-DD` (to
     * find Messages with a specific `sent_date`), `<=YYYY-MM-DD` (to find Messages with
     * `sent_date`s on and before a specific date), and `>=YYYY-MM-DD` (to find Messages with
     * `sent_dates` on and after a specific date).
     */
    dateSent?: Date;
    /**
     * Filter by Message `sent_date`. Accepts GMT dates in the following formats: `YYYY-MM-DD` (to
     * find Messages with a specific `sent_date`), `<=YYYY-MM-DD` (to find Messages with
     * `sent_date`s on and before a specific date), and `>=YYYY-MM-DD` (to find Messages with
     * `sent_dates` on and after a specific date).
     */
    dateSentQuery?: Date;
    /**
     * Filter by Message `sent_date`. Accepts GMT dates in the following formats: `YYYY-MM-DD` (to
     * find Messages with a specific `sent_date`), `<=YYYY-MM-DD` (to find Messages with
     * `sent_date`s on and before a specific date), and `>=YYYY-MM-DD` (to find Messages with
     * `sent_dates` on and after a specific date).
     */
    dateSentQueryQuery?: Date;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateMessageRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Message resources to update.
     */
    accountSid: string;
    /** The SID of the Message resource to be updated */
    sid: string;
    /**
     * The new `body` of the Message resource. To redact the text content of a Message, this
     * parameter's value must be an empty string
     */
    body2?: string;
    status?: MessageEnumUpdateStatus;
  };
}
