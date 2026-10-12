import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Returns a list of Recording Rules for the Room.
   *
   * @remarks
   * Returns a list of Recording Rules for the Room.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRoomRecordingRule(
    request: VideoV1RecordingRules.FetchRoomRecordingRuleRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomRecordingRule, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/Rooms/{RoomSid}/RecordingRules"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RoomSid", value: request.roomSid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomRecordingRuleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update the Recording Rules for the Room
   *
   * @remarks
   * Update the Recording Rules for the Room
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateRoomRecordingRule(
    request: VideoV1RecordingRules.UpdateRoomRecordingRuleRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomRecordingRule, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default6("/v1/Rooms/{RoomSid}/RecordingRules"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RoomSid", value: request.roomSid, schema: s.string() }],
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
        success: { kind: "json", schema: videoV1RoomRoomRecordingRuleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideoV1RecordingRules {
  export type FetchRoomRecordingRuleRequest = {
    /** The SID of the Room resource where the recording rules to fetch apply. */
    roomSid: string;
  };

  export type UpdateRoomRecordingRuleRequest = {
    /** The SID of the Room resource where the recording rules to update apply. */
    roomSid: string;
    /** A JSON-encoded array of recording rules. */
    rules?: Record<string, unknown>;
  };
}
