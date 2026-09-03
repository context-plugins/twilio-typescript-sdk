import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createReplaceItems(
    request: NumbersV2ReplaceItems.CreateReplaceItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundleReplaceItems, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceBundleReplaceItems, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/ReplaceItems"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FromBundleSid", value: request.fromBundleSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleReplaceItemsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV2ReplaceItems {
  export type CreateReplaceItemsRequest = {
    bundleSid: string;
    fromBundleSid: string;
  };
}
