import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listUsAppToPersonResponseSchema,
  type ListUsAppToPersonResponse,
} from "../models/list-us-app-to-person-response.js";
import {
  messagingV1ServiceUsAppToPersonResponseSchema,
  type MessagingV1ServiceUsAppToPersonResponse,
} from "../models/unions/messaging-v1-service-us-app-to-person-response.js";
import type { Servers } from "../servers.js";

export class MessagingV1UsAppToPerson {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * A service for (fetch/create/delete) A2P Campaign for a Messaging Service
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUsAppToPerson(
    request: MessagingV1UsAppToPerson.CreateUsAppToPersonRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceUsAppToPersonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/Services/{MessagingServiceSid}/Compliance/Usa2p"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-Twilio-Api-Version", value: request.xTwilioApiVersion, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "BrandRegistrationSid", value: request.brandRegistrationSid, schema: s.string() },
            { name: "Description", value: request.description, schema: s.string() },
            { name: "MessageFlow", value: request.messageFlow, schema: s.string() },
            { name: "MessageSamples", value: request.messageSamples, schema: s.array(s.string()) },
            { name: "UsAppToPersonUsecase", value: request.usAppToPersonUsecase, schema: s.string() },
            { name: "HasEmbeddedLinks", value: request.hasEmbeddedLinks, schema: s.boolean() },
            { name: "HasEmbeddedPhone", value: request.hasEmbeddedPhone, schema: s.boolean() },
            { name: "OptInMessage", value: request.optInMessage, schema: s.optional(s.string()) },
            { name: "OptOutMessage", value: request.optOutMessage, schema: s.optional(s.string()) },
            { name: "HelpMessage", value: request.helpMessage, schema: s.optional(s.string()) },
            { name: "OptInKeywords", value: request.optInKeywords, schema: s.optional(s.array(s.string())) },
            {
              name: "OptOutKeywords",
              value: request.optOutKeywords,
              schema: s.optional(s.array(s.string())),
            },
            { name: "HelpKeywords", value: request.helpKeywords, schema: s.optional(s.array(s.string())) },
            { name: "SubscriberOptIn", value: request.subscriberOptIn, schema: s.optional(s.boolean()) },
            { name: "AgeGated", value: request.ageGated, schema: s.optional(s.boolean()) },
            { name: "DirectLending", value: request.directLending, schema: s.optional(s.boolean()) },
            { name: "PrivacyPolicyUrl", value: request.privacyPolicyUrl, schema: s.optional(s.string()) },
            {
              name: "TermsAndConditionsUrl",
              value: request.termsAndConditionsUrl,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceUsAppToPersonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A service for (fetch/create/delete) A2P Campaign for a Messaging Service
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteUsAppToPerson(
    request: MessagingV1UsAppToPerson.DeleteUsAppToPersonRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
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
   * A service for (fetch/create/delete) A2P Campaign for a Messaging Service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchUsAppToPerson(
    request: MessagingV1UsAppToPerson.FetchUsAppToPersonRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceUsAppToPersonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "X-Twilio-Api-Version", value: request.xTwilioApiVersion, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceUsAppToPersonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A service for (fetch/create/delete) A2P Campaign for a Messaging Service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUsAppToPerson(
    request: MessagingV1UsAppToPerson.ListUsAppToPersonRequest,
    options?: RequestOptions,
  ): ApiPromise<ListUsAppToPersonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Services/{MessagingServiceSid}/Compliance/Usa2p"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "X-Twilio-Api-Version", value: request.xTwilioApiVersion, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listUsAppToPersonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A service for (fetch/create/delete) A2P Campaign for a Messaging Service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUsAppToPerson(
    request: MessagingV1UsAppToPerson.UpdateUsAppToPersonRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceUsAppToPersonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "X-Twilio-Api-Version", value: request.xTwilioApiVersion, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "HasEmbeddedLinks", value: request.hasEmbeddedLinks, schema: s.boolean() },
            { name: "HasEmbeddedPhone", value: request.hasEmbeddedPhone, schema: s.boolean() },
            { name: "MessageSamples", value: request.messageSamples, schema: s.array(s.string()) },
            { name: "MessageFlow", value: request.messageFlow, schema: s.string() },
            { name: "Description", value: request.description, schema: s.string() },
            { name: "AgeGated", value: request.ageGated, schema: s.boolean() },
            { name: "DirectLending", value: request.directLending, schema: s.boolean() },
            { name: "PrivacyPolicyUrl", value: request.privacyPolicyUrl, schema: s.optional(s.string()) },
            {
              name: "TermsAndConditionsUrl",
              value: request.termsAndConditionsUrl,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceUsAppToPersonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1UsAppToPerson {
  export type CreateUsAppToPersonRequest = {
    /**
     * The SID of the [Messaging
     * Service](https://www.twilio.com/docs/messaging/api/service-resource) to create the resources
     * from.
     */
    messagingServiceSid: string;
    /** The version of the Messaging API to use for this request */
    xTwilioApiVersion?: string;
    /** A2P Brand Registration SID */
    brandRegistrationSid: string;
    /**
     * A short description of what this SMS campaign does. Min length: 40 characters. Max length:
     * 4096 characters.
     */
    description: string;
    /**
     * Required for all Campaigns. Details around how a consumer opts-in to their campaign,
     * therefore giving consent to receive their messages. If multiple opt-in methods can be used
     * for the same campaign, they must all be listed. 40 character minimum. 2048 character maximum.
     */
    messageFlow: string;
    /**
     * An array of sample message strings, min two and max five. Min length for each sample: 20
     * chars. Max length for each sample: 1024 chars.
     */
    messageSamples: string[];
    /** A2P Campaign Use Case. Examples: [ 2FA, EMERGENCY, MARKETING..] */
    usAppToPersonUsecase: string;
    /** Indicates that this SMS campaign will send messages that contain links. */
    hasEmbeddedLinks: boolean;
    /** Indicates that this SMS campaign will send messages that contain phone numbers. */
    hasEmbeddedPhone: boolean;
    /**
     * If end users can text in a keyword to start receiving messages from this campaign, the
     * auto-reply messages sent to the end users must be provided. The opt-in response should
     * include the Brand name, confirmation of opt-in enrollment to a recurring message campaign,
     * how to get help, and clear description of how to opt-out. This field is required if end users
     * can text in a keyword to start receiving messages from this campaign. 20 character minimum.
     * 320 character maximum.
     */
    optInMessage?: string;
    /**
     * Upon receiving the opt-out keywords from the end users, Twilio customers are expected to send
     * back an auto-generated response, which must provide acknowledgment of the opt-out request and
     * confirmation that no further messages will be sent. It is also recommended that these opt-out
     * messages include the brand name. This field is required if managing opt out keywords yourself
     * (i.e. not using Twilio's Default or Advanced Opt Out features). 20 character minimum. 320
     * character maximum.
     */
    optOutMessage?: string;
    /**
     * When customers receive the help keywords from their end users, Twilio customers are expected
     * to send back an auto-generated response; this may include the brand name and additional
     * support contact information. This field is required if managing help keywords yourself (i.e.
     * not using Twilio's Default or Advanced Opt Out features). 20 character minimum. 320 character
     * maximum.
     */
    helpMessage?: string;
    /**
     * If end users can text in a keyword to start receiving messages from this campaign, those
     * keywords must be provided. This field is required if end users can text in a keyword to start
     * receiving messages from this campaign. Values must be alphanumeric. 255 character maximum.
     */
    optInKeywords?: string[];
    /**
     * End users should be able to text in a keyword to stop receiving messages from this campaign.
     * Those keywords must be provided. This field is required if managing opt out keywords yourself
     * (i.e. not using Twilio's Default or Advanced Opt Out features). Values must be alphanumeric.
     * 255 character maximum.
     */
    optOutKeywords?: string[];
    /**
     * End users should be able to text in a keyword to receive help. Those keywords must be
     * provided as part of the campaign registration request. This field is required if managing
     * help keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). Values
     * must be alphanumeric. 255 character maximum.
     */
    helpKeywords?: string[];
    /** A boolean that specifies whether campaign has Subscriber Optin or not. */
    subscriberOptIn?: boolean;
    /** A boolean that specifies whether campaign is age gated or not. */
    ageGated?: boolean;
    /** A boolean that specifies whether campaign allows direct lending or not. */
    directLending?: boolean;
    /** The URL of the privacy policy for the campaign. */
    privacyPolicyUrl?: string;
    /** The URL of the terms and conditions for the campaign. */
    termsAndConditionsUrl?: string;
  };

  export type DeleteUsAppToPersonRequest = {
    /**
     * The SID of the [Messaging
     * Service](https://www.twilio.com/docs/messaging/api/service-resource) to delete the resource
     * from.
     */
    messagingServiceSid: string;
    /** The SID of the US A2P Compliance resource to delete `QE2c6890da8086d771620e9b13fadeba0b`. */
    sid: string;
  };

  export type FetchUsAppToPersonRequest = {
    /**
     * The SID of the [Messaging
     * Service](https://www.twilio.com/docs/messaging/api/service-resource) to fetch the resource
     * from.
     */
    messagingServiceSid: string;
    /** The SID of the US A2P Compliance resource to fetch `QE2c6890da8086d771620e9b13fadeba0b`. */
    sid: string;
    /** The version of the Messaging API to use for this request */
    xTwilioApiVersion?: string;
  };

  export type ListUsAppToPersonRequest = {
    /**
     * The SID of the [Messaging
     * Service](https://www.twilio.com/docs/messaging/api/service-resource) to fetch the resource
     * from.
     */
    messagingServiceSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
    /** The version of the Messaging API to use for this request */
    xTwilioApiVersion?: string;
  };

  export type UpdateUsAppToPersonRequest = {
    /**
     * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services/api) to
     * update the resource from.
     */
    messagingServiceSid: string;
    /** The SID of the US A2P Compliance resource to update `QE2c6890da8086d771620e9b13fadeba0b`. */
    sid: string;
    /** The version of the Messaging API to use for this request */
    xTwilioApiVersion?: string;
    /** Indicates that this SMS campaign will send messages that contain links. */
    hasEmbeddedLinks: boolean;
    /** Indicates that this SMS campaign will send messages that contain phone numbers. */
    hasEmbeddedPhone: boolean;
    /**
     * An array of sample message strings, min two and max five. Min length for each sample: 20
     * chars. Max length for each sample: 1024 chars.
     */
    messageSamples: string[];
    /**
     * Required for all Campaigns. Details around how a consumer opts-in to their campaign,
     * therefore giving consent to receive their messages. If multiple opt-in methods can be used
     * for the same campaign, they must all be listed. 40 character minimum. 2048 character maximum.
     */
    messageFlow: string;
    /**
     * A short description of what this SMS campaign does. Min length: 40 characters. Max length:
     * 4096 characters.
     */
    description: string;
    /** A boolean that specifies whether campaign requires age gate for federally legal content. */
    ageGated: boolean;
    /** A boolean that specifies whether campaign allows direct lending or not. */
    directLending: boolean;
    /** The URL of the privacy policy for the campaign. */
    privacyPolicyUrl?: string;
    /** The URL of the terms and conditions for the campaign. */
    termsAndConditionsUrl?: string;
  };
}
