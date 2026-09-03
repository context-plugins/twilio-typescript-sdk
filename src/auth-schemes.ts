import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { basicAuth } from "./core/auth/schemes.js";

export type AuthSchemes = {
  readonly accountSidAuthToken: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    accountSidAuthToken: basicAuth(options.accountSidAuthToken),
  };
}
