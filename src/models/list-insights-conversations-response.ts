import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  flexV1InsightsConversationsSchema,
  type FlexV1InsightsConversations,
} from "./flex-v1-insights-conversations.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListInsightsConversationsResponse = {
  conversations?: FlexV1InsightsConversations[];
  meta?: Meta;
};

export const listInsightsConversationsResponseSchema: Schema<ListInsightsConversationsResponse> =
  s.object<ListInsightsConversationsResponse>({
    conversations: s.optional(s.array(s.lazy(() => flexV1InsightsConversationsSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
