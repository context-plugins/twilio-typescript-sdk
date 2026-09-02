import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/index.js";
import { basicAuth } from "./core/index.js";

export type AuthSchemes = {
  readonly accountSidAuthToken: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    accountSidAuthToken: basicAuth(options.accountSidAuthToken),
  };
}
