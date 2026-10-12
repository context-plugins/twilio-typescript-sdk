import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * twilio/schedule templates allow us to send a message with a schedule with different time slots
 */
export type TwilioSchedule = {
  id: string;
  title: string;
  timeSlots: string;
};

export const twilioScheduleSchema: Schema<TwilioSchedule> = s.object<TwilioSchedule>({
  id: s.string(),
  title: s.string(),
  timeSlots: s.string(),
});
