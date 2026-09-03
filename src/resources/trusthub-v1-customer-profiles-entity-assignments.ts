import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listCustomerProfileEntityAssignmentResponseSchema,
  type ListCustomerProfileEntityAssignmentResponse,
} from "../models/list-customer-profile-entity-assignment-response.js";
import {
  trusthubV1CustomerProfileCustomerProfileEntityAssignmentSchema,
  type TrusthubV1CustomerProfileCustomerProfileEntityAssignment,
} from "../models/trusthub-v1-customer-profile-customer-profile-entity-assignment.js";
import type { Servers } from "../servers.js";

export class TrusthubV1CustomerProfilesEntityAssignments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createCustomerProfileEntityAssignment(
    request: TrusthubV1CustomerProfilesEntityAssignments.CreateCustomerProfileEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfileCustomerProfileEntityAssignment, ResponseError> {
    return this.#rawClient.execute<TrusthubV1CustomerProfileCustomerProfileEntityAssignment, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "ObjectSid", value: request.objectSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1CustomerProfileCustomerProfileEntityAssignmentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteCustomerProfileEntityAssignment(
    request: TrusthubV1CustomerProfilesEntityAssignments.DeleteCustomerProfileEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default9("/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchCustomerProfileEntityAssignment(
    request: TrusthubV1CustomerProfilesEntityAssignments.FetchCustomerProfileEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfileCustomerProfileEntityAssignment, ResponseError> {
    return this.#rawClient.execute<TrusthubV1CustomerProfileCustomerProfileEntityAssignment, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1CustomerProfileCustomerProfileEntityAssignmentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCustomerProfileEntityAssignment(
    request: TrusthubV1CustomerProfilesEntityAssignments.ListCustomerProfileEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomerProfileEntityAssignmentResponse, ResponseError> {
    return this.#rawClient.execute<ListCustomerProfileEntityAssignmentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() }],
        query: [
          { name: "ObjectType", value: request.objectType, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCustomerProfileEntityAssignmentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TrusthubV1CustomerProfilesEntityAssignments {
  export type CreateCustomerProfileEntityAssignmentRequest = {
    customerProfileSid: string;
    objectSid: string;
  };

  export type DeleteCustomerProfileEntityAssignmentRequest = {
    customerProfileSid: string;
    sid: string;
  };

  export type FetchCustomerProfileEntityAssignmentRequest = {
    customerProfileSid: string;
    sid: string;
  };

  export type ListCustomerProfileEntityAssignmentRequest = {
    customerProfileSid: string;
    objectType?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
