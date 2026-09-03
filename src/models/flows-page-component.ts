import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlowsPageComponent = {
  label?: string;
  type: string;
};

export const flowsPageComponentSchema: Schema<FlowsPageComponent> = s.object<FlowsPageComponent>({
  label: s.optional(s.string()),
  type: s.string(),
});
