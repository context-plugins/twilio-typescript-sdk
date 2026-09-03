import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { studioV2FlowTestUserSchema, type StudioV2FlowTestUser } from "../models/studio-v2-flow-test-user.js";
import type { Servers } from "../servers.js";

export class StudioV2FlowTestUserApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchTestUser(
    request: StudioV2FlowTestUserApi.FetchTestUserRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV2FlowTestUser, ResponseError> {
    return this.#rawClient.execute<StudioV2FlowTestUser, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v2/Flows/{Sid}/TestUsers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV2FlowTestUserSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateTestUser(
    request: StudioV2FlowTestUserApi.UpdateTestUserRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV2FlowTestUser, ResponseError> {
    return this.#rawClient.execute<StudioV2FlowTestUser, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default11("/v2/Flows/{Sid}/TestUsers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "TestUsers", value: request.testUsers, schema: s.array(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: studioV2FlowTestUserSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StudioV2FlowTestUserApi {
  export type FetchTestUserRequest = {
    sid: string;
  };

  export type UpdateTestUserRequest = {
    sid: string;
    testUsers: string[];
  };
}
