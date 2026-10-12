import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Create Content Approval Request
   *
   * @remarks
   * Create a ContentApprovalRequest for a content item
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createApprovalCreate(
    request: Contentv1ApprovalCreate.CreateApprovalCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ContentV1ContentApprovalCreate, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default2("/v1/Content/{ContentSid}/ApprovalRequests/whatsapp"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ContentSid", value: request.contentSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contentApprovalRequestSchema },
      },
      {
        success: { kind: "json", schema: contentV1ContentApprovalCreateSchema },
        errorFactory: ApiError,
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
