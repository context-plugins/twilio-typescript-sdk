import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { method11Schema, type Method11 } from "./method11.js";

export type StatusCallback = {
  url: string;
  method?: Method11;
};

export const statusCallbackSchema: Schema<StatusCallback> = s.object<StatusCallback>({
  url: s.string(),
  method: s.optional(s.lazy(() => method11Schema)),
});
