import { s, type Schema } from "../core/index.js";
import { endStatusSchema, type EndStatus } from "./end-status.js";

export type CallWrapUpEvent = {
  durationInSeconds?: number;
  endStatus?: EndStatus;
};

export const callWrapUpEventSchema: Schema<CallWrapUpEvent> = s.object<CallWrapUpEvent>({
  durationInSeconds: s.optional(s.number()),
  endStatus: s.optional(s.lazy(() => endStatusSchema)),
  _keysMap: {
    durationInSeconds: "duration_in_seconds",
    endStatus: "end_status",
  },
});
