import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type AppleTypingIndicatorRequest = {
  channel: "APPLE";
  from: string;
  to: string;
  event?: Event;
};

export const appleTypingIndicatorRequestSchema: Schema<AppleTypingIndicatorRequest> =
  s.object<AppleTypingIndicatorRequest>({
    channel: s.literal("APPLE"),
    from: s.string(),
    to: s.string(),
    event: s.optional(s.lazy(() => eventSchema)),
  });
