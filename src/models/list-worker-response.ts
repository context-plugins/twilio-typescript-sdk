import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  taskrouterV1WorkspaceWorkerSchema,
  type TaskrouterV1WorkspaceWorker,
} from "./taskrouter-v1-workspace-worker.js";

export type ListWorkerResponse = {
  workers?: TaskrouterV1WorkspaceWorker[];
  meta?: Meta;
};

export const listWorkerResponseSchema: Schema<ListWorkerResponse> = s.object<ListWorkerResponse>({
  workers: s.optional(s.array(s.lazy(() => taskrouterV1WorkspaceWorkerSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
