import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Status for email provisioning
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchProvisioningStatus(options?: RequestOptions): ApiPromise<FlexV1ProvisioningStatus, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/account/provision/status"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1ProvisioningStatusSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
