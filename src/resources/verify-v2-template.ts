import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  listVerificationTemplate(
    request: VerifyV2Template.ListVerificationTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<ListVerificationTemplateResponse, ResponseError> {
    return this.#rawClient.execute<ListVerificationTemplateResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Templates"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listVerificationTemplateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2Template {
  export type ListVerificationTemplateRequest = {
    friendlyName?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
