import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Creates a new clone of the Bundle in target Account. It will internally create clones of all
   * the bundle items (identities and documents) of the original bundle
   *
   * @remarks
   * Creates a new clone of the Bundle in target Account. It will internally create clones of all
   * the bundle items (identities and documents) of the original bundle
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBundleClone(
    request: NumbersV2BundleCloneApi.CreateBundleCloneRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2BundleClone, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/Clones"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV2BundleCloneApi {
  export type CreateBundleCloneRequest = {
    /** The unique string that identifies the Bundle to be cloned. */
    bundleSid: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) where the bundle needs
     * to be cloned.
     */
    targetAccountSid: string;
    /**
     * If set to true, the cloned bundle will be in the DRAFT state, else it will be twilio-approved
     */
    moveToDraft?: boolean;
    /** The string that you assigned to describe the cloned bundle. */
    friendlyName?: string;
  };
}
