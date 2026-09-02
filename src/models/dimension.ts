import { s, type Schema } from "../core/index.js";

export type Dimension = {
  name: string;
  description?: string;
  type: string;
};

export const dimensionSchema: Schema<Dimension> = s.object<Dimension>({
  name: s.string(),
  description: s.optional(s.string()),
  type: s.string(),
});
