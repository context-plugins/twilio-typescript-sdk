import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  updateFlowValidate(
    request: StudioV2FlowValidateApi.UpdateFlowValidateRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV2FlowValidate, ResponseError> {
    return this.#rawClient.execute<StudioV2FlowValidate, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default11("/v2/Flows/Validate"),
        auth: this.#auth.accountSidAuthToken,
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StudioV2FlowValidateApi {
  export type UpdateFlowValidateRequest = {
    friendlyName: string;
    status: FlowEnumStatus;
    definition: Record<string, unknown>;
    commitMessage?: string;
  };
}
