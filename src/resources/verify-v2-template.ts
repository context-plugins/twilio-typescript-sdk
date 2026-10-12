import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  listVerificationTemplateResponseSchema,
  type ListVerificationTemplateResponse,
} from "../models/list-verification-template-response.js";
import type { Servers } from "../servers.js";

export class VerifyV2Template {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List all the available templates for a given Account.
   *
   * @remarks
   * List all the available templates for a given Account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listVerificationTemplate(
    request: VerifyV2Template.ListVerificationTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<ListVerificationTemplateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Templates"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listVerificationTemplateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2Template {
  export type ListVerificationTemplateRequest = {
    /** String filter used to query templates with a given friendly name. */
    friendlyName?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
