import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Method11, method11Schema } from "./method11.js";

export type StatusCallback = {
  /** The destination URL for webhooks. */
  url: string;
  /** The HTTP method used to invoke the webhook URL. @default Method11.Post */
  method?: Method11;
};

export const statusCallbackSchema: Schema<StatusCallback> = s.object<StatusCallback>({
  url: s.string(),
  method: s.defaulted(method11Schema, Method11.Post),
});
