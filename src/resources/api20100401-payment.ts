import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * create an instance of payments. This will start a new payments session
   *
   * @remarks
   * create an instance of payments. This will start a new payments session
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPayments(
    request: Api20100401Payment.CreatePaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallPayments, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
            { name: "ChargeAmount", value: request.chargeAmount, schema: s.optional(s.float64()) },
            { name: "Currency", value: request.currency, schema: s.optional(s.string()) },
            { name: "Description", value: request.description, schema: s.optional(s.string()) },
            { name: "Input", value: request.input, schema: s.optional(s.string()) },
            { name: "MinPostalCodeLength", value: request.minPostalCodeLength, schema: s.optional(s.int()) },
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
            { name: "Timeout", value: request.timeout, schema: s.optional(s.int()) },
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * update an instance of payments with different phases of payment flows.
   *
   * @remarks
   * update an instance of payments with different phases of payment flows.
   *
   * @returns Accepted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePayments(
    request: Api20100401Payment.UpdatePaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallPayments, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Payment {
  export type CreatePaymentsRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the
     * resource.
     */
    accountSid: string;
    /**
     * The SID of the call that will create the resource. Call leg associated with this sid is
     * expected to provide payment information thru DTMF.
     */
    callSid: string;
    /**
     * A unique token that will be used to ensure that multiple API calls with the same information
     * do not result in multiple transactions. This should be a unique string value per API call and
     * can be a randomly generated.
     */
    idempotencyKey: string;
    /**
     * Provide an absolute or relative URL to receive status updates regarding your Pay session.
     * Read more about the [expected StatusCallback
     * values](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback)
     */
    statusCallback: string;
    /**
     * Type of bank account if payment source is ACH. One of `consumer-checking`,
     * `consumer-savings`, or `commercial-checking`. The default value is `consumer-checking`.
     */
    bankAccountType?: PaymentsEnumBankAccountType;
    /**
     * A positive decimal value less than 1,000,000 to charge against the credit card or bank
     * account. Default currency can be overwritten with `currency` field. Leave blank or set to 0
     * to tokenize.
     */
    chargeAmount?: number;
    /**
     * The currency of the `charge_amount`, formatted as [ISO
     * 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format. The default value is
     * `USD` and all values allowed from the Pay Connector are accepted.
     */
    currency?: string;
    /**
     * The description can be used to provide more details regarding the transaction. This
     * information is submitted along with the payment details to the Payment Connector which are
     * then posted on the transactions.
     */
    description?: string;
    /**
     * A list of inputs that should be accepted. Currently only `dtmf` is supported. All digits
     * captured during a pay session are redacted from the logs.
     */
    input?: string;
    /**
     * A positive integer that is used to validate the length of the `PostalCode` inputted by the
     * user. User must enter this many digits.
     */
    minPostalCodeLength?: number;
    /**
     * A single-level JSON object used to pass custom parameters to payment processors. (Required
     * for ACH payments). The information that has to be included here depends on the <Pay>
     * Connector. [Read more](https://www.twilio.com/console/voice/pay-connectors).
     */
    parameter?: Record<string, unknown>;
    /**
     * This is the unique name corresponding to the Pay Connector installed in the Twilio Add-ons.
     * Learn more about [<Pay> Connectors](https://www.twilio.com/console/voice/pay-connectors). The
     * default value is `Default`.
     */
    paymentConnector?: string;
    /**
     * Type of payment being captured. One of `credit-card` or `ach-debit`. The default value is
     * `credit-card`.
     */
    paymentMethod?: PaymentsEnumPaymentMethod;
    /**
     * Indicates whether the credit card postal code (zip code) is a required piece of payment
     * information that must be provided by the caller. The default is `true`.
     */
    postalCode?: boolean;
    /**
     * Indicates whether the credit card security code is a required piece of payment information
     * that must be provided by the caller. The default is `true`.
     */
    securityCode?: boolean;
    /**
     * The number of seconds that <Pay> should wait for the caller to press a digit between each
     * subsequent digit, after the first one, before moving on to validate the digits captured. The
     * default is `5`, maximum is `600`.
     */
    timeout?: number;
    /**
     * Indicates whether the payment method should be tokenized as a `one-time`, `reusable`, or
     * `payment-method` token. The default value is `reusable`. Do not enter a charge amount when
     * tokenizing. If a charge amount is entered, the payment method will be charged and not
     * tokenized.
     */
    tokenType?: PaymentsEnumTokenType;
    /**
     * Credit card types separated by space that Pay should accept. The default value is `visa
     * mastercard amex`
     */
    validCardTypes?: string;
    /**
     * A comma-separated list of payment information fields that require the caller to enter the
     * same value twice for confirmation. Supported values are `payment-card-number`,
     * `expiration-date`, `security-code`, and `postal-code`.
     */
    requireMatchingInputs?: string;
    /**
     * Whether to prompt the caller to confirm their payment information before submitting to the
     * payment gateway. If `true`, the caller will hear the last 4 digits of their card or account
     * number and must press 1 to confirm or 2 to cancel. Default is `false`.
     */
    confirmation?: Confirmation;
  };

  export type UpdatePaymentsRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will update the
     * resource.
     */
    accountSid: string;
    /**
     * The SID of the call that will update the resource. This should be the same call sid that was
     * used to create payments resource.
     */
    callSid: string;
    /** The SID of Payments session that needs to be updated. */
    sid: string;
    /**
     * A unique token that will be used to ensure that multiple API calls with the same information
     * do not result in multiple transactions. This should be a unique string value per API call and
     * can be a randomly generated.
     */
    idempotencyKey: string;
    /**
     * Provide an absolute or relative URL to receive status updates regarding your Pay session.
     * Read more about the
     * [Update](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback-update) and
     * [Complete/Cancel](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback-cancelcomplete)
     * POST requests.
     */
    statusCallback: string;
    /**
     * The piece of payment information that you wish the caller to enter. Must be one of
     * `payment-card-number`, `expiration-date`, `security-code`, `postal-code`,
     * `bank-routing-number`, `bank-account-number`, or their `-matcher` variants for input
     * confirmation when `RequireMatchingInputs` is enabled.
     */
    capture?: PaymentsEnumCapture;
    /**
     * Indicates whether the current payment session should be cancelled or completed. When `cancel`
     * the payment session is cancelled. When `complete`, Twilio sends the payment information to
     * the selected Pay Connector for processing.
     */
    status?: PaymentsEnumStatus;
  };
}
