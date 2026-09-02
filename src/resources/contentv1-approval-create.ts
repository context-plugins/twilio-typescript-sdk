import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  contentApprovalRequestSchema,
  type ContentApprovalRequest,
} from "../models/content-approval-request.js";
import {
  contentV1ContentApprovalCreateSchema,
  type ContentV1ContentApprovalCreate,
} from "../models/content-v1-content-approval-create.js";
import type { Servers } from "../servers.js";

export class Contentv1ApprovalCreate {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createApprovalCreate(
    request: Contentv1ApprovalCreate.CreateApprovalCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ContentV1ContentApprovalCreate, ResponseError> {
    return this.#rawClient.execute<ContentV1ContentApprovalCreate, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default2("/v1/Content/{ContentSid}/ApprovalRequests/whatsapp"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ContentSid", value: request.contentSid, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contentApprovalRequestSchema },
      },
      {
        success: { kind: "json", schema: contentV1ContentApprovalCreateSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Contentv1ApprovalCreate {
  export type CreateApprovalCreateRequest = {
    contentSid: string;
    body: ContentApprovalRequest;
  };
}
