import { s, type Schema } from "../core/index.js";

export type Website = {
  website?: string;
  label?: string;
};

export const websiteSchema: Schema<Website> = s.object<Website>({
  website: s.optional(s.string()),
  label: s.optional(s.string()),
});
