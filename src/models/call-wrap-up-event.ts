import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { endStatusSchema, type EndStatus } from "./end-status.js";

export type CallWrapUpEvent = {
  /** Duration in seconds. */
  durationInSeconds?: number;
  /** End status of the call wrap up event. */
  endStatus?: EndStatus;
};

export const callWrapUpEventSchema: Schema<CallWrapUpEvent> = s.object<CallWrapUpEvent>({
  durationInSeconds: s.optional(s.int()),
  endStatus: s.optional(s.lazy(() => endStatusSchema)),
  _keysMap: {
    durationInSeconds: "duration_in_seconds",
    endStatus: "end_status",
  },
});
