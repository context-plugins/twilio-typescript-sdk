import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  taskrouterV1WorkspaceTaskChannelSchema,
  type TaskrouterV1WorkspaceTaskChannel,
} from "./taskrouter-v1-workspace-task-channel.js";

export type ListTaskChannelResponse = {
  channels?: TaskrouterV1WorkspaceTaskChannel[];
  meta?: Meta;
};

export const listTaskChannelResponseSchema: Schema<ListTaskChannelResponse> =
  s.object<ListTaskChannelResponse>({
    channels: s.optional(s.array(s.lazy(() => taskrouterV1WorkspaceTaskChannelSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
