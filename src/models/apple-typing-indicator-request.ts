import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Event, eventSchema } from "./event.js";

/** Typing indicator request for Apple Messages for Business channel. */
export type AppleTypingIndicatorRequest = {
  /** The messaging channel. Must be "APPLE". @default "APPLE" */
  channel?: "APPLE";
  /** The Apple Messages for Business identifier of the sender (business). */
  from: string;
  /** The Apple Messages for Business identifier of the recipient (customer). */
  to: string;
  /**
   * The type of typing event. "START" indicates the agent began typing, "END" indicates the agent
   * stopped typing. Defaults to "START".
   *
   * @default Event.Start
   */
  event?: Event;
};

export const appleTypingIndicatorRequestSchema: Schema<AppleTypingIndicatorRequest> =
  s.object<AppleTypingIndicatorRequest>({
    channel: s.defaulted(s.literal("APPLE"), "APPLE"),
    from: s.string(),
    to: s.string(),
    event: s.defaulted(eventSchema, Event.Start),
  });
