import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  videoV1RoomRoomParticipantRoomParticipantSubscribeRuleSchema,
  type VideoV1RoomRoomParticipantRoomParticipantSubscribeRule,
} from "../models/video-v1-room-room-participant-room-participant-subscribe-rule.js";
import type { Servers } from "../servers.js";

export class VideoV1SubscribeRules {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Returns a list of Subscribe Rules for the Participant.
   *
   * @remarks
   * Returns a list of Subscribe Rules for the Participant.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRoomParticipantSubscribeRule(
    request: VideoV1SubscribeRules.FetchRoomParticipantSubscribeRuleRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomParticipantRoomParticipantSubscribeRule, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6(
          "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomParticipantRoomParticipantSubscribeRuleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update the Subscribe Rules for the Participant
   *
   * @remarks
   * Update the Subscribe Rules for the Participant
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateRoomParticipantSubscribeRule(
    request: VideoV1SubscribeRules.UpdateRoomParticipantSubscribeRuleRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomParticipantRoomParticipantSubscribeRule, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default6(
          "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Rules", value: request.rules, schema: s.optional(s.record(s.string(), s.unknown())) },
          ],
        },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomParticipantRoomParticipantSubscribeRuleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideoV1SubscribeRules {
  export type FetchRoomParticipantSubscribeRuleRequest = {
    /** The SID of the Room resource where the subscribe rules to fetch apply. */
    roomSid: string;
    /** The SID of the Participant resource with the subscribe rules to fetch. */
    participantSid: string;
  };

  export type UpdateRoomParticipantSubscribeRuleRequest = {
    /** The SID of the Room resource where the subscribe rules to update apply. */
    roomSid: string;
    /** The SID of the Participant resource to update the Subscribe Rules. */
    participantSid: string;
    /**
     * A JSON-encoded array of subscribe rules. See the [Specifying Subscribe
     * Rules](https://www.twilio.com/docs/video/api/track-subscriptions#specifying-sr) section for
     * further information.
     */
    rules?: Record<string, unknown>;
  };
}
