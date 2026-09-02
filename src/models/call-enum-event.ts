import { s, type EnumSchema } from "../core/index.js";

export const CallEnumEvent = {
  Initiated: "initiated",
  Ringing: "ringing",
  Answered: "answered",
  Completed: "completed",
} as const;
export type CallEnumEvent = (typeof CallEnumEvent)[keyof typeof CallEnumEvent] | (string & {});

export const callEnumEventSchema: EnumSchema<CallEnumEvent> = s.enumOf<CallEnumEvent>(CallEnumEvent);
