import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createUsAppToPerson(
    request: MessagingV1UsAppToPerson.CreateUsAppToPersonRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceUsAppToPersonResponse, ResponseError> {
    return this.#rawClient.execute<MessagingV1ServiceUsAppToPersonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/Services/{MessagingServiceSid}/Compliance/Usa2p"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        headers: [
          { name: "X-Twilio-Api-Version", value: request.xTwilioApiVersion, schema: s.optional(s.string()) },
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteUsAppToPerson(
    request: MessagingV1UsAppToPerson.DeleteUsAppToPersonRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default1("/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchUsAppToPerson(
    request: MessagingV1UsAppToPerson.FetchUsAppToPersonRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceUsAppToPersonResponse, ResponseError> {
    return this.#rawClient.execute<MessagingV1ServiceUsAppToPersonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        headers: [
          { name: "X-Twilio-Api-Version", value: request.xTwilioApiVersion, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceUsAppToPersonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listUsAppToPerson(
    request: MessagingV1UsAppToPerson.ListUsAppToPersonRequest,
    options?: RequestOptions,
  ): ApiPromise<ListUsAppToPersonResponse, ResponseError> {
    return this.#rawClient.execute<ListUsAppToPersonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services/{MessagingServiceSid}/Compliance/Usa2p"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "X-Twilio-Api-Version", value: request.xTwilioApiVersion, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listUsAppToPersonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateUsAppToPerson(
    request: MessagingV1UsAppToPerson.UpdateUsAppToPersonRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceUsAppToPersonResponse, ResponseError> {
    return this.#rawClient.execute<MessagingV1ServiceUsAppToPersonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        headers: [
          { name: "X-Twilio-Api-Version", value: request.xTwilioApiVersion, schema: s.optional(s.string()) },
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1UsAppToPerson {
  export type CreateUsAppToPersonRequest = {
    messagingServiceSid: string;
    xTwilioApiVersion?: string;
    brandRegistrationSid: string;
    description: string;
    messageFlow: string;
    messageSamples: string[];
    usAppToPersonUsecase: string;
    hasEmbeddedLinks: boolean;
    hasEmbeddedPhone: boolean;
    optInMessage?: string;
    optOutMessage?: string;
    helpMessage?: string;
    optInKeywords?: string[];
    optOutKeywords?: string[];
    helpKeywords?: string[];
    subscriberOptIn?: boolean;
    ageGated?: boolean;
    directLending?: boolean;
    privacyPolicyUrl?: string;
    termsAndConditionsUrl?: string;
  };

  export type DeleteUsAppToPersonRequest = {
    messagingServiceSid: string;
    sid: string;
  };

  export type FetchUsAppToPersonRequest = {
    messagingServiceSid: string;
    sid: string;
    xTwilioApiVersion?: string;
  };

  export type ListUsAppToPersonRequest = {
    messagingServiceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
    xTwilioApiVersion?: string;
  };

  export type UpdateUsAppToPersonRequest = {
    messagingServiceSid: string;
    sid: string;
    xTwilioApiVersion?: string;
    hasEmbeddedLinks: boolean;
    hasEmbeddedPhone: boolean;
    messageSamples: string[];
    messageFlow: string;
    description: string;
    ageGated: boolean;
    directLending: boolean;
    privacyPolicyUrl?: string;
    termsAndConditionsUrl?: string;
  };
}
