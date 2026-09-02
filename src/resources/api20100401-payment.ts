import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  apiV2010AccountCallPaymentsSchema,
  type ApiV2010AccountCallPayments,
} from "../models/api-v2010-account-call-payments.js";
import { confirmationSchema, type Confirmation } from "../models/confirmation.js";
import {
  paymentsEnumBankAccountTypeSchema,
  type PaymentsEnumBankAccountType,
} from "../models/payments-enum-bank-account-type.js";
import { paymentsEnumCaptureSchema, type PaymentsEnumCapture } from "../models/payments-enum-capture.js";
import {
  paymentsEnumPaymentMethodSchema,
  type PaymentsEnumPaymentMethod,
} from "../models/payments-enum-payment-method.js";
import { paymentsEnumStatusSchema, type PaymentsEnumStatus } from "../models/payments-enum-status.js";
import {
  paymentsEnumTokenTypeSchema,
  type PaymentsEnumTokenType,
} from "../models/payments-enum-token-type.js";
import type { Servers } from "../servers.js";

export class Api20100401Payment {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createPayments(
    request: Api20100401Payment.CreatePaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallPayments, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountCallPayments, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "IdempotencyKey", value: request.idempotencyKey, schema: s.string() },
            { name: "StatusCallback", value: request.statusCallback, schema: s.string() },
            {
              name: "BankAccountType",
              value: request.bankAccountType,
              schema: s.optional(s.lazy(() => paymentsEnumBankAccountTypeSchema)),
            },
            { name: "ChargeAmount", value: request.chargeAmount, schema: s.optional(s.number()) },
            { name: "Currency", value: request.currency, schema: s.optional(s.string()) },
            { name: "Description", value: request.description, schema: s.optional(s.string()) },
            { name: "Input", value: request.input, schema: s.optional(s.string()) },
            {
              name: "MinPostalCodeLength",
              value: request.minPostalCodeLength,
              schema: s.optional(s.number()),
            },
            {
              name: "Parameter",
              value: request.parameter,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
            { name: "PaymentConnector", value: request.paymentConnector, schema: s.optional(s.string()) },
            {
              name: "PaymentMethod",
              value: request.paymentMethod,
              schema: s.optional(s.lazy(() => paymentsEnumPaymentMethodSchema)),
            },
            { name: "PostalCode", value: request.postalCode, schema: s.optional(s.boolean()) },
            { name: "SecurityCode", value: request.securityCode, schema: s.optional(s.boolean()) },
            { name: "Timeout", value: request.timeout, schema: s.optional(s.number()) },
            {
              name: "TokenType",
              value: request.tokenType,
              schema: s.optional(s.lazy(() => paymentsEnumTokenTypeSchema)),
            },
            { name: "ValidCardTypes", value: request.validCardTypes, schema: s.optional(s.string()) },
            {
              name: "RequireMatchingInputs",
              value: request.requireMatchingInputs,
              schema: s.optional(s.string()),
            },
            {
              name: "Confirmation",
              value: request.confirmation,
              schema: s.optional(s.lazy(() => confirmationSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallPaymentsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updatePayments(
    request: Api20100401Payment.UpdatePaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallPayments, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountCallPayments, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "IdempotencyKey", value: request.idempotencyKey, schema: s.string() },
            { name: "StatusCallback", value: request.statusCallback, schema: s.string() },
            {
              name: "Capture",
              value: request.capture,
              schema: s.optional(s.lazy(() => paymentsEnumCaptureSchema)),
            },
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => paymentsEnumStatusSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallPaymentsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Payment {
  export type CreatePaymentsRequest = {
    accountSid: string;
    callSid: string;
    idempotencyKey: string;
    statusCallback: string;
    bankAccountType?: PaymentsEnumBankAccountType;
    chargeAmount?: number;
    currency?: string;
    description?: string;
    input?: string;
    minPostalCodeLength?: number;
    parameter?: Record<string, unknown>;
    paymentConnector?: string;
    paymentMethod?: PaymentsEnumPaymentMethod;
    postalCode?: boolean;
    securityCode?: boolean;
    timeout?: number;
    tokenType?: PaymentsEnumTokenType;
    validCardTypes?: string;
    requireMatchingInputs?: string;
    confirmation?: Confirmation;
  };

  export type UpdatePaymentsRequest = {
    accountSid: string;
    callSid: string;
    sid: string;
    idempotencyKey: string;
    statusCallback: string;
    capture?: PaymentsEnumCapture;
    status?: PaymentsEnumStatus;
  };
}
