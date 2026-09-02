import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { numbersV2BundleCloneSchema, type NumbersV2BundleClone } from "../models/numbers-v2-bundle-clone.js";
import type { Servers } from "../servers.js";

export class NumbersV2BundleCloneApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createBundleClone(
    request: NumbersV2BundleCloneApi.CreateBundleCloneRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2BundleClone, ResponseError> {
    return this.#rawClient.execute<NumbersV2BundleClone, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/Clones"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "TargetAccountSid", value: request.targetAccountSid, schema: s.string() },
            { name: "MoveToDraft", value: request.moveToDraft, schema: s.optional(s.boolean()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: numbersV2BundleCloneSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV2BundleCloneApi {
  export type CreateBundleCloneRequest = {
    bundleSid: string;
    targetAccountSid: string;
    moveToDraft?: boolean;
    friendlyName?: string;
  };
}
