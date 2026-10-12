import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  serviceEnumGeoMatchLevelSchema,
  type ServiceEnumGeoMatchLevel,
} from "./service-enum-geo-match-level.js";
import {
  serviceEnumNumberSelectionBehaviorSchema,
  type ServiceEnumNumberSelectionBehavior,
} from "./service-enum-number-selection-behavior.js";

export type ProxyV1Service = {
  /** The unique string that we created to identify the Service resource. */
  sid?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource. This value must be 191
   * characters or fewer in length and be unique. Supports UTF-8 characters. **This value should not
   * have PII.**
   */
  uniqueName?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service
   * resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the Chat Service Instance managed by Proxy Service. The Chat Service enables Proxy
   * to forward SMS and channel messages to this chat instance. This is a one-to-one relationship.
   */
  chatInstanceSid?: string | null;
  /** The URL we call when the interaction status changes. */
  callbackUrl?: string | null;
  /**
   * The default `ttl` value for Sessions created in the Service. The TTL (time to live) is measured
   * in seconds after the Session's last create or last Interaction. The default value of `0`
   * indicates an unlimited Session length. You can override a Session's default TTL value by
   * setting its `ttl` value.
   *
   * @default 0
   */
  defaultTtl?: number;
  /**
   * The preference for Proxy Number selection in the Service instance. Can be: `prefer-sticky` or
   * `avoid-sticky`. `prefer-sticky` means that we will try and select the same Proxy Number for a
   * given participant if they have previous
   * [Sessions](https://www.twilio.com/docs/proxy/api/session), but we will not fail if that Proxy
   * Number cannot be used. `avoid-sticky` means that we will try to use different Proxy Numbers as
   * long as that is possible within a given pool rather than try and use a previously assigned
   * number.
   */
  numberSelectionBehavior?: ServiceEnumNumberSelectionBehavior;
  /**
   * Where a proxy number must be located relative to the participant identifier. Can be: `country`,
   * `area-code`, or `extended-area-code`. The default value is `country` and more specific areas
   * than `country` are only available in North America.
   */
  geoMatchLevel?: ServiceEnumGeoMatchLevel;
  /**
   * The URL we call on each interaction. If we receive a 403 status, we block the interaction;
   * otherwise the interaction continues.
   */
  interceptCallbackUrl?: string | null;
  /**
   * The URL we call when an inbound call or SMS action occurs on a closed or non-existent Session.
   * If your server (or a Twilio [function](https://www.twilio.com/en-us/serverless/functions))
   * responds with valid [TwiML](https://www.twilio.com/docs/voice/twiml), we will process it. This
   * means it is possible, for example, to play a message for a call, send an automated text message
   * response, or redirect a call to another Phone Number. See [Out-of-Session Callback Response
   * Guide](https://www.twilio.com/docs/proxy/out-session-callback-response-guide) for more
   * information.
   */
  outOfSessionCallbackUrl?: string | null;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource
   * was created.
   */
  dateCreated?: Date | null;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource
   * was last updated.
   */
  dateUpdated?: Date | null;
  /** The absolute URL of the Service resource. */
  url?: string | null;
  /** The URLs of resources related to the Service. */
  links?: Record<string, unknown> | null;
};

export const proxyV1ServiceSchema: Schema<ProxyV1Service> = s.object<ProxyV1Service>({
  sid: s.optionalNullable(s.string()),
  uniqueName: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  chatInstanceSid: s.optionalNullable(s.string()),
  callbackUrl: s.optionalNullable(s.string()),
  defaultTtl: s.defaulted(s.int(), 0),
  numberSelectionBehavior: s.optional(s.lazy(() => serviceEnumNumberSelectionBehaviorSchema)),
  geoMatchLevel: s.optional(s.lazy(() => serviceEnumGeoMatchLevelSchema)),
  interceptCallbackUrl: s.optionalNullable(s.string()),
  outOfSessionCallbackUrl: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    uniqueName: "unique_name",
    accountSid: "account_sid",
    chatInstanceSid: "chat_instance_sid",
    callbackUrl: "callback_url",
    defaultTtl: "default_ttl",
    numberSelectionBehavior: "number_selection_behavior",
    geoMatchLevel: "geo_match_level",
    interceptCallbackUrl: "intercept_callback_url",
    outOfSessionCallbackUrl: "out_of_session_callback_url",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
