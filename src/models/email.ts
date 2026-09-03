import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Email = {
  email?: string;
  label?: string;
};

export const emailSchema: Schema<Email> = s.object<Email>({
  email: s.optional(s.string()),
  label: s.optional(s.string()),
});
