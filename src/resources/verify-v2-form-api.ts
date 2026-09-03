import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import { formEnumFormTypesSchema, type FormEnumFormTypes } from "../models/form-enum-form-types.js";
import { verifyV2FormSchema, type VerifyV2Form } from "../models/verify-v2-form.js";
import type { Servers } from "../servers.js";

export class VerifyV2FormApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchForm(
    request: VerifyV2FormApi.FetchFormRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2Form, ResponseError> {
    return this.#rawClient.execute<VerifyV2Form, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Forms/{FormType}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "FormType", value: request.formType, schema: formEnumFormTypesSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2FormSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2FormApi {
  export type FetchFormRequest = {
    formType: FormEnumFormTypes;
  };
}
