import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flowsPageComponentSchema, type FlowsPageComponent } from "./flows-page-component.js";

export type FlowsPage = {
  id: string;
  nextPageId?: string;
  title: string;
  subtitle?: string;
  layout: FlowsPageComponent[];
};

export const flowsPageSchema: Schema<FlowsPage> = s.object<FlowsPage>({
  id: s.string(),
  nextPageId: s.optional(s.string()),
  title: s.string(),
  subtitle: s.optional(s.string()),
  layout: s.array(s.lazy(() => flowsPageComponentSchema)),
  _keysMap: {
    nextPageId: "next_page_id",
  },
});
