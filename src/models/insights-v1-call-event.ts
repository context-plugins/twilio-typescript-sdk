import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventEnumLevelSchema, type EventEnumLevel } from "./event-enum-level.js";
import { eventEnumTwilioEdgeSchema, type EventEnumTwilioEdge } from "./event-enum-twilio-edge.js";

export type InsightsV1CallEvent = {
  /** Event time. */
  timestamp?: string | null;
  /** The unique SID identifier of the Call. */
  callSid?: string | null;
  /** The unique SID identifier of the Account. */
  accountSid?: string | null;
  edge?: EventEnumTwilioEdge;
  /** Event group. */
  group?: string | null;
  level?: EventEnumLevel;
  /** Event name. */
  name?: string | null;
  /**
   * `object` Represents the connection between Twilio and our immediate carrier partners. The
   * events here describe the call lifecycle as reported by Twilio's carrier media gateways. See
   * [Details: Call
   * Summary](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-summary#edges-and-their-properties)
   * for the object properties.
   */
  carrierEdge?: Record<string, unknown> | null;
  /**
   * `object` Represents the Twilio media gateway for SIP interface and SIP trunking calls. The
   * events here describe the call lifecycle as reported by Twilio's public media gateways. See
   * [Details: Call
   * Summary](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-summary#edges-and-their-properties)
   * for the object properties.
   */
  sipEdge?: Record<string, unknown> | null;
  /**
   * `object` Represents the Voice SDK running locally in the browser or in the Android/iOS
   * application. The events here are emitted by the Voice SDK in response to certain call progress
   * events, network changes, or call quality conditions. See [Details: Call
   * Summary](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-summary#edges-and-their-properties)
   * for the object properties.
   */
  sdkEdge?: Record<string, unknown> | null;
  /**
   * `object` Represents the Twilio media gateway for Client calls. The events here describe the
   * call lifecycle as reported by Twilio's Voice SDK media gateways. See [Details: Call
   * Summary](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-summary#edges-and-their-properties)
   * for the object properties.
   */
  clientEdge?: Record<string, unknown> | null;
};

export const insightsV1CallEventSchema: Schema<InsightsV1CallEvent> = s.object<InsightsV1CallEvent>({
  timestamp: s.optionalNullable(s.string()),
  callSid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  edge: s.optional(s.lazy(() => eventEnumTwilioEdgeSchema)),
  group: s.optionalNullable(s.string()),
  level: s.optional(s.lazy(() => eventEnumLevelSchema)),
  name: s.optionalNullable(s.string()),
  carrierEdge: s.optionalNullable(s.record(s.string(), s.unknown())),
  sipEdge: s.optionalNullable(s.record(s.string(), s.unknown())),
  sdkEdge: s.optionalNullable(s.record(s.string(), s.unknown())),
  clientEdge: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    callSid: "call_sid",
    accountSid: "account_sid",
    carrierEdge: "carrier_edge",
    sipEdge: "sip_edge",
    sdkEdge: "sdk_edge",
    clientEdge: "client_edge",
  },
});
