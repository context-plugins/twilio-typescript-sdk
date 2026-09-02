import { s, type Schema } from "../core/index.js";
import { method11Schema, type Method11 } from "./method11.js";

export type StatusCallback = {
  url: string;
  method?: Method11;
};

export const statusCallbackSchema: Schema<StatusCallback> = s.object<StatusCallback>({
  url: s.string(),
  method: s.optional(s.lazy(() => method11Schema)),
});
