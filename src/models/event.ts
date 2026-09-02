import { s, type EnumSchema } from "../core/index.js";

export const Event = {
  Start: "START",
  End: "END",
} as const;
export type Event = (typeof Event)[keyof typeof Event] | (string & {});

export const eventSchema: EnumSchema<Event> = s.enumOf<Event>(Event);
