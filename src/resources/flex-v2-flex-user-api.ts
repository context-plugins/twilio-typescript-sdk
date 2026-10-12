import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { flexV2FlexUserSchema, type FlexV2FlexUser } from "../models/flex-v2-flex-user.js";
import type { Servers } from "../servers.js";

export class FlexV2FlexUserApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch flex user for the given flex user sid
   *
   * @remarks
   * Fetch flex user for the given flex user sid
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchFlexUser(
    request: FlexV2FlexUserApi.FetchFlexUserRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV2FlexUser, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v2/Instances/{InstanceSid}/Users/{FlexUserSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InstanceSid", value: request.instanceSid, schema: s.string() },
          { name: "FlexUserSid", value: request.flexUserSid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV2FlexUserSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update flex user for the given flex user sid
   *
   * @remarks
   * Update flex user for the given flex user sid
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFlexUser(
    request: FlexV2FlexUserApi.UpdateFlexUserRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV2FlexUser, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v2/Instances/{InstanceSid}/Users/{FlexUserSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InstanceSid", value: request.instanceSid, schema: s.string() },
          { name: "FlexUserSid", value: request.flexUserSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Email", value: request.email, schema: s.optional(s.string()) },
            { name: "UserSid", value: request.userSid, schema: s.optional(s.string()) },
            { name: "Locale", value: request.locale, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV2FlexUserSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV2FlexUserApi {
  export type FetchFlexUserRequest = {
    /** The unique ID created by Twilio to identify a Flex instance. */
    instanceSid: string;
    /** The unique id for the flex user to be retrieved. */
    flexUserSid: string;
  };

  export type UpdateFlexUserRequest = {
    /** The unique ID created by Twilio to identify a Flex instance. */
    instanceSid: string;
    /** The unique id for the flex user. */
    flexUserSid: string;
    /** Email of the User. */
    email?: string;
    /** The unique SID identifier of the Twilio Unified User. */
    userSid?: string;
    /** The locale preference of the user. */
    locale?: string;
  };
}
