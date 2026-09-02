import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  verifyV2ServiceEntityChallengeNotificationSchema,
  type VerifyV2ServiceEntityChallengeNotification,
} from "../models/verify-v2-service-entity-challenge-notification.js";
import type { Servers } from "../servers.js";

export class VerifyV2Notification {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createNotification(
    request: VerifyV2Notification.CreateNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntityChallengeNotification, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceEntityChallengeNotification, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3(
          "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{ChallengeSid}/Notifications",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
          { name: "ChallengeSid", value: request.challengeSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Ttl", value: request.ttl, schema: s.optional(s.number()) }],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceEntityChallengeNotificationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2Notification {
  export type CreateNotificationRequest = {
    serviceSid: string;
    identity: string;
    challengeSid: string;
    ttl?: number;
  };
}
