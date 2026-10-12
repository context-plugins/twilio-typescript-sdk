import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Method21, method21Schema } from "./method21.js";

export type StatusCallback1 = {
  url: string;
  /** @default Method21.Post */
  method?: Method21;
};

export const statusCallback1Schema: Schema<StatusCallback1> = s.object<StatusCallback1>({
  url: s.string(),
  method: s.defaulted(method21Schema, Method21.Post),
});
