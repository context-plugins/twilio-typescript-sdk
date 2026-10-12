import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lineTypeSchema, type LineType } from "./line-type.js";

export type OverridesRequest = {
  /** The new line type to override the original line type */
  lineType?: LineType;
  /** The reason for the override */
  reason?: string;
};

export const overridesRequestSchema: Schema<OverridesRequest> = s.object<OverridesRequest>({
  lineType: s.optional(s.lazy(() => lineTypeSchema)),
  reason: s.optional(s.string()),
  _keysMap: {
    lineType: "line_type",
  },
});
