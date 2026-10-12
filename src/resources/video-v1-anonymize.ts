import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  videoV1RoomRoomParticipantRoomParticipantAnonymizeSchema,
  type VideoV1RoomRoomParticipantRoomParticipantAnonymize,
} from "../models/video-v1-room-room-participant-room-participant-anonymize.js";
import type { Servers } from "../servers.js";

export class VideoV1Anonymize {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  updateRoomParticipantAnonymize(
    request: VideoV1Anonymize.UpdateRoomParticipantAnonymizeRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RoomRoomParticipantRoomParticipantAnonymize, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default6("/v1/Rooms/{RoomSid}/Participants/{Sid}/Anonymize"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomParticipantRoomParticipantAnonymizeSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideoV1Anonymize {
  export type UpdateRoomParticipantAnonymizeRequest = {
    /** The SID of the room with the participant to update. */
    roomSid: string;
    /** The SID of the RoomParticipant resource to update. */
    sid: string;
  };
}
