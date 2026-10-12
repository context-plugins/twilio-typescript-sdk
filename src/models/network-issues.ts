import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sdkSchema, type Sdk } from "./sdk.js";
import { twilioGatewaySchema, type TwilioGateway } from "./twilio-gateway.js";

/** Network-quality indicators for SDK and Twilio Gateway traffic during the report period. */
export type NetworkIssues = {
  /** Network issues of calls for client type. This is indicative of local network issues. */
  sdk?: Sdk;
  /** Network related metrics for Twilio Gateway calls only. */
  twilioGateway?: TwilioGateway;
};

export const networkIssuesSchema: Schema<NetworkIssues> = s.object<NetworkIssues>({
  sdk: s.optional(s.lazy(() => sdkSchema)),
  twilioGateway: s.optional(s.lazy(() => twilioGatewaySchema)),
  _keysMap: {
    twilioGateway: "twilio_gateway",
  },
});
