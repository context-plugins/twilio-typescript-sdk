import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  videoV1RoomRoomRecordingRuleSchema,
  type VideoV1RoomRoomRecordingRule,
} from "../models/video-v1-room-room-recording-rule.js";
import type { Servers } from "../servers.js";

export class VideoV1RecordingRules {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchRoomRecordingRule(
    request: VideoV1RecordingRules.FetchRoomRecordingRuleRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomRecordingRule, ResponseError> {
    return this.#rawClient.execute<VideoV1RoomRoomRecordingRule, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/RecordingRules"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RoomSid", value: request.roomSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomRecordingRuleSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateRoomRecordingRule(
    request: VideoV1RecordingRules.UpdateRoomRecordingRuleRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomRecordingRule, ResponseError> {
    return this.#rawClient.execute<VideoV1RoomRoomRecordingRule, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/RecordingRules"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RoomSid", value: request.roomSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Rules", value: request.rules, schema: s.optional(s.record(s.string(), s.unknown())) },
          ],
        },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomRecordingRuleSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideoV1RecordingRules {
  export type FetchRoomRecordingRuleRequest = {
    roomSid: string;
  };

  export type UpdateRoomRecordingRuleRequest = {
    roomSid: string;
    rules?: Record<string, unknown>;
  };
}
