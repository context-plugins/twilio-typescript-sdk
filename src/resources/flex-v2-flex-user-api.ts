import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  fetchFlexUser(
    request: FlexV2FlexUserApi.FetchFlexUserRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV2FlexUser, ResponseError> {
    return this.#rawClient.execute<FlexV2FlexUser, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v2/Instances/{InstanceSid}/Users/{FlexUserSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InstanceSid", value: request.instanceSid, schema: s.string() },
          { name: "FlexUserSid", value: request.flexUserSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV2FlexUserSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateFlexUser(
    request: FlexV2FlexUserApi.UpdateFlexUserRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV2FlexUser, ResponseError> {
    return this.#rawClient.execute<FlexV2FlexUser, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v2/Instances/{InstanceSid}/Users/{FlexUserSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InstanceSid", value: request.instanceSid, schema: s.string() },
          { name: "FlexUserSid", value: request.flexUserSid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV2FlexUserApi {
  export type FetchFlexUserRequest = {
    instanceSid: string;
    flexUserSid: string;
  };

  export type UpdateFlexUserRequest = {
    instanceSid: string;
    flexUserSid: string;
    email?: string;
    userSid?: string;
    locale?: string;
  };
}
