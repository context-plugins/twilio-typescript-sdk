import { s, type Schema } from "../core/index.js";
import { authenticationActionSchema, type AuthenticationAction } from "./authentication-action.js";

export type WhatsappAuthentication = {
  addSecurityRecommendation?: boolean;
  codeExpirationMinutes?: number;
  actions: AuthenticationAction[];
};

export const whatsappAuthenticationSchema: Schema<WhatsappAuthentication> = s.object<WhatsappAuthentication>({
  addSecurityRecommendation: s.optional(s.boolean()),
  codeExpirationMinutes: s.optional(s.number()),
  actions: s.array(s.lazy(() => authenticationActionSchema)),
  _keysMap: {
    addSecurityRecommendation: "add_security_recommendation",
    codeExpirationMinutes: "code_expiration_minutes",
  },
});
