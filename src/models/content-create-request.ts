import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typesSchema, type Types } from "./types.js";

export type ContentCreateRequest = {
  friendlyName?: string;
  variables?: Record<string, string>;
  language: string;
  types: Types;
};

export const contentCreateRequestSchema: Schema<ContentCreateRequest> = s.object<ContentCreateRequest>({
  friendlyName: s.optional(s.string()),
  variables: s.optional(s.record(s.string(), s.string())),
  language: s.string(),
  types: typesSchema,
  _keysMap: {
    friendlyName: "friendly_name",
  },
});
