import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Fetch flow test users
   *
   * @remarks
   * Fetch flow test users
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchTestUser(
    request: StudioV2FlowTestUserApi.FetchTestUserRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV2FlowTestUser, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/v2/Flows/{Sid}/TestUsers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV2FlowTestUserSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update flow test users
   *
   * @remarks
   * Update flow test users
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTestUser(
    request: StudioV2FlowTestUserApi.UpdateTestUserRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV2FlowTestUser, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default11("/v2/Flows/{Sid}/TestUsers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "TestUsers", value: request.testUsers, schema: s.array(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: studioV2FlowTestUserSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StudioV2FlowTestUserApi {
  export type FetchTestUserRequest = {
    /** Unique identifier of the flow. */
    sid: string;
  };

  export type UpdateTestUserRequest = {
    /** Unique identifier of the flow. */
    sid: string;
    /** List of test user identities that can test draft versions of the flow. */
    testUsers: string[];
  };
}
