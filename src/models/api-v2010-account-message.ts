import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageEnumDirectionSchema, type MessageEnumDirection } from "./message-enum-direction.js";
import { messageEnumStatusSchema, type MessageEnumStatus } from "./message-enum-status.js";

export type ApiV2010AccountMessage = {
  /** The text content of the message */
  body?: string | null;
  /**
   * The number of segments that make up the complete message. SMS message bodies that exceed the
   * [character limit](https://www.twilio.com/docs/glossary/what-sms-character-limit) are segmented
   * and charged as multiple messages. Note: For messages sent via a Messaging Service,
   * `num_segments` is initially `0`, since a sender hasn't yet been assigned.
   */
  numSegments?: string | null;
  /**
   * The direction of the message. Can be: `inbound` for incoming messages, `outbound-api` for
   * messages created by the REST API, `outbound-call` for messages created during a call, or
   * `outbound-reply` for messages created in response to an incoming message.
   */
  direction?: MessageEnumDirection;
  /**
   * The sender's phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format),
   * [alphanumeric sender ID](https://www.twilio.com/docs/sms/quickstart), [Wireless
   * SIM](https://www.twilio.com/docs/iot/wireless/programmable-wireless-send-machine-machine-sms-commands),
   * [short code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), or [channel
   * address](https://www.twilio.com/docs/messaging/channels) (e.g., `whatsapp:+15554449999`). For
   * incoming messages, this is the number or channel address of the sender. For outgoing messages,
   * this value is a Twilio phone number, alphanumeric sender ID, short code, or channel address
   * from which the message is sent.
   */
  from?: string | null;
  /**
   * The recipient's phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format) or
   * [channel address](https://www.twilio.com/docs/messaging/channels) (e.g.
   * `whatsapp:+15552229999`)
   */
  to?: string | null;
  /**
   * The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of
   * when the Message resource was last updated
   */
  dateUpdated?: string | null;
  /**
   * The amount billed for the message in the currency specified by `price_unit`. The `price` is
   * populated after the message has been sent/received, and may not be immediately availalble. View
   * the [Pricing page](https://www.twilio.com/en-us/pricing) for more details.
   */
  price?: string | null;
  /**
   * The description of the `error_code` if the Message `status` is `failed` or `undelivered`. If no
   * error was encountered, the value is `null`. The value returned in this field for a specific
   * error cause is subject to change as Twilio improves errors. Users should not use the
   * `error_code` and `error_message` fields programmatically.
   */
  errorMessage?: string | null;
  /** The URI of the Message resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the
   * Message resource
   */
  accountSid?: string | null;
  /** The number of media files associated with the Message resource. */
  numMedia?: string | null;
  /**
   * The status of the Message. Possible values: `accepted`, `scheduled`, `canceled`, `queued`,
   * `sending`, `sent`, `failed`, `delivered`, `undelivered`, `receiving`, `received`, or `read`
   * (WhatsApp only). For more information, See [detailed
   * descriptions](https://www.twilio.com/docs/sms/api/message-resource#message-status-values).
   */
  status?: MessageEnumStatus;
  /**
   * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource)
   * associated with the Message resource. A unique default value is assigned if a Messaging Service
   * is not used.
   */
  messagingServiceSid?: string | null;
  /** The unique, Twilio-provided string that identifies the Message resource. */
  sid?: string | null;
  /**
   * The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of
   * when the Message was sent. For an outgoing message, this is when Twilio sent the message. For
   * an incoming message, this is when Twilio sent the HTTP request to your incoming message webhook
   * URL.
   */
  dateSent?: string | null;
  /**
   * The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of
   * when the Message resource was created
   */
  dateCreated?: string | null;
  /**
   * The [error code](https://www.twilio.com/docs/api/errors) returned if the Message `status` is
   * `failed` or `undelivered`. If no error was encountered, the value is `null`. The value returned
   * in this field for a specific error cause is subject to change as Twilio improves errors. Users
   * should not use the `error_code` and `error_message` fields programmatically.
   */
  errorCode?: number | null;
  /**
   * The currency in which `price` is measured, in [ISO
   * 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`,
   * `jpy`).
   */
  priceUnit?: string | null;
  /** The API version used to process the Message */
  apiVersion?: string | null;
  /** A list of related resources identified by their URIs relative to `https://api.twilio.com` */
  subresourceUris?: Record<string, unknown> | null;
};

export const apiV2010AccountMessageSchema: Schema<ApiV2010AccountMessage> = s.object<ApiV2010AccountMessage>({
  body: s.optionalNullable(s.string()),
  numSegments: s.optionalNullable(s.string()),
  direction: s.optional(s.lazy(() => messageEnumDirectionSchema)),
  from: s.optionalNullable(s.string()),
  to: s.optionalNullable(s.string()),
  dateUpdated: s.optionalNullable(s.string()),
  price: s.optionalNullable(s.string()),
  errorMessage: s.optionalNullable(s.string()),
  uri: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  numMedia: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => messageEnumStatusSchema)),
  messagingServiceSid: s.optionalNullable(s.string()),
  sid: s.optionalNullable(s.string()),
  dateSent: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.string()),
  errorCode: s.optionalNullable(s.int()),
  priceUnit: s.optionalNullable(s.string()),
  apiVersion: s.optionalNullable(s.string()),
  subresourceUris: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    numSegments: "num_segments",
    dateUpdated: "date_updated",
    errorMessage: "error_message",
    accountSid: "account_sid",
    numMedia: "num_media",
    messagingServiceSid: "messaging_service_sid",
    dateSent: "date_sent",
    dateCreated: "date_created",
    errorCode: "error_code",
    priceUnit: "price_unit",
    apiVersion: "api_version",
    subresourceUris: "subresource_uris",
  },
});
