import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  taskrouterV1WorkspaceTaskQueueSchema,
  type TaskrouterV1WorkspaceTaskQueue,
} from "./taskrouter-v1-workspace-task-queue.js";

export type ListTaskQueueResponse = {
  taskQueues?: TaskrouterV1WorkspaceTaskQueue[];
  meta?: Meta;
};

export const listTaskQueueResponseSchema: Schema<ListTaskQueueResponse> = s.object<ListTaskQueueResponse>({
  taskQueues: s.optional(s.array(s.lazy(() => taskrouterV1WorkspaceTaskQueueSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
  _keysMap: {
    taskQueues: "task_queues",
  },
});
