import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  verifyV2ServiceVerificationCheckSchema,
  type VerifyV2ServiceVerificationCheck,
} from "../models/verify-v2-service-verification-check.js";
import type { Servers } from "../servers.js";

export class VerifyV2VerificationCheck {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createVerificationCheck(
    request: VerifyV2VerificationCheck.CreateVerificationCheckRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceVerificationCheck, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceVerificationCheck, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/VerificationCheck"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Code", value: request.code, schema: s.optional(s.string()) },
            { name: "To", value: request.to, schema: s.optional(s.string()) },
            { name: "VerificationSid", value: request.verificationSid, schema: s.optional(s.string()) },
            { name: "Amount", value: request.amount, schema: s.optional(s.string()) },
            { name: "Payee", value: request.payee, schema: s.optional(s.string()) },
            { name: "SnaClientToken", value: request.snaClientToken, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceVerificationCheckSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2VerificationCheck {
  export type CreateVerificationCheckRequest = {
    serviceSid: string;
    code?: string;
    to?: string;
    verificationSid?: string;
    amount?: string;
    payee?: string;
    snaClientToken?: string;
  };
}
