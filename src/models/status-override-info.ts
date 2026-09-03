import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

export type StatusOverrideInfo = {
  status?: Status1;
};

export const statusOverrideInfoSchema: Schema<StatusOverrideInfo> = s.object<StatusOverrideInfo>({
  status: s.optional(s.lazy(() => status1Schema)),
});
