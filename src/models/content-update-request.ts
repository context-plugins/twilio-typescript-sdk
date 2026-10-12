import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typesSchema, type Types } from "./types.js";

/** Content update request body */
export type ContentUpdateRequest = {
  /** User defined name of the content */
  friendlyName?: string;
  /** Key value pairs of variable name to value */
  variables?: Record<string, string>;
  /** Language code for the content */
  language?: string;
  /** Content types */
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
