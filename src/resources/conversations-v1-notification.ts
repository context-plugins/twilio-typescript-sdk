import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Fetch push notification service settings
   *
   * @remarks
   * Fetch push notification service settings
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchServiceNotification(
    request: ConversationsV1Notification.FetchServiceNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConfigurationServiceNotification, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Configuration/Notifications"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConfigurationServiceNotificationSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update push notification service settings
   *
   * @remarks
   * Update push notification service settings
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateServiceNotification(
    request: ConversationsV1Notification.UpdateServiceNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConfigurationServiceNotification, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Configuration/Notifications"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ConversationsV1Notification {
  export type FetchServiceNotificationRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Configuration
     * applies to.
     */
    chatServiceSid: string;
  };

  export type UpdateServiceNotificationRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Configuration
     * applies to.
     */
    chatServiceSid: string;
    /** Weather the notification logging is enabled. */
    logEnabled?: boolean;
    /**
     * Whether to send a notification when a new message is added to a conversation. The default is
     * `false`.
     */
    newMessageEnabled?: boolean;
    /**
     * The template to use to create the notification text displayed when a new message is added to
     * a conversation and `new_message.enabled` is `true`.
     */
    newMessageTemplate?: string;
    /**
     * The name of the sound to play when a new message is added to a conversation and
     * `new_message.enabled` is `true`.
     */
    newMessageSound?: string;
    /** Whether the new message badge is enabled. The default is `false`. */
    newMessageBadgeCountEnabled?: boolean;
    /**
     * Whether to send a notification when a participant is added to a conversation. The default is
     * `false`.
     */
    addedToConversationEnabled?: boolean;
    /**
     * The template to use to create the notification text displayed when a participant is added to
     * a conversation and `added_to_conversation.enabled` is `true`.
     */
    addedToConversationTemplate?: string;
    /**
     * The name of the sound to play when a participant is added to a conversation and
     * `added_to_conversation.enabled` is `true`.
     */
    addedToConversationSound?: string;
    /**
     * Whether to send a notification to a user when they are removed from a conversation. The
     * default is `false`.
     */
    removedFromConversationEnabled?: boolean;
    /**
     * The template to use to create the notification text displayed to a user when they are removed
     * from a conversation and `removed_from_conversation.enabled` is `true`.
     */
    removedFromConversationTemplate?: string;
    /**
     * The name of the sound to play to a user when they are removed from a conversation and
     * `removed_from_conversation.enabled` is `true`.
     */
    removedFromConversationSound?: string;
    /**
     * Whether to send a notification when a new message with media/file attachments is added to a
     * conversation. The default is `false`.
     */
    newMessageWithMediaEnabled?: boolean;
    /**
     * The template to use to create the notification text displayed when a new message with
     * media/file attachments is added to a conversation and `new_message.attachments.enabled` is
     * `true`.
     */
    newMessageWithMediaTemplate?: string;
  };
}
