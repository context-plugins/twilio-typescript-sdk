import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { flowEnumStatusSchema, type FlowEnumStatus } from "../models/flow-enum-status.js";
import { studioV2FlowValidateSchema, type StudioV2FlowValidate } from "../models/studio-v2-flow-validate.js";
import type { Servers } from "../servers.js";

export class StudioV2FlowValidateApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Validate flow JSON definition
   *
   * @remarks
   * Validate flow JSON definition
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFlowValidate(
    request: StudioV2FlowValidateApi.UpdateFlowValidateRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV2FlowValidate, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default11("/v2/Flows/Validate"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Status", value: request.status, schema: flowEnumStatusSchema },
            { name: "Definition", value: request.definition, schema: s.record(s.string(), s.unknown()) },
            { name: "CommitMessage", value: request.commitMessage, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: studioV2FlowValidateSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StudioV2FlowValidateApi {
  export type UpdateFlowValidateRequest = {
    /** The string that you assigned to describe the Flow. */
    friendlyName: string;
    /** The status of the Flow. Can be: `draft` or `published`. */
    status: FlowEnumStatus;
    /** JSON representation of flow definition. */
    definition: Record<string, unknown>;
    /** Description of change made in the revision. */
    commitMessage?: string;
  };
}
