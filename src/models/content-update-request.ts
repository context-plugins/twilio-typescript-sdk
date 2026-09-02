import { s, type Schema } from "../core/index.js";
import { typesSchema, type Types } from "./types.js";

export type ContentUpdateRequest = {
  friendlyName?: string;
  variables?: Record<string, string>;
  language?: string;
  types: Types;
};

export const contentUpdateRequestSchema: Schema<ContentUpdateRequest> = s.object<ContentUpdateRequest>({
  friendlyName: s.optional(s.string()),
  variables: s.optional(s.record(s.string(), s.string())),
  language: s.optional(s.string()),
  types: typesSchema,
  _keysMap: {
    friendlyName: "friendly_name",
  },
});
