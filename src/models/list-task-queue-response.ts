import { s, type Schema } from "../core/index.js";
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
