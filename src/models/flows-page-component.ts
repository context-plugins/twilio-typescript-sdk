import { s, type Schema } from "../core/index.js";

export type FlowsPageComponent = {
  label?: string;
  type: string;
};

export const flowsPageComponentSchema: Schema<FlowsPageComponent> = s.object<FlowsPageComponent>({
  label: s.optional(s.string()),
  type: s.string(),
});
