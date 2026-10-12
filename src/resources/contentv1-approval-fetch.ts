import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  contentV1ContentApprovalFetchSchema,
  type ContentV1ContentApprovalFetch,
} from "../models/content-v1-content-approval-fetch.js";
import type { Servers } from "../servers.js";

export class Contentv1ApprovalFetch {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch Approval Status
   *
   * @remarks
   * Fetch a Content resource's approval status by its unique Content Sid
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchApprovalFetch(
    request: Contentv1ApprovalFetch.FetchApprovalFetchRequest,
    options?: RequestOptions,
  ): ApiPromise<ContentV1ContentApprovalFetch, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default2("/v1/Content/{Sid}/ApprovalRequests"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contentV1ContentApprovalFetchSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Contentv1ApprovalFetch {
  export type FetchApprovalFetchRequest = {
    /**
     * The Twilio-provided string that uniquely identifies the Content resource whose approval
     * information to fetch.
     */
    sid: string;
  };
}
