import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  taskrouterV1WorkspaceTaskQueueTaskQueuesStatisticsSchema,
  type TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics,
} from "./taskrouter-v1-workspace-task-queue-task-queues-statistics.js";

export type ListTaskQueuesStatisticsResponse = {
  taskQueuesStatistics?: TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics[];
  meta?: Meta;
};

export const listTaskQueuesStatisticsResponseSchema: Schema<ListTaskQueuesStatisticsResponse> =
  s.object<ListTaskQueuesStatisticsResponse>({
    taskQueuesStatistics: s.optional(
      s.array(s.lazy(() => taskrouterV1WorkspaceTaskQueueTaskQueuesStatisticsSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      taskQueuesStatistics: "task_queues_statistics",
    },
  });
