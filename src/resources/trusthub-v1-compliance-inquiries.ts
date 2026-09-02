import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  trusthubV1ComplianceInquirySchema,
  type TrusthubV1ComplianceInquiry,
} from "../models/trusthub-v1-compliance-inquiry.js";
import type { Servers } from "../servers.js";

export class TrusthubV1ComplianceInquiries {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createComplianceInquiry(
    request: TrusthubV1ComplianceInquiries.CreateComplianceInquiryRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1ComplianceInquiry, ResponseError> {
    return this.#rawClient.execute<TrusthubV1ComplianceInquiry, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/ComplianceInquiries/Customers/Initialize"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "NotificationEmail", value: request.notificationEmail, schema: s.optional(s.string()) },
            { name: "ThemeSetId", value: request.themeSetId, schema: s.optional(s.string()) },
            { name: "PrimaryProfileSid", value: request.primaryProfileSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1ComplianceInquirySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateComplianceInquiry(
    request: TrusthubV1ComplianceInquiries.UpdateComplianceInquiryRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1ComplianceInquiry, ResponseError> {
    return this.#rawClient.execute<TrusthubV1ComplianceInquiry, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/ComplianceInquiries/Customers/{CustomerId}/Initialize"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CustomerId", value: request.customerId, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "PrimaryProfileSid", value: request.primaryProfileSid, schema: s.string() },
            { name: "ThemeSetId", value: request.themeSetId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1ComplianceInquirySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TrusthubV1ComplianceInquiries {
  export type CreateComplianceInquiryRequest = {
    notificationEmail?: string;
    themeSetId?: string;
    primaryProfileSid?: string;
  };

  export type UpdateComplianceInquiryRequest = {
    customerId: string;
    primaryProfileSid: string;
    themeSetId?: string;
  };
}
