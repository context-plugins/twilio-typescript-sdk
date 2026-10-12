import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  listRegulationResponseSchema,
  type ListRegulationResponse,
} from "../models/list-regulation-response.js";
import {
  numbersV2RegulatoryComplianceRegulationSchema,
  type NumbersV2RegulatoryComplianceRegulation,
} from "../models/numbers-v2-regulatory-compliance-regulation.js";
import {
  regulationEnumEndUserTypeSchema,
  type RegulationEnumEndUserType,
} from "../models/regulation-enum-end-user-type.js";
import type { Servers } from "../servers.js";

export class NumbersV2Regulation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch specific Regulation Instance.
   *
   * @remarks
   * Fetch specific Regulation Instance.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRegulation(
    request: NumbersV2Regulation.FetchRegulationRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceRegulation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Regulations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [
          { name: "IncludeConstraints", value: request.includeConstraints, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceRegulationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Regulations.
   *
   * @remarks
   * Retrieve a list of all Regulations.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRegulation(
    request: NumbersV2Regulation.ListRegulationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRegulationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Regulations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          {
            name: "EndUserType",
            value: request.endUserType,
            schema: s.optional(s.lazy(() => regulationEnumEndUserTypeSchema)),
          },
          { name: "IsoCountry", value: request.isoCountry, schema: s.optional(s.string()) },
          { name: "NumberType", value: request.numberType, schema: s.optional(s.string()) },
          { name: "IncludeConstraints", value: request.includeConstraints, schema: s.optional(s.boolean()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRegulationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV2Regulation {
  export type FetchRegulationRequest = {
    /** The unique string that identifies the Regulation resource. */
    sid: string;
    /**
     * A boolean parameter indicating whether to include constraints or not for supporting end user,
     * documents and their fields
     */
    includeConstraints?: boolean;
  };

  export type ListRegulationRequest = {
    /** The type of End User the regulation requires - can be `individual` or `business`. */
    endUserType?: RegulationEnumEndUserType;
    /** The ISO country code of the phone number's country. */
    isoCountry?: string;
    /** The type of phone number that the regulatory requiremnt is restricting. */
    numberType?: string;
    /**
     * A boolean parameter indicating whether to include constraints or not for supporting end user,
     * documents and their fields
     */
    includeConstraints?: boolean;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
