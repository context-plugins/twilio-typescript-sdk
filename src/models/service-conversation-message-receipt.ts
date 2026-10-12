import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  serviceConversationMessageReceiptEnumDeliveryStatusSchema,
  type ServiceConversationMessageReceiptEnumDeliveryStatus,
} from "./service-conversation-message-receipt-enum-delivery-status.js";

export type ServiceConversationMessageReceipt = {
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
   * this participant.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Conversation
   * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Message resource
   * is associated with.
   */
  chatServiceSid?: string | null;
  /**
   * The unique ID of the
   * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
   * message.
   */
  conversationSid?: string | null;
  /**
   * The SID of the message within a
   * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) the
   * delivery receipt belongs to
   */
  messageSid?: string | null;
  /** A 34 character string that uniquely identifies this resource. */
  sid?: string | null;
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
  status?: ServiceConversationMessageReceiptEnumDeliveryStatus;
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

export const serviceConversationMessageReceiptSchema: Schema<ServiceConversationMessageReceipt> =
  s.object<ServiceConversationMessageReceipt>({
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    conversationSid: s.optionalNullable(s.string()),
    messageSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    channelMessageSid: s.optionalNullable(s.string()),
    participantSid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => serviceConversationMessageReceiptEnumDeliveryStatusSchema)),
    errorCode: s.defaulted(s.int(), 0),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      chatServiceSid: "chat_service_sid",
      conversationSid: "conversation_sid",
      messageSid: "message_sid",
      channelMessageSid: "channel_message_sid",
      participantSid: "participant_sid",
      errorCode: "error_code",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
