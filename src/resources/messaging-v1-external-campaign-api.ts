import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Resource to associate preregistered campaign with Messaging Service.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createExternalCampaign(
    request: MessagingV1ExternalCampaignApi.CreateExternalCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ExternalCampaign, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/Services/PreregisteredUsa2p"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1ExternalCampaignApi {
  export type CreateExternalCampaignRequest = {
    /** ID of the preregistered campaign. */
    campaignId: string;
    /**
     * The SID of the [Messaging
     * Service](https://www.twilio.com/docs/messaging/api/service-resource) that the resource is
     * associated with.
     */
    messagingServiceSid: string;
    /**
     * Customers should use this flag during the ERC registration process to indicate to Twilio that
     * the campaign being registered is undergoing CNP migration. It is important for the user to
     * first trigger the CNP migration process for said campaign in their CSP portal and have Twilio
     * accept the sharing request, before making this api call.
     */
    cnpMigration?: boolean;
  };
}
