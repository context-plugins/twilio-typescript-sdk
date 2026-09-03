import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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
  ): ApiPromise<VideoV1RoomRoomParticipantRoomParticipantAnonymize, ResponseError> {
    return this.#rawClient.execute<VideoV1RoomRoomParticipantRoomParticipantAnonymize, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default6("/v1/Rooms/{RoomSid}/Participants/{Sid}/Anonymize"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "RoomSid", value: request.roomSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RoomRoomParticipantRoomParticipantAnonymizeSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideoV1Anonymize {
  export type UpdateRoomParticipantAnonymizeRequest = {
    roomSid: string;
    sid: string;
  };
}
