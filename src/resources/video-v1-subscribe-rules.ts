import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  fetchRoomParticipantSubscribeRule(
    request: VideoV1SubscribeRules.FetchRoomParticipantSubscribeRuleRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomParticipantRoomParticipantSubscribeRule, ResponseError> {
    return this.#rawClient.execute<VideoV1RoomRoomParticipantRoomParticipantSubscribeRule, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomParticipantRoomParticipantSubscribeRuleSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateRoomParticipantSubscribeRule(
    request: VideoV1SubscribeRules.UpdateRoomParticipantSubscribeRuleRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomParticipantRoomParticipantSubscribeRule, ResponseError> {
    return this.#rawClient.execute<VideoV1RoomRoomParticipantRoomParticipantSubscribeRule, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Rules", value: request.rules, schema: s.optional(s.record(s.string(), s.unknown())) },
          ],
        },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomParticipantRoomParticipantSubscribeRuleSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideoV1SubscribeRules {
  export type FetchRoomParticipantSubscribeRuleRequest = {
    roomSid: string;
    participantSid: string;
  };

  export type UpdateRoomParticipantSubscribeRuleRequest = {
    roomSid: string;
    participantSid: string;
    rules?: Record<string, unknown>;
  };
}
