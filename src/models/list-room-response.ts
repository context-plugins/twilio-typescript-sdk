import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { videoV1RoomSchema, type VideoV1Room } from "./video-v1-room.js";

export type ListRoomResponse = {
  rooms?: VideoV1Room[];
  meta?: Meta;
};

export const listRoomResponseSchema: Schema<ListRoomResponse> = s.object<ListRoomResponse>({
  rooms: s.optional(s.array(s.lazy(() => videoV1RoomSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
