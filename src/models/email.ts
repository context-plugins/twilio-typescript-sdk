import { s, type Schema } from "../core/index.js";

export type Email = {
  email?: string;
  label?: string;
};

export const emailSchema: Schema<Email> = s.object<Email>({
  email: s.optional(s.string()),
  label: s.optional(s.string()),
});
