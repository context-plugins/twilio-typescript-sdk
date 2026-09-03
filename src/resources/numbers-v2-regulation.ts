import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  fetchRegulation(
    request: NumbersV2Regulation.FetchRegulationRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceRegulation, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceRegulation, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Regulations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [
          { name: "IncludeConstraints", value: request.includeConstraints, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceRegulationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listRegulation(
    request: NumbersV2Regulation.ListRegulationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRegulationResponse, ResponseError> {
    return this.#rawClient.execute<ListRegulationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Regulations"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          {
            name: "EndUserType",
            value: request.endUserType,
            schema: s.optional(s.lazy(() => regulationEnumEndUserTypeSchema)),
          },
          { name: "IsoCountry", value: request.isoCountry, schema: s.optional(s.string()) },
          { name: "NumberType", value: request.numberType, schema: s.optional(s.string()) },
          { name: "IncludeConstraints", value: request.includeConstraints, schema: s.optional(s.boolean()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRegulationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV2Regulation {
  export type FetchRegulationRequest = {
    sid: string;
    includeConstraints?: boolean;
  };

  export type ListRegulationRequest = {
    endUserType?: RegulationEnumEndUserType;
    isoCountry?: string;
    numberType?: string;
    includeConstraints?: boolean;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
