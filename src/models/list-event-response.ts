import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  taskrouterV1WorkspaceEventSchema,
  type TaskrouterV1WorkspaceEvent,
} from "./taskrouter-v1-workspace-event.js";

export type ListEventResponse = {
  events?: TaskrouterV1WorkspaceEvent[];
  meta?: Meta;
};

export const listEventResponseSchema: Schema<ListEventResponse> = s.object<ListEventResponse>({
  events: s.optional(s.array(s.lazy(() => taskrouterV1WorkspaceEventSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
