import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  numbersV2RegulatoryComplianceBundleReplaceItemsSchema,
  type NumbersV2RegulatoryComplianceBundleReplaceItems,
} from "../models/numbers-v2-regulatory-compliance-bundle-replace-items.js";
import type { Servers } from "../servers.js";

export class NumbersV2ReplaceItems {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Replaces all bundle items in the target bundle (specified in the path) with all the bundle
   * items of the source bundle (specified by the from_bundle_sid body param)
   *
   * @remarks
   * Replaces all bundle items in the target bundle (specified in the path) with all the bundle
   * items of the source bundle (specified by the from_bundle_sid body param)
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createReplaceItems(
    request: NumbersV2ReplaceItems.CreateReplaceItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundleReplaceItems, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/ReplaceItems"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FromBundleSid", value: request.fromBundleSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleReplaceItemsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV2ReplaceItems {
  export type CreateReplaceItemsRequest = {
    /**
     * The unique string that identifies the Bundle where the item assignments are going to be
     * replaced.
     */
    bundleSid: string;
    /** The source bundle sid to copy the item assignments from. */
    fromBundleSid: string;
  };
}
