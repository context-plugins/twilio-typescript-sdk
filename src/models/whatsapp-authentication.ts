import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationActionSchema, type AuthenticationAction } from "./authentication-action.js";

/** whatsApp/authentication templates let companies deliver WA approved one-time-password button. */
export type WhatsappAuthentication = {
  addSecurityRecommendation?: boolean;
  codeExpirationMinutes?: number;
  actions: AuthenticationAction[];
};

export const whatsappAuthenticationSchema: Schema<WhatsappAuthentication> = s.object<WhatsappAuthentication>({
  addSecurityRecommendation: s.optional(s.boolean()),
  codeExpirationMinutes: s.optional(s.float64()),
  actions: s.array(s.lazy(() => authenticationActionSchema)),
  _keysMap: {
    addSecurityRecommendation: "add_security_recommendation",
    codeExpirationMinutes: "code_expiration_minutes",
  },
});
