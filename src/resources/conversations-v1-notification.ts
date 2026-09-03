import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  conversationsV1ServiceServiceConfigurationServiceNotificationSchema,
  type ConversationsV1ServiceServiceConfigurationServiceNotification,
} from "../models/conversations-v1-service-service-configuration-service-notification.js";
import type { Servers } from "../servers.js";

export class ConversationsV1Notification {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchServiceNotification(
    request: ConversationsV1Notification.FetchServiceNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConfigurationServiceNotification, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConfigurationServiceNotification, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Configuration/Notifications"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConfigurationServiceNotificationSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateServiceNotification(
    request: ConversationsV1Notification.UpdateServiceNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConfigurationServiceNotification, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConfigurationServiceNotification, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Configuration/Notifications"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "LogEnabled", value: request.logEnabled, schema: s.optional(s.boolean()) },
            { name: "NewMessage.Enabled", value: request.newMessageEnabled, schema: s.optional(s.boolean()) },
            {
              name: "NewMessage.Template",
              value: request.newMessageTemplate,
              schema: s.optional(s.string()),
            },
            { name: "NewMessage.Sound", value: request.newMessageSound, schema: s.optional(s.string()) },
            {
              name: "NewMessage.BadgeCountEnabled",
              value: request.newMessageBadgeCountEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "AddedToConversation.Enabled",
              value: request.addedToConversationEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "AddedToConversation.Template",
              value: request.addedToConversationTemplate,
              schema: s.optional(s.string()),
            },
            {
              name: "AddedToConversation.Sound",
              value: request.addedToConversationSound,
              schema: s.optional(s.string()),
            },
            {
              name: "RemovedFromConversation.Enabled",
              value: request.removedFromConversationEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "RemovedFromConversation.Template",
              value: request.removedFromConversationTemplate,
              schema: s.optional(s.string()),
            },
            {
              name: "RemovedFromConversation.Sound",
              value: request.removedFromConversationSound,
              schema: s.optional(s.string()),
            },
            {
              name: "NewMessage.WithMedia.Enabled",
              value: request.newMessageWithMediaEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "NewMessage.WithMedia.Template",
              value: request.newMessageWithMediaTemplate,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConfigurationServiceNotificationSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1Notification {
  export type FetchServiceNotificationRequest = {
    chatServiceSid: string;
  };

  export type UpdateServiceNotificationRequest = {
    chatServiceSid: string;
    logEnabled?: boolean;
    newMessageEnabled?: boolean;
    newMessageTemplate?: string;
    newMessageSound?: string;
    newMessageBadgeCountEnabled?: boolean;
    addedToConversationEnabled?: boolean;
    addedToConversationTemplate?: string;
    addedToConversationSound?: string;
    removedFromConversationEnabled?: boolean;
    removedFromConversationTemplate?: string;
    removedFromConversationSound?: string;
    newMessageWithMediaEnabled?: boolean;
    newMessageWithMediaTemplate?: string;
  };
}
