import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  videoV1RoomRoomParticipantSchema,
  type VideoV1RoomRoomParticipant,
} from "./video-v1-room-room-participant.js";

export type ListRoomParticipantResponse = {
  participants?: VideoV1RoomRoomParticipant[];
  meta?: Meta;
};

export const listRoomParticipantResponseSchema: Schema<ListRoomParticipantResponse> =
  s.object<ListRoomParticipantResponse>({
    participants: s.optional(s.array(s.lazy(() => videoV1RoomRoomParticipantSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
