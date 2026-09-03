import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { flowEnumStatusSchema, type FlowEnumStatus } from "../models/flow-enum-status.js";
import { listFlowResponse1Schema, type ListFlowResponse1 } from "../models/list-flow-response1.js";
import { studioV2FlowSchema, type StudioV2Flow } from "../models/studio-v2-flow.js";
import type { Servers } from "../servers.js";

export class StudioV2FlowApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createFlow(
    request: StudioV2FlowApi.CreateFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV2Flow, ResponseError> {
    return this.#rawClient.execute<StudioV2Flow, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default11("/v2/Flows"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Status", value: request.status, schema: flowEnumStatusSchema },
            { name: "Definition", value: request.definition, schema: s.record(s.string(), s.unknown()) },
            { name: "CommitMessage", value: request.commitMessage, schema: s.optional(s.string()) },
            { name: "AuthorSid", value: request.authorSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: studioV2FlowSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteFlow2(
    request: StudioV2FlowApi.DeleteFlow2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default11("/v2/Flows/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchFlow2(
    request: StudioV2FlowApi.FetchFlow2Request,
    options?: RequestOptions,
  ): ApiPromise<StudioV2Flow, ResponseError> {
    return this.#rawClient.execute<StudioV2Flow, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v2/Flows/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV2FlowSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listFlow2(
    request: StudioV2FlowApi.ListFlow2Request,
    options?: RequestOptions,
  ): ApiPromise<ListFlowResponse1, ResponseError> {
    return this.#rawClient.execute<ListFlowResponse1, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v2/Flows"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listFlowResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateFlow(
    request: StudioV2FlowApi.UpdateFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV2Flow, ResponseError> {
    return this.#rawClient.execute<StudioV2Flow, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default11("/v2/Flows/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Status", value: request.status, schema: flowEnumStatusSchema },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            {
              name: "Definition",
              value: request.definition,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
            { name: "CommitMessage", value: request.commitMessage, schema: s.optional(s.string()) },
            { name: "AuthorSid", value: request.authorSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: studioV2FlowSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StudioV2FlowApi {
  export type CreateFlowRequest = {
    friendlyName: string;
    status: FlowEnumStatus;
    definition: Record<string, unknown>;
    commitMessage?: string;
    authorSid?: string;
  };

  export type DeleteFlow2Request = {
    sid: string;
  };

  export type FetchFlow2Request = {
    sid: string;
  };

  export type ListFlow2Request = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateFlowRequest = {
    sid: string;
    status: FlowEnumStatus;
    friendlyName?: string;
    definition?: Record<string, unknown>;
    commitMessage?: string;
    authorSid?: string;
  };
}
