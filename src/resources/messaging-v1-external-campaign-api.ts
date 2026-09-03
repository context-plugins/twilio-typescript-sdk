import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  messagingV1ExternalCampaignSchema,
  type MessagingV1ExternalCampaign,
} from "../models/messaging-v1-external-campaign.js";
import type { Servers } from "../servers.js";

export class MessagingV1ExternalCampaignApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createExternalCampaign(
    request: MessagingV1ExternalCampaignApi.CreateExternalCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ExternalCampaign, ResponseError> {
    return this.#rawClient.execute<MessagingV1ExternalCampaign, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/Services/PreregisteredUsa2p"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "CampaignId", value: request.campaignId, schema: s.string() },
            { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
            { name: "CnpMigration", value: request.cnpMigration, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: messagingV1ExternalCampaignSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1ExternalCampaignApi {
  export type CreateExternalCampaignRequest = {
    campaignId: string;
    messagingServiceSid: string;
    cnpMigration?: boolean;
  };
}
