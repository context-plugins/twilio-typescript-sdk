import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationMessageReceiptEnumDeliveryStatusSchema,
  type ConversationMessageReceiptEnumDeliveryStatus,
} from "./conversation-message-receipt-enum-delivery-status.js";

export type ConversationsV1ConversationConversationMessageConversationMessageReceipt = {
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
   * this participant.
   */
  accountSid?: string | null;
  /**
   * The unique ID of the
   * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
   * message.
   */
  conversationSid?: string | null;
  /** A 34 character string that uniquely identifies this resource. */
  sid?: string | null;
  /**
   * The SID of the message within a
   * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) the
   * delivery receipt belongs to
   */
  messageSid?: string | null;
  /**
   * A messaging channel-specific identifier for the message delivered to participant e.g. `SMxx`
   * for SMS, `WAxx` for Whatsapp etc.
   */
  channelMessageSid?: string | null;
  /** The unique ID of the participant the delivery receipt belongs to. */
  participantSid?: string | null;
  /**
   * The message delivery status, can be `read`, `failed`, `delivered`, `undelivered`, `sent` or
   * null.
   */
  status?: ConversationMessageReceiptEnumDeliveryStatus;
  /**
   * The message [delivery error
   * code](https://www.twilio.com/docs/sms/api/message-resource#delivery-related-errors) for a
   * `failed` status,
   *
   * @default 0
   */
  errorCode?: number;
  /** The date that this resource was created. */
  dateCreated?: Date | null;
  /**
   * The date that this resource was last updated. `null` if the delivery receipt has not been
   * updated.
   */
  dateUpdated?: Date | null;
  /** An absolute API resource URL for this delivery receipt. */
  url?: string | null;
};

export const conversationsV1ConversationConversationMessageConversationMessageReceiptSchema: Schema<ConversationsV1ConversationConversationMessageConversationMessageReceipt> =
  s.object<ConversationsV1ConversationConversationMessageConversationMessageReceipt>({
    accountSid: s.optionalNullable(s.string()),
    conversationSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    messageSid: s.optionalNullable(s.string()),
    channelMessageSid: s.optionalNullable(s.string()),
    participantSid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => conversationMessageReceiptEnumDeliveryStatusSchema)),
    errorCode: s.defaulted(s.int(), 0),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      conversationSid: "conversation_sid",
      messageSid: "message_sid",
      channelMessageSid: "channel_message_sid",
      participantSid: "participant_sid",
      errorCode: "error_code",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
