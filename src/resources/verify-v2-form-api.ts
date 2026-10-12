import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Fetch the forms for a specific Form Type.
   *
   * @remarks
   * Fetch the forms for a specific Form Type.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchForm(
    request: VerifyV2FormApi.FetchFormRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2Form, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Forms/{FormType}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "FormType", value: request.formType, schema: formEnumFormTypesSchema }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2FormSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2FormApi {
  export type FetchFormRequest = {
    /** The Type of this Form. Currently only `form-push` is supported. */
    formType: FormEnumFormTypes;
  };
}
