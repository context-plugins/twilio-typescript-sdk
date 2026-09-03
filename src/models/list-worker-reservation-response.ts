import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  taskrouterV1WorkspaceWorkerWorkerReservationSchema,
  type TaskrouterV1WorkspaceWorkerWorkerReservation,
} from "./taskrouter-v1-workspace-worker-worker-reservation.js";

export type ListWorkerReservationResponse = {
  reservations?: TaskrouterV1WorkspaceWorkerWorkerReservation[];
  meta?: Meta;
};

export const listWorkerReservationResponseSchema: Schema<ListWorkerReservationResponse> =
  s.object<ListWorkerReservationResponse>({
    reservations: s.optional(s.array(s.lazy(() => taskrouterV1WorkspaceWorkerWorkerReservationSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
