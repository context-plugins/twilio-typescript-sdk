import type { BasicAuthCredentials } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * This API uses [basic
   * authentication](https://www.twilio.com/docs/glossary/what-is-basic-authentication). Use an [API
   * key](https://www.twilio.com/docs/iam/api-keys) as the username and the API key secret as the
   * password. You can also use your account SID and auth token, but limit their use to local
   * testing.
   */
  readonly accountSidAuthToken?: BasicAuthCredentials | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    default?: {
      baseUrl?: string;
    };
    default1?: {
      baseUrl?: string;
    };
    default2?: {
      baseUrl?: string;
    };
    default3?: {
      baseUrl?: string;
    };
    default4?: {
      baseUrl?: string;
    };
    default5?: {
      baseUrl?: string;
    };
    default6?: {
      baseUrl?: string;
    };
    default7?: {
      baseUrl?: string;
    };
    default8?: {
      baseUrl?: string;
    };
    default9?: {
      baseUrl?: string;
    };
    default10?: {
      baseUrl?: string;
    };
    default11?: {
      baseUrl?: string;
    };
    default12?: {
      baseUrl?: string;
    };
    default13?: {
      baseUrl?: string;
    };
    default14?: {
      baseUrl?: string;
    };
  };
};
