import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  amdStatusCallbackMethodSchema,
  type AmdStatusCallbackMethod,
} from "../models/amd-status-callback-method.js";
import { listServiceResponseSchema, type ListServiceResponse } from "../models/list-service-response.js";
import { messagingV1ServiceSchema, type MessagingV1Service } from "../models/messaging-v1-service.js";
import {
  serviceEnumScanMessageContentSchema,
  type ServiceEnumScanMessageContent,
} from "../models/service-enum-scan-message-content.js";
import type { Servers } from "../servers.js";

export class MessagingV1ServiceApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * A Messaging Service resource to create, fetch, update, delete or add/remove senders from
   * Messaging Services.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createService(
    request: MessagingV1ServiceApi.CreateServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1Service, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/Services"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "InboundRequestUrl", value: request.inboundRequestUrl, schema: s.optional(s.string()) },
            {
              name: "InboundMethod",
              value: request.inboundMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "FallbackUrl", value: request.fallbackUrl, schema: s.optional(s.string()) },
            {
              name: "FallbackMethod",
              value: request.fallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            { name: "StickySender", value: request.stickySender, schema: s.optional(s.boolean()) },
            { name: "MmsConverter", value: request.mmsConverter, schema: s.optional(s.boolean()) },
            { name: "SmartEncoding", value: request.smartEncoding, schema: s.optional(s.boolean()) },
            {
              name: "ScanMessageContent",
              value: request.scanMessageContent,
              schema: s.optional(s.lazy(() => serviceEnumScanMessageContentSchema)),
            },
            {
              name: "FallbackToLongCode",
              value: request.fallbackToLongCode,
              schema: s.optional(s.boolean()),
            },
            { name: "AreaCodeGeomatch", value: request.areaCodeGeomatch, schema: s.optional(s.boolean()) },
            { name: "ValidityPeriod", value: request.validityPeriod, schema: s.optional(s.int()) },
            {
              name: "SynchronousValidation",
              value: request.synchronousValidation,
              schema: s.optional(s.boolean()),
            },
            { name: "Usecase", value: request.usecase, schema: s.optional(s.string()) },
            {
              name: "UseInboundWebhookOnNumber",
              value: request.useInboundWebhookOnNumber,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to create, fetch, update, delete or add/remove senders from
   * Messaging Services.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteService(
    request: MessagingV1ServiceApi.DeleteServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
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
   * A Messaging Service resource to create, fetch, update, delete or add/remove senders from
   * Messaging Services.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchService(
    request: MessagingV1ServiceApi.FetchServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1Service, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to create, fetch, update, delete or add/remove senders from
   * Messaging Services.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listService(
    request: MessagingV1ServiceApi.ListServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Services"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to create, fetch, update, delete or add/remove senders from
   * Messaging Services.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateService(
    request: MessagingV1ServiceApi.UpdateServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1Service, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "InboundRequestUrl", value: request.inboundRequestUrl, schema: s.optional(s.string()) },
            {
              name: "InboundMethod",
              value: request.inboundMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "FallbackUrl", value: request.fallbackUrl, schema: s.optional(s.string()) },
            {
              name: "FallbackMethod",
              value: request.fallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            { name: "StickySender", value: request.stickySender, schema: s.optional(s.boolean()) },
            { name: "MmsConverter", value: request.mmsConverter, schema: s.optional(s.boolean()) },
            { name: "SmartEncoding", value: request.smartEncoding, schema: s.optional(s.boolean()) },
            {
              name: "ScanMessageContent",
              value: request.scanMessageContent,
              schema: s.optional(s.lazy(() => serviceEnumScanMessageContentSchema)),
            },
            {
              name: "FallbackToLongCode",
              value: request.fallbackToLongCode,
              schema: s.optional(s.boolean()),
            },
            { name: "AreaCodeGeomatch", value: request.areaCodeGeomatch, schema: s.optional(s.boolean()) },
            { name: "ValidityPeriod", value: request.validityPeriod, schema: s.optional(s.int()) },
            {
              name: "SynchronousValidation",
              value: request.synchronousValidation,
              schema: s.optional(s.boolean()),
            },
            { name: "Usecase", value: request.usecase, schema: s.optional(s.string()) },
            {
              name: "UseInboundWebhookOnNumber",
              value: request.useInboundWebhookOnNumber,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1ServiceApi {
  export type CreateServiceRequest = {
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters
     * long.
     */
    friendlyName: string;
    /**
     * The URL we call using `inbound_method` when a message is received by any phone number or
     * short code in the Service. When this property is `null`, receiving inbound messages is
     * disabled. All messages sent to the Twilio phone number or short code will not be logged and
     * received on the Account. If the `use_inbound_webhook_on_number` field is enabled then the
     * webhook url defined on the phone number will override the `inbound_request_url` defined for
     * the Messaging Service.
     */
    inboundRequestUrl?: string;
    /**
     * The HTTP method we should use to call `inbound_request_url`. Can be `GET` or `POST` and the
     * default is `POST`.
     */
    inboundMethod?: AmdStatusCallbackMethod;
    /**
     * The URL that we call using `fallback_method` if an error occurs while retrieving or executing
     * the TwiML from the Inbound Request URL. If the `use_inbound_webhook_on_number` field is
     * enabled then the webhook url defined on the phone number will override the `fallback_url`
     * defined for the Messaging Service.
     */
    fallbackUrl?: string;
    /** The HTTP method we should use to call `fallback_url`. Can be: `GET` or `POST`. */
    fallbackMethod?: AmdStatusCallbackMethod;
    /**
     * The URL we should call to [pass status
     * updates](https://www.twilio.com/docs/sms/api/message-resource#message-status-values) about
     * message delivery.
     */
    statusCallback?: string;
    /**
     * Whether to enable [Sticky
     * Sender](https://www.twilio.com/docs/messaging/services#sticky-sender) on the Service
     * instance.
     */
    stickySender?: boolean;
    /**
     * Whether to enable the [MMS
     * Converter](https://www.twilio.com/docs/messaging/services#mms-converter) for messages sent
     * through the Service instance.
     */
    mmsConverter?: boolean;
    /**
     * Whether to enable [Smart
     * Encoding](https://www.twilio.com/docs/messaging/services#smart-encoding) for messages sent
     * through the Service instance.
     */
    smartEncoding?: boolean;
    /** Reserved. */
    scanMessageContent?: ServiceEnumScanMessageContent;
    /**
     * [OBSOLETE] Former feature used to fallback to long code sender after certain short code
     * message failures.
     */
    fallbackToLongCode?: boolean;
    /**
     * Whether to enable [Area Code
     * Geomatch](https://www.twilio.com/docs/messaging/services#area-code-geomatch) on the Service
     * Instance.
     */
    areaCodeGeomatch?: boolean;
    /**
     * How long, in seconds, messages sent from the Service are valid. Can be an integer from `1` to
     * `36,000`. Default value is `36,000`.
     */
    validityPeriod?: number;
    /** Reserved. */
    synchronousValidation?: boolean;
    /**
     * A string that describes the scenario in which the Messaging Service will be used. Possible
     * values are `notifications`, `marketing`, `verification`, `discussion`, `poll`, `undeclared`.
     */
    usecase?: string;
    /**
     * A boolean value that indicates either the webhook url configured on the phone number will be
     * used or `inbound_request_url`/`fallback_url` url will be called when a message is received
     * from the phone number. If this field is enabled then the webhook url defined on the phone
     * number will override the `inbound_request_url`/`fallback_url` defined for the Messaging
     * Service.
     */
    useInboundWebhookOnNumber?: boolean;
  };

  export type DeleteServiceRequest = {
    /** The SID of the Service resource to delete. */
    sid: string;
  };

  export type FetchServiceRequest = {
    /** The SID of the Service resource to fetch. */
    sid: string;
  };

  export type ListServiceRequest = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateServiceRequest = {
    /** The SID of the Service resource to update. */
    sid: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters
     * long.
     */
    friendlyName?: string;
    /**
     * The URL we call using `inbound_method` when a message is received by any phone number or
     * short code in the Service. When this property is `null`, receiving inbound messages is
     * disabled. All messages sent to the Twilio phone number or short code will not be logged and
     * received on the Account. If the `use_inbound_webhook_on_number` field is enabled then the
     * webhook url defined on the phone number will override the `inbound_request_url` defined for
     * the Messaging Service.
     */
    inboundRequestUrl?: string;
    /**
     * The HTTP method we should use to call `inbound_request_url`. Can be `GET` or `POST` and the
     * default is `POST`.
     */
    inboundMethod?: AmdStatusCallbackMethod;
    /**
     * The URL that we call using `fallback_method` if an error occurs while retrieving or executing
     * the TwiML from the Inbound Request URL. If the `use_inbound_webhook_on_number` field is
     * enabled then the webhook url defined on the phone number will override the `fallback_url`
     * defined for the Messaging Service.
     */
    fallbackUrl?: string;
    /** The HTTP method we should use to call `fallback_url`. Can be: `GET` or `POST`. */
    fallbackMethod?: AmdStatusCallbackMethod;
    /**
     * The URL we should call to [pass status
     * updates](https://www.twilio.com/docs/sms/api/message-resource#message-status-values) about
     * message delivery.
     */
    statusCallback?: string;
    /**
     * Whether to enable [Sticky
     * Sender](https://www.twilio.com/docs/messaging/services#sticky-sender) on the Service
     * instance.
     */
    stickySender?: boolean;
    /**
     * Whether to enable the [MMS
     * Converter](https://www.twilio.com/docs/messaging/services#mms-converter) for messages sent
     * through the Service instance.
     */
    mmsConverter?: boolean;
    /**
     * Whether to enable [Smart
     * Encoding](https://www.twilio.com/docs/messaging/services#smart-encoding) for messages sent
     * through the Service instance.
     */
    smartEncoding?: boolean;
    /** Reserved. */
    scanMessageContent?: ServiceEnumScanMessageContent;
    /**
     * [OBSOLETE] Former feature used to fallback to long code sender after certain short code
     * message failures.
     */
    fallbackToLongCode?: boolean;
    /**
     * Whether to enable [Area Code
     * Geomatch](https://www.twilio.com/docs/messaging/services#area-code-geomatch) on the Service
     * Instance.
     */
    areaCodeGeomatch?: boolean;
    /**
     * How long, in seconds, messages sent from the Service are valid. Can be an integer from `1` to
     * `36,000`. Default value is `36,000`.
     */
    validityPeriod?: number;
    /** Reserved. */
    synchronousValidation?: boolean;
    /**
     * A string that describes the scenario in which the Messaging Service will be used. Possible
     * values are `notifications`, `marketing`, `verification`, `discussion`, `poll`, `undeclared`.
     */
    usecase?: string;
    /**
     * A boolean value that indicates either the webhook url configured on the phone number will be
     * used or `inbound_request_url`/`fallback_url` url will be called when a message is received
     * from the phone number. If this field is enabled then the webhook url defined on the phone
     * number will override the `inbound_request_url`/`fallback_url` defined for the Messaging
     * Service.
     */
    useInboundWebhookOnNumber?: boolean;
  };
}
