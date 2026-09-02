import type { BasicAuthCredentials, FetchLike } from "./core/index.js";
import { ServerEnvironment, type ServerOptions } from "./servers.js";

export type ClientOptions = {
  readonly serverEnvironment: ServerEnvironment;
  readonly serverOptions: ServerOptions;
  readonly timeout: number;
  readonly fetch?: FetchLike | undefined;
  readonly accountSidAuthToken?: BasicAuthCredentials | undefined;
};

export const DEFAULT_CLIENT_OPTIONS: ClientOptions = {
  serverEnvironment: ServerEnvironment.Production,
  serverOptions: {},
  timeout: 60_000,
};
