import { s, type Schema } from "../core/index.js";

export type Error = {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  instance?: string;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  type: s.optional(s.string()),
  title: s.optional(s.string()),
  status: s.optional(s.number()),
  detail: s.optional(s.string()),
  instance: s.optional(s.string()),
});
