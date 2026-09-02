import { s, type Schema } from "../core/index.js";
import { sdkSchema, type Sdk } from "./sdk.js";
import { twilioGatewaySchema, type TwilioGateway } from "./twilio-gateway.js";

export type NetworkIssues = {
  sdk?: Sdk;
  twilioGateway?: TwilioGateway;
};

export const networkIssuesSchema: Schema<NetworkIssues> = s.object<NetworkIssues>({
  sdk: s.optional(s.lazy(() => sdkSchema)),
  twilioGateway: s.optional(s.lazy(() => twilioGatewaySchema)),
  _keysMap: {
    twilioGateway: "twilio_gateway",
  },
});
