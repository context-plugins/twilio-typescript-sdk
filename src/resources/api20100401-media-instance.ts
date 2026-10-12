import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountMessageMediaSchema,
  type ApiV2010AccountMessageMedia,
} from "../models/api-v2010-account-message-media.js";
import type { Servers } from "../servers.js";

export class Api20100401MediaInstance {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete the Media resource.
   *
   * @remarks
   * Delete the Media resource.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMedia(
    request: Api20100401MediaInstance.DeleteMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a single Media resource associated with a specific Message resource
   *
   * @remarks
   * Fetch a single Media resource associated with a specific Message resource
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchMedia(
    request: Api20100401MediaInstance.FetchMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountMessageMedia, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountMessageMediaSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401MediaInstance {
  export type DeleteMediaRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is associated with
     * the Media resource.
     */
    accountSid: string;
    /** The SID of the Message resource that is associated with the Media resource. */
    messageSid: string;
    /** The unique identifier of the to-be-deleted Media resource. */
    sid: string;
  };

  export type FetchMediaRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the
     * Media resource.
     */
    accountSid: string;
    /** The SID of the Message resource that is associated with the Media resource. */
    messageSid: string;
    /** The Twilio-provided string that uniquely identifies the Media resource to fetch. */
    sid: string;
  };
}
