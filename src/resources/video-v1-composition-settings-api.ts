import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  videoV1CompositionSettingsSchema,
  type VideoV1CompositionSettings,
} from "../models/video-v1-composition-settings.js";
import type { Servers } from "../servers.js";

export class VideoV1CompositionSettingsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createCompositionSettings(
    request: VideoV1CompositionSettingsApi.CreateCompositionSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1CompositionSettings, ResponseError> {
    return this.#rawClient.execute<VideoV1CompositionSettings, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default6("/v1/CompositionSettings/Default"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "AwsCredentialsSid", value: request.awsCredentialsSid, schema: s.optional(s.string()) },
            { name: "EncryptionKeySid", value: request.encryptionKeySid, schema: s.optional(s.string()) },
            { name: "AwsS3Url", value: request.awsS3Url, schema: s.optional(s.string()) },
            { name: "AwsStorageEnabled", value: request.awsStorageEnabled, schema: s.optional(s.boolean()) },
            { name: "EncryptionEnabled", value: request.encryptionEnabled, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: videoV1CompositionSettingsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchCompositionSettings(options?: RequestOptions): ApiPromise<VideoV1CompositionSettings, ResponseError> {
    return this.#rawClient.execute<VideoV1CompositionSettings, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/CompositionSettings/Default"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1CompositionSettingsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideoV1CompositionSettingsApi {
  export type CreateCompositionSettingsRequest = {
    friendlyName: string;
    awsCredentialsSid?: string;
    encryptionKeySid?: string;
    awsS3Url?: string;
    awsStorageEnabled?: boolean;
    encryptionEnabled?: boolean;
  };
}
