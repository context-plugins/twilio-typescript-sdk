import { s, type Schema } from "../core/index.js";
import { method21Schema, type Method21 } from "./method21.js";

export type StatusCallback1 = {
  url: string;
  method?: Method21;
};

export const statusCallback1Schema: Schema<StatusCallback1> = s.object<StatusCallback1>({
  url: s.string(),
  method: s.optional(s.lazy(() => method21Schema)),
});
