import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  taskrouterV1WorkspaceActivitySchema,
  type TaskrouterV1WorkspaceActivity,
} from "./taskrouter-v1-workspace-activity.js";

export type ListActivityResponse = {
  activities?: TaskrouterV1WorkspaceActivity[];
  meta?: Meta;
};

export const listActivityResponseSchema: Schema<ListActivityResponse> = s.object<ListActivityResponse>({
  activities: s.optional(s.array(s.lazy(() => taskrouterV1WorkspaceActivitySchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
