import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  amdStatusCallbackMethodSchema,
  type AmdStatusCallbackMethod,
} from "../models/amd-status-callback-method.js";
import {
  dependentOrderEnumVerificationTypeSchema,
  type DependentOrderEnumVerificationType,
} from "../models/dependent-order-enum-verification-type.js";
import {
  numbersV3HostedNumbersHostedNumberOrderSchema,
  type NumbersV3HostedNumbersHostedNumberOrder,
} from "../models/numbers-v3-hosted-numbers-hosted-number-order.js";
import type { Servers } from "../servers.js";

export class NumbersV3HostedNumbersHostedNumberOrderApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createHostedNumbersHostedNumberOrder(
    request: NumbersV3HostedNumbersHostedNumberOrderApi.CreateHostedNumbersHostedNumberOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<NumbersV3HostedNumbersHostedNumberOrder, ResponseError> {
    return this.#rawClient.execute<NumbersV3HostedNumbersHostedNumberOrder, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v3/HostedNumbers/HostedNumberOrders"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "phoneNumber", value: request.phoneNumber, schema: s.string() },
            { name: "smsCapability", value: request.smsCapability, schema: s.boolean() },
            { name: "accountSid", value: request.accountSid, schema: s.optional(s.string()) },
            { name: "friendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "uniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            { name: "ccEmails", value: request.ccEmails, schema: s.optional(s.array(s.string())) },
            { name: "smsUrl", value: request.smsUrl, schema: s.optional(s.string()) },
            {
              name: "smsMethod",
              value: request.smsMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "smsFallbackUrl", value: request.smsFallbackUrl, schema: s.optional(s.string()) },
            {
              name: "smsFallbackMethod",
              value: request.smsFallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "statusCallbackUrl", value: request.statusCallbackUrl, schema: s.optional(s.string()) },
            {
              name: "statusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "smsApplicationSid", value: request.smsApplicationSid, schema: s.optional(s.string()) },
            { name: "addressSid", value: request.addressSid, schema: s.optional(s.string()) },
            { name: "email", value: request.email, schema: s.optional(s.string()) },
            {
              name: "verificationType",
              value: request.verificationType,
              schema: s.optional(s.lazy(() => dependentOrderEnumVerificationTypeSchema)),
            },
            {
              name: "verificationDocumentSid",
              value: request.verificationDocumentSid,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: numbersV3HostedNumbersHostedNumberOrderSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV3HostedNumbersHostedNumberOrderApi {
  export type CreateHostedNumbersHostedNumberOrderRequestParams = {
    phoneNumber: string;
    smsCapability: boolean;
    accountSid?: string;
    friendlyName?: string;
    uniqueName?: string;
    ccEmails?: string[];
    smsUrl?: string;
    smsMethod?: AmdStatusCallbackMethod;
    smsFallbackUrl?: string;
    smsFallbackMethod?: AmdStatusCallbackMethod;
    statusCallbackUrl?: string;
    statusCallbackMethod?: AmdStatusCallbackMethod;
    smsApplicationSid?: string;
    addressSid?: string;
    email?: string;
    verificationType?: DependentOrderEnumVerificationType;
    verificationDocumentSid?: string;
  };
}
