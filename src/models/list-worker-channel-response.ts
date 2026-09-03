import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  taskrouterV1WorkspaceWorkerWorkerChannelSchema,
  type TaskrouterV1WorkspaceWorkerWorkerChannel,
} from "./taskrouter-v1-workspace-worker-worker-channel.js";

export type ListWorkerChannelResponse = {
  channels?: TaskrouterV1WorkspaceWorkerWorkerChannel[];
  meta?: Meta;
};

export const listWorkerChannelResponseSchema: Schema<ListWorkerChannelResponse> =
  s.object<ListWorkerChannelResponse>({
    channels: s.optional(s.array(s.lazy(() => taskrouterV1WorkspaceWorkerWorkerChannelSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
