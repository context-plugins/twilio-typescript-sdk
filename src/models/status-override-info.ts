import { s, type Schema } from "../core/index.js";
import { status1Schema, type Status1 } from "./status1.js";

export type StatusOverrideInfo = {
  status?: Status1;
};

export const statusOverrideInfoSchema: Schema<StatusOverrideInfo> = s.object<StatusOverrideInfo>({
  status: s.optional(s.lazy(() => status1Schema)),
});
