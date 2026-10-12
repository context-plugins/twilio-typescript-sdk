import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Create a new Compliance Inquiry for the authenticated account. This is necessary to start a new
   * embedded session.
   *
   * @remarks
   * Create a new Compliance Inquiry for the authenticated account. This is necessary to start a new
   * embedded session.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createComplianceInquiry(
    request: TrusthubV1ComplianceInquiries.CreateComplianceInquiryRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1ComplianceInquiry, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/ComplianceInquiries/Customers/Initialize"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Resume a specific Compliance Inquiry that has expired, or re-open a rejected Compliance Inquiry
   * for editing.
   *
   * @remarks
   * Resume a specific Compliance Inquiry that has expired, or re-open a rejected Compliance Inquiry
   * for editing.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateComplianceInquiry(
    request: TrusthubV1ComplianceInquiries.UpdateComplianceInquiryRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1ComplianceInquiry, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/ComplianceInquiries/Customers/{CustomerId}/Initialize"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CustomerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TrusthubV1ComplianceInquiries {
  export type CreateComplianceInquiryRequest = {
    /**
     * The email address that approval status updates will be sent to. If not specified, the email
     * address associated with your primary customer profile will be used.
     */
    notificationEmail?: string;
    /** Theme id for styling the inquiry form. */
    themeSetId?: string;
    /**
     * The unique SID identifier of the Primary Customer Profile that should be used as a parent.
     * Only necessary when creating a secondary Customer Profile.
     */
    primaryProfileSid?: string;
  };

  export type UpdateComplianceInquiryRequest = {
    /**
     * The unique CustomerId matching the Customer Profile/Compliance Inquiry that should be resumed
     * or resubmitted. This value will have been returned by the initial Compliance Inquiry creation
     * call.
     */
    customerId: string;
    /**
     * The unique SID identifier of the Primary Customer Profile that should be used as a parent.
     * Only necessary when creating a secondary Customer Profile.
     */
    primaryProfileSid: string;
    /** Theme id for styling the inquiry form. */
    themeSetId?: string;
  };
}
