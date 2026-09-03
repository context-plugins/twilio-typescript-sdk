import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  taskrouterV1WorkspaceTaskTaskReservationSchema,
  type TaskrouterV1WorkspaceTaskTaskReservation,
} from "./taskrouter-v1-workspace-task-task-reservation.js";

export type ListTaskReservationResponse = {
  reservations?: TaskrouterV1WorkspaceTaskTaskReservation[];
  meta?: Meta;
};

export const listTaskReservationResponseSchema: Schema<ListTaskReservationResponse> =
  s.object<ListTaskReservationResponse>({
    reservations: s.optional(s.array(s.lazy(() => taskrouterV1WorkspaceTaskTaskReservationSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
