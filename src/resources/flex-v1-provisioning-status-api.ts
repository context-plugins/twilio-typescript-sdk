import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import {
  flexV1ProvisioningStatusSchema,
  type FlexV1ProvisioningStatus,
} from "../models/flex-v1-provisioning-status.js";
import type { Servers } from "../servers.js";

export class FlexV1ProvisioningStatusApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchProvisioningStatus(options?: RequestOptions): ApiPromise<FlexV1ProvisioningStatus, ResponseError> {
    return this.#rawClient.execute<FlexV1ProvisioningStatus, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/account/provision/status"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1ProvisioningStatusSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}
