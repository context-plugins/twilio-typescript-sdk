import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of typing event. "START" indicates the agent began typing, "END" indicates the agent
 * stopped typing. Defaults to "START".
 */
export const Event = {
  Start: "START",
  End: "END",
} as const;
export type Event = (typeof Event)[keyof typeof Event] | (string & {});

export const eventSchema: EnumSchema<Event> = s.enumOf<Event>(Event);
