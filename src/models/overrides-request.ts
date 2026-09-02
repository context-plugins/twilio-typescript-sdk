import { s, type Schema } from "../core/index.js";
import { lineTypeSchema, type LineType } from "./line-type.js";

export type OverridesRequest = {
  lineType?: LineType;
  reason?: string;
};

export const overridesRequestSchema: Schema<OverridesRequest> = s.object<OverridesRequest>({
  lineType: s.optional(s.lazy(() => lineTypeSchema)),
  reason: s.optional(s.string()),
  _keysMap: {
    lineType: "line_type",
  },
});
