import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Website = {
  website?: string;
  label?: string;
};

export const websiteSchema: Schema<Website> = s.object<Website>({
  website: s.optional(s.string()),
  label: s.optional(s.string()),
});
